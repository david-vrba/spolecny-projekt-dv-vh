// ================================================================
//  DATABÁZE MATERIÁLŮ – editujte POUZE tento soubor
// ================================================================
//
//  JAK PŘIDAT NOVÉ TÉMA:
//    1. Zkopírujte libovolný blok { ... } níže
//    2. Upravte hodnoty (subjectId, title, description, date, materials)
//    3. Vložte blok před řádek:  ]; // ← konec topics
//    4. Uložte soubor – hotovo.
//
//  Typy materiálů:  'html' | 'pdf' | 'video' | 'audio' | 'link'
//  isNew: true      → zobrazí žlutý odznak „Nové"
// ================================================================

// ── PŘEDMĚTY ────────────────────────────────────────────────────
// Pořadí určuje pořadí v menu. Neměňte 'id'.

const subjects = [
  { id:'all', name:'Vše',  fullName:'Všechny předměty',
    desc:'Přehled všech dostupných materiálů ze seminářů kabinetu informatiky.',
    color:'#4f46e5' },
  { id:'sin', name:'SIN', fullName:'SIN – Seminář z informatiky',
    desc:'Materiály pro seminář z informatiky – zápisky, pracovní listy a výukové lekce.',
    color:'#0284c7' },
  { id:'cia', name:'CIA', fullName:'CIA – Cvičení z informatiky a algoritmizace',
    desc:'Pracovní listy, videa a podcasty pro výuku algoritmizace a programování.',
    color:'#16a34a' },
  { id:'pvi', name:'PVI', fullName:'PVI – Příprava na VŠ z informatiky',
    desc:'Přípravné materiály a simulace testů pro přijímací zkoušky na FIT VUT a FI MU.',
    color:'#9333ea' },
  { id:'gdm', name:'GDM', fullName:'GDM – Grafika, design a multimédia',
    desc:'Výukové materiály pro digitální grafiku, sazbu dokumentů a práci s Adobe nástroji.',
    color:'#db2777' },
  { id:'zelva', name:'ŽELVA', fullName:'Turtle – kreslení pomocí želvy',
    desc:'Výukové materiály pro želví grafiku.',
    color:'green' }
];

