#!/usr/bin/env bash
# Generates AVIF + WebP + JPEG variants at multiple widths for every source image.
# Source dir: assets/images/   Output dir: assets/images/out/
# Never upscales (caps width at min(target, original)).
# Hero gets full srcset treatment (640w/1280w/1920w); galleries get 480w/960w.

set -e
cd "$(dirname "$0")/../assets/images"
mkdir -p out

# AVIF encode tuning: cpu-used 6 = fast, crf 32 = good quality at small size.
AVIF_OPTS="-c:v libaom-av1 -still-picture 1 -cpu-used 6 -crf 32 -b:v 0"
WEBP_OPTS="-c:v libwebp -quality 80"
JPEG_OPTS="-q:v 3"  # ~85% quality

encode () {
  local src="$1"
  local target_w="$2"
  local name="${src%.*}"

  local jpg="out/${name}-${target_w}w.jpg"
  local webp="out/${name}-${target_w}w.webp"
  local avif="out/${name}-${target_w}w.avif"

  # scale='min(target,iw)':-2 — never upscale, ensure even height for codecs
  local scale_filter="scale='min(${target_w},iw)':-2:flags=lanczos"

  [ -f "$jpg" ]  || ffmpeg -y -loglevel error -i "$src" -vf "$scale_filter" $JPEG_OPTS "$jpg"
  [ -f "$webp" ] || ffmpeg -y -loglevel error -i "$src" -vf "$scale_filter" $WEBP_OPTS "$webp"
  [ -f "$avif" ] || ffmpeg -y -loglevel error -i "$src" -vf "$scale_filter" $AVIF_OPTS "$avif"

  printf "  %sw -> jpg %5s, webp %5s, avif %5s\n" \
    "$target_w" \
    "$(stat -c%s "$jpg" 2>/dev/null | numfmt --to=iec)" \
    "$(stat -c%s "$webp" 2>/dev/null | numfmt --to=iec)" \
    "$(stat -c%s "$avif" 2>/dev/null | numfmt --to=iec)"
}

for src in *.png *.jpg *.webp; do
  [ -f "$src" ] || continue
  echo "=== $src ==="

  if [[ "$src" == 00-hero* ]]; then
    encode "$src" 640
    encode "$src" 1280
    encode "$src" 1920
  else
    encode "$src" 480
    encode "$src" 960
  fi
done

echo "--- DONE ---"
ls -lh out | tail -50