// ── TÉMATA A MATERIÁLY ───────────────────────────────────────────
const topics = [

  // ════════════════════ SIN ═══════════════════════════════════════
  {
    subjectId: 'sin',
    category:  'Architektura & OS',
    title:     '1-počítač a jeho základní komponenty, stručná charakteristika hardware, připojení periferních zařízení k počítači, typy procesorů a počítačů.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Hardware - celkový přehled', type: 'html', url: './sin/1-hardware-aic.html' },
      { title: 'Moderní architektura procesoru', type: 'html', url: './sin/1-moderni-architektura-procesoru.html' },
      { title: 'Procesory a hybridní jádra NPU', type: 'html', url: './sin/1-procesory-hybridni-jadra-npu.html' },
      { title: 'Základní deska, sběrnice, chipsety', type: 'html', url: './sin/1-zakladni-deska-sbernice-chipsety.html' },		
      { title: 'USB 1.0 až 3.2 Historie a kódování', type: 'html', url: './sin/1-usb-historie-kodovani.html' },		
      { title: 'USB-C Power Delivery a Alt Mode', type: 'html', url: './sin/1-usb-c-power-delivery-alt-mode.html' },		
      { title: 'Operační paměť (DDR5)', type: 'html', url: './sin/1-operacni-pamet-ddr5.html' },
      { title: 'Úložiště NVME, NAND Flash', type: 'html', url: './sin/1-uloziste-nvme-nand-flash.html' },
      { title: 'Grafické čipy, ray tracing, tensor', type: 'html', url: './sin/1-graficke-cipy-ray-tracing-tensor.html' },
      { title: 'Konektivita USB4, Thunderbolt 5', type: 'html', url: './sin/1-budoucnost-konektivity-usb4-tb5.html' },
      { title: 'PC vs. Mac – Srovnání v praxi', type: 'html', url: './sin/1-srovnani-pc-vs-mac.html' },
      { title: 'Apple Silicon - unifikovaná architektura', type: 'html', url: './sin/1-apple-silicon-unifikovana-architektura.html' },
      { title: 'Závěr a vize 2030 Budoucnost hardwaru', type: 'html', url: './sin/1-zaver-vize-2030-budoucnost-hardwaru.html' }		
    ]
  },

  {
    subjectId: 'sin',
    category:  'Architektura & OS',
    title:     '3. Souborový systém, soubory a práce s nimi',
    description: 'uložení dat v počítači, RAID, souborové systémy a jejich vlastnosti, operace se soubory v operačním sytému, typy souborů, archivace a komprimace dat.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html', url: './sin/3-souborove-systemy-raid-komprimace-aic.html' }
    ]
  },
	
	
  {
    subjectId: 'sin',
    category:  'Architektura & OS',
    title:     '4. Operační systémy',
    description: 'Historie, současné operační systémy – příklady a charakteristika, základní vlastnosti, multitasking, ovladač a další pojmy OS, virtualizace, mobilní operační systémy.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html', url: './sin/4-operacni-systemy-aic.html' }
    ]
  },
	
	
  {
    subjectId: 'sin',
    category:  'Architektura & OS',
    title:     '6. Základní principy informatiky',
    description: 'Historie a princip počítače, reprezentace informací v počítači.',
    date:      'Březen 2026',
    materials: [
      { title: 'Přednáška (PDF)',              type: 'pdf',  url: './sin/6-zakladni-principy-informatiky.pdf' },
      { title: 'Interaktivní průvodce (AIC)',  type: 'html', url: './sin/6-zakladni-principy-informatiky-aic.html' }
    ]
  },

  {
    subjectId: 'sin',
    category:  'Sazba dokumentů',
    title:     '7. LaTeX – systém pro sazbu dokumentů',
    description: 'Interaktivní studijní průvodce systémem LaTeX, TeX a Typst.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html', url: './sin/7-tex-latex-typst-aic.html' }
    ]
  },

  {
    subjectId: 'sin',
    category:  'Sazba dokumentů',
    title:     '9, 10. Tabulkový kalkulátor Excel',
    description: 'Kurz excelu365',
    date:      'Duben 2026',
    isNew:     true,
    materials: [
      { title: 'vm 1', type: 'html', url: './sin/9-10-excel_vyukovy_material_aic.html' },
      { title: 'vm 1 - pro tučnáky', type: 'html', url: './sin/9-10-excel_vyukovy_material_rozsireny_aic.html' },
      { title: 'vm 2x', type: 'html', url: './sin/9-10-excel-vzdelavaci-material-g-2.html' },
      { title: 'soubor EP_volby_2024_dataset', type: 'pdf', url: './sin/EP_volby_2024_dataset_aic.xlsx' },
      { title: 'soubor Excel_PQ_PP_UNPIVOT_Template.xlsx', type: 'pdf', url: './sin/Excel_PQ_PP_UNPIVOT_Template.xlsx' },
      { title: 'KT - datová analytika', type: 'html', url: './sin/9-10-datova-analytika-aic.html' }
    ]
  },
	
	
  {
    subjectId: 'sin',
    category:  'Počítačové sítě',
    title:     '12. Škodlivý software a bezpečnost na Internetu',
    description: 'Škodlivý software, princip fungování, rizika a možnosti prevence, elektronická pošta, SPAM, antivirové programy, bezpečnost na Internetu',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Kyberbezpečnost', type: 'html', url: './sin/12-kyberbezpecnost.html' },
      { title: 'Lidský faktor', type: 'html', url: './sin/12-kyberbezpecnost-lidsky-faktor-prezentace.html' }
    ]
  },

  {
    subjectId: 'sin',
    category:  'Počítačové sítě',
    title:     '14. Počítačové sítě',
    description: 'Interaktivní studijní průvodce základním přehledem v počítačových sítích.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Počítačové sítě', type: 'html', url: './sin/14-kurz-pocitacove-site-1.html' },
      { title: 'Kudy teče internet', type: 'html', url: './sin/14-kudy-tece-internet.html' },
      { title: 'Domácí síť', type: 'html', url: './sin/14-sit-domaci-sit.html' },
    ]
  },
	
  {
    subjectId: 'sin',
    category:  'web prakticky (konstrukce modelové stránky)',
    title:     '16-17. Tvorba webových stránek WWW a CSS',
    description: 'Interaktivní studijní průvodce základy tvorby www stránky.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Responzivní menu', type: 'html', url: './sin/16-17-responzivni-menu-aic.html' },
      { title: 'Tvorba moderních Hero sekcí', type: 'html', url: './sin/16-17-hero-sekce-aic.html' },
      { title: 'Hero sekce', type: 'html', url: './sin/16-17-web-hero.html' },
      { title: 'Responzivní obrázky', type: 'html', url: './sin/16-17-responzivni-obrazky-aic.html' },
      { title: 'Obrázky na moderním webu', type: 'html', url: './sin/16-17-obrazky-na-webu-aic.html' }
    ]
  },
	
  {
    subjectId: 'sin',
    category:  'PHP a web',
    title:     'PHP – dynamické webové stránky',
    description: 'Úvod do PHP, formuláře, práce s textovými soubory, spojení s MySQL a SQL příkazy SELECT a JOIN.',
    date:      'Říjen 2024',
    materials: [
      { title: 'Úvod do PHP',               type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-uvod-do-php.php' },
      { title: 'Práce s polem a PHP',        type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-prace-s-polem.php' },
      { title: 'PHP a formuláře I',          type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-a-formulare-i.php' },
      { title: 'PHP a formuláře II',         type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-a-formulare-ii.php' },
      { title: 'Vizuální návrh formuláře',   type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-vizualni-navrh-html-formulare.php' },
      { title: 'Princip dynamického webu',   type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-princip-realizace-dynamickeho-webu.php' },
      { title: 'PHP a funkce',               type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-a-funkce.php' },
      { title: 'Práce s textovým souborem',  type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-prace-s-textovym-souborem.php' },
      { title: 'Spojení PHP a MySQL',        type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-spojeni-php-a-mysql.php' },
      { title: 'SQL a příkaz SELECT',        type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-sql-a-prikaz-select.php' },
      { title: 'SQL a příkaz LEFT JOIN',     type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-sql-a-prikaz-left-join.php' },
      { title: 'SQL a funkce',               type: 'link', url: 'https://www.gjszlin.cz/ivt/esf/php/php-sql-a-funkce.php' },
      { title: 'News Portal od základů',     type: 'html', url: './sin/php-kurz-news-portal-aic.html' }
    ]
  },

  {
    subjectId: 'sin',
    category:  'PHP a web',
    title:     '20. Principy generování HTML pomocí PHP',
    description: 'principy generování HTML kódu www stránek v jazyce PHP, práce s řetězci, funkcemi, zpracování dat ze souborů',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce', type: 'html', url: './sin/20-principy-generovani-html-pomoci-php-aic.html' }
    ]
  },
		
  {
    subjectId: 'sin',
    category:  'Programování',
    title:     '24. Datové typy a struktury',
    description: 'Proměnné, seznamy, pole, dictionary, tuple, FIFO, LIFO a jejich využití při řešení programátorských úloh',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce', type: 'html', url: './sin/24-datove-struktury.html' }
    ]
  },
		
	
  // ════════════════════ CIA ═══════════════════════════════════════
  {
    subjectId: 'cia',
    category:  'Algoritmizace',
    title:     'Základy algoritmizace',
    description: 'Základní pojmy algoritmizace a programování, algoritmus a jeho vlastnosti.',
    date:      'Říjen 2024',
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html',  url: './cia/algoritmus-aic.html' }
    ]
  },

  {
    subjectId: 'cia',
    category:  'Python',
    title:     'Python – pokladna',
    description: 'Implementace jednoduché pokladny a nákupní akce.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html', url: './cia/python-pokladna-aic.html' }
    ]
  },

  {
    subjectId: 'cia',
    category:  'Python',
    title:     '25. Python – Bubble Sort',
    description: 'Třídicí algoritmus Bubble Sort a jeho optimalizace.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html',  url: './cia/python-bubblesort-aic.html' },
      { title: 'Video – krokování algoritmu', type: 'video', url: './cia/video-bubblesort.mp4' }
    ]
  },

  {
    subjectId: 'cia',
    category:  'Python',
    title:     'Python – hrací kostka a její vykreslení',
    description: 'Algoritmus pro responzivní kresbu jedné strany 6stěnné hrací kostky.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html', url: './cia/python-kostka-vykresleni-aic.html' }
    ]
  },

  {
    subjectId: 'cia',
    category:  'Python',
    title:     'Python – hod kostkami a detekce kombinací',
    description: 'Simulace náhodného hodu 6 kostkami a detekce výherních kombinací.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html', url: './cia/python-kostky-a-jejich-kombinace-aic.html' }
    ]
  },

  {
    subjectId: 'cia',
    category:  'Python',
    title:     'Python – 2D pole',
    description: 'Práce s dvourozměrným polem v Pythonu',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html', url: './cia/python-2dpole-aic.html' },
      { title: 'Cvičení', type: 'html', url: './cia/python-2dpole-cviceni-aic.html' }
    ]
  },
	
	
  {
    subjectId: 'cia',
    category:  'Logické úlohy',
    title:     'Magické kruhy',
    description: 'Kombinatorická kouzelnická úloha s kruhy.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html', url: './cia/magicke-kruhy-aic.html' }
    ]
  },
	
  {
    subjectId: 'cia',
    category:  'Programování',
    title:     '23. Podprogramy (funkce, metody)',
    description: 'použití, principy tvorby a popis vlastností funkcí, předávání parametrů odkazem a hodnotou, globální a lokální proměnné',
    date:      'Duben 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce', type: 'html', url: './cia/funkce-kompletni-vyuka-v3-aic.html' }
    ]
  },
	

  {
    subjectId: 'cia',
    category:  'C#',
    title:     'C# – Programování v jazyce C#',
    description: 'Kurz programování v jazyce C#.',
    date:     'březen 2026',
    isNew:    true,
    materials: [
      { title: '1, 2 – úvod do platformy .NET, proměnné, typy a řídící struktury', type: 'html', url: './cia/csharp-claude-1-2-aic.html' },
      { title: '3, 4 – Metody, parametry a návratové hodnoty, přetěžování, výchozí hodnoty a refaktoring', type: 'html', url: './cia/csharp-claude-3-4.html' },
      { title: '5 – Pole a kolekce v C#', type: 'html', url: './cia/csharp-claude-5-6-aic.html' },
      { title: '.NET úvodní přehled 1', type: 'pdf', url: './cia/csharp-prezentace-modern-winforms-net10-1.pdf' },		
      { title: '.NET úvodní přehled 2', type: 'pdf', url: './cia/csharp-prezentace-modern-winforms-net10-2.pdf' },		
      { title: 'Kurz C# WinForms I (6 hodin)', type: 'html', url: './cia/csharp-gemini-komplet-i-1-6.html' },
      { title: 'Kurz C# WinForms II (6 hodin)', type: 'html', url: './cia/csharp-gemini-komplet-ii-7-13.html' },
      { title: 'Winforms – Google kurz (8 hodin)', type: 'pdf', url: './cia/csharp-winforms-kurz.pdf' },		
      { title: 'Winforms – Claude kurz (8–12 hodin)', type: 'html', url: './cia/csharp-winforms-komplet-claude-aic.html' },
      { title: 'Spojové seznamy google (4–10 hodin)', type: 'html', url: './cia/csharp-spojove-seznamy-google-aic.html' },
      { title: 'Spojové seznamy a stromy v C#', type: 'pdf', url: './cia/csharp-spojove-seznamy-stromy-1.pdf' },	
      { title: 'Obousměrný seznam, Generika, .NET kolekce a Rekurze v C#', type: 'pdf', url: './cia/csharp-spojove-seznamy-stromy-2.pdf' }		
    ]
  },


  // ════════════════════ PVI ═══════════════════════════════════════
  {
    subjectId: 'pvi',
    category:  'Příprava',
    title:     'Požadavky k přijímacím zkouškám',
    description: 'Souhrn témat z matematiky a informatiky pro přijímací zkoušky na FIT VUT a FI MU.',
    date:      'Leden 2025',
    materials: [
      { title: 'Přehled témat (PDF)', type: 'pdf', url: './pvi/pozadavky-vs.pdf' }
    ]
  },

  // ════════════════════ GDM ═══════════════════════════════════════
	 
	
  {
    subjectId: 'gdm',
    category:  'Teoretický přehled',
    title:     '1. Současná počítačová grafika v praxi',
    description: 'Počítačová grafika, její typy, principy a použití v praxi. Programy pro zpracování grafiky, designu, tiskovin, multimédií, jejich specifika a možnosti nasazení v praxi. Vyhledávání informací souvisejících s počítačovou grafikou. Internetové fotogalerie a fotobanky.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html', url: './gdm/1-soucasna-pocitacova-grafika-v-praxi-aic.html' }
    ]
  },
		
	
  {
    subjectId: 'gdm',
    category:  'Teoretický přehled',
    title:     '5. Práce s grafickými formáty a písmy, hardware pro počítačovou grafiku',
    description: 'Charakteristika souborů typu PSD, JPEG, GIF, BMP, PNG, PDF, XML, AI, EPS a jejich použití. Využití a možnosti programu Adobe Bridge. Hardware pro počítačovou grafiku.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce formáty (AIC)', type: 'html', url: './gdm/5-formaty-grafickych-souboru-aic.html' },
      { title: 'Hardware pro počítačovou grafiku', type: 'html', url: './gdm/5-hardware-pro-pocitacovou-grafiku-prehled.html' }
    ]
  },
	
	
  {
    subjectId: 'gdm',
    category:  'Adobe InDesign',
    title:     '16. InDesign – hledání, nahrazování a regulární výrazy',
    description: 'Hledání, nahrazování, regulární výrazy a jejich využití při sazbě dokumentů. GREP.',
    date:      'Březen 2026',
    isNew:     true,
    materials: [
      { title: 'Interaktivní průvodce (AIC)', type: 'html', url: './gdm/16-grep-aic.html' },
      { title: 'DTP kurz (YouTube)',          type: 'link', url: 'https://www.youtube.com/watch?v=eMBqFFv00mc&list=PLzk4_xMd_Py81TbGRZNUpx0_rOnUJjdUO&index=10' }
    ]
  },	

  {
    subjectId: 'zelva',
    category:  'Želví grafika',
    title:     '1. Kurz kreslení pomocí algoritmů',
    description: 'Kreslení pomocí knihovny Turtle v Pythonu.',
    date:      'Duben 2026',
    isNew:     true,
    materials: [
      { title: '1 - základní pohyb (AIC)', type: 'html', url: './zelva/zelva-1-zakladni-pohyb-aic.html' },
      { title: '2 - okno (AIC)', type: 'html', url: './zelva/zelva-2-okno-aic.html' },
      { title: '3 - barvy a logo (AIC)', type: 'html', url: './zelva/zelva-3-logo-barvy-aic.html' },
      { title: '4 - domeček (AIC)', type: 'html', url: './zelva/zelva-4-domecek-aic.html' }
    ]
  }
	

]; // ← konec topics  ← NOVÉ BLOKY VKLÁDEJTE TĚSNĚ NAD TENTO ŘÁDEK
