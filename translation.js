function setLanguage(lang) {
  // Salva la nuova lingua
  localStorage.setItem('language', lang);
  // Aggiorna la lingua corrente
  currentLanguage = lang;

  const translations = {
    'it': {
      "home": "HOME",
      "chiSiamo": "CHI SIAMO",
      "ricerca": "RICERCA",
      "nostriMarchi": "I NOSTRI MARCHI",
      "Produzione": "PRODUZIONE",
      "novita": "NOVITÀ",
      "certificazioni": "CERTIFICAZIONI",
      "prodotti": "PRODOTTI",
      "bucatoProfessionale": "BUCATO PROFESSIONALE",
      "bucatoDomestico": "BUCATO DOMESTICO",
      "contatti": "CONTATTI",
      "presentazione": "Industria Chimica Orsi",
      "chiSiamo2": "CHI SIAMO",
      "chiSiamo3": "Nata a Bologna nel 1907<br>ORSI è una delle poche realtà italiane di rilievo nel mercato della detergenza in polvere domestica ed istituzionale.<br>Competendo per esperienza, tecnologia e qualità con le aziende leader del settore.<br> Oggi, ORSI investe in Ricerca e Sviluppo per innovare nel campo della detergenza e della cosmesi.",
      "chiSiamo4": "Con l’impegno che",
      "titoloSostenibile1": "Innovazione Responsabile",
      "descrizioneSostenibile1": "L' innovazione Responsabile È La Chiave Per Un Progresso Sostenibile è Duraturo",
      "titoloSostenibile2": "Approvigionamento Etico",
      "descrizioneSostenibile2": "Scegliere un approvvigionamento etico è una scelta responsabile per un futuro sostenibile.",
      "titoloSostenibile3": "Proteggere Il Nostro Ambiente",
      "descrizioneSostenibile3": "Proteggere l'ambiente è proteggere il nostro futuro",
      "titoloSostenibile4": "Prendersi cura delle persone",
      "descrizioneSostenibile4": "Cura dedicata al benessere di tutti.",
      "ricerca2": "RICERCA & INNOVAZIONE TECNOLOGIA",
      "ricerca3": "Il nostro team dedicato di esperti in ricerca e sviluppo è quotidianamente impegnato nella progettazione e industrializzazione di prodotti innovativi ad elevato contenuto tecnologico e di processi produttivi sempre più sostenibili per l’ambiente e le persone.<br>Mettiamo l’accento sull’interdisciplinarietà, collaborando con partner esterni e università per garantire che le nostre soluzioni siano allineate alle più recenti scoperte scientifiche e tecnologiche.",
      "ricerca4": "LE NOSTRE TECNOLOGIE",
      "ricerca5": "Polveri e Granuli Difficili",
      "ricerca6": "Per Purificazione delle acque<br>Per Edilizia<br>Per Detergenza auto<br>Per Detergenza pellami",
      "ricerca7": "Cristalli super profumati idrosolubili",
      "ricerca8": "Per Lavatrice<br>Per Asciugatrice<br>Per Aspirapolvere<br>Per Deodorazione cassetti armadi",
      "ricerca9": "Polvere Monodose idrosolubile",
      "ricerca10": "Per Schiumogeno WC con probiotici<br>Per Detergenti<br>Per Pavimenti<br>Per Ammorbidente Superprofumato<br>Per Profumi in polveri",
      "ricerca11": "Solidi Monodose Detergenza e Cosmesi",
      "ricerca12": "Foglietti Lavatrice<br>Pastiglie Ammorbidente Superprofumato<br>Pastiglie Lavastoviglie",
      "ricerca13": "IDRO PODS monodose in polvere",
      "ricerca14": "Lavatrice<br>Lavaggio Piatti a mano<br>Pavimenti",
      "brands2": "I Nostri Marchi",
      "titoloProduzione": "PRODUZIONE",
      "descrizioneProduzione": "Lo Stabilimento Produttivo In Italia Ha La Capacità Di 4 Ton/Ora Con Linee Di Confezionamento E Pallettizzazione Automatiche E Robotizzate. Ogni Fase Della Lavorazione È Seguita Attraverso Sistematiche Analisi Chimiche Finalizzate Ad Un Continuo Controllo Delle Performance Produttive E Allo Sviluppo Dei Processi Produttivi.",
      "titoloNovita": "Novità",
      "descrizioneNovita1": "ORSI group e il suo Team È lieto di comunicare l’inizio dell’operatività della divisione Cosmetica Orsi. Locata nei pressi della nostra attuale sede comprende: Un’area dedicata di 6.000 M2 di cui 1.500 M2 coperti La creazione di un sito produttivo per la cosmesi e un laboratorio di analisi e ricerca e sviluppo dedicato. La gestione è affidata ad uno staff di tecnici e ricercatori, cosmetologi oggi pronti al debutto",
      "certificazioni2": "CERTIFICAZIONI",
    },
    'en': {
      "home": "HOME",
      "chiSiamo": "ABOUT US",
      "ricerca": "RESEARCH",
      "nostriMarchi": "OUR BRANDS",
      "Produzione": "PRODUCTION",
      "novita": "NEWS",
      "certificazioni": "CERTIFICATIONS",
      "prodotti": "PRODUCTS",
      "bucatoProfessionale": "PROFESSIONAL LAUNDRY",
      "bucatoDomestico": "DOMESTIC LAUNDRY",
      "contatti": "CONTACT",
      "presentazione": "Orsi Chemical Industry",
      "chiSiamo2": "ABOUT US",
      "chiSiamo3": "Founded in Bologna in 1907,<br>ORSI is one of the prominent Italian companies in the market of powdered detergents for both domestic and institutional use.<br>Competing in experience, technology, and quality with industry-leading companies.<br>Today, ORSI invests in Research and Development to innovate in the field of detergents and cosmetics.",
      "chiSiamo4": "With the commitment that",
      "titoloSostenibile1": "Responsible Innovation",
      "descrizioneSostenibile1": "Responsible innovation is the key to sustainable and lasting progress.",
      "titoloSostenibile2": "Ethical Sourcing",
      "descrizioneSostenibile2": "Choosing ethical sourcing is a responsible choice for a sustainable future.",
      "titoloSostenibile3": "Protecting Our Environment",
      "descrizioneSostenibile3": "Protecting the environment is protecting our future.",
      "titoloSostenibile4": "Taking Care of People",
      "descrizioneSostenibile4": "Care dedicated to the well-being of all.",
      "ricerca2": "RESEARCH & TECHNOLOGICAL INNOVATION",
      "ricerca3": "Our dedicated team of experts in research and development is daily engaged in the design and industrialization of innovative products with high technological content and increasingly sustainable processes for the environment and people.<br>We emphasize interdisciplinary collaboration, partnering with external stakeholders and universities to ensure that our solutions are aligned with the latest scientific and technological discoveries.",
      "ricerca4": "OUR TECHNOLOGIES",
      "ricerca5": "Difficult Powders and Granules",
      "ricerca6": "For water purification<br>For construction<br>For automotive detergents<br>For leather detergents",
      "ricerca7": "Hydrosoluble Super Fragrance Crystals",
      "ricerca8": "For washing machines<br>For dryers<br>For vacuum cleaners<br>For deodorizing drawers and cabinets",
      "ricerca9": "Hydrosoluble Single-Dose Powder",
      "ricerca10": "For probiotic WC foam<br>For detergents<br>For floors<br>For super fragrant fabric softeners<br>For powdered perfumes",
      "ricerca11": "Solid Single-Dose Detergents and Cosmetics",
      "ricerca12": "Laundry sheets<br>Super fragrant fabric softener tablets<br>Dishwasher tablets",
      "ricerca13": "IDRO PODS Single-Dose Powder",
      "ricerca14": "Washing machines<br>Hand washing<br>Floors",
      "brands2": "Our Brands",
      "titoloProduzione": "PRODUCTION",
      "descrizioneProduzione": "The production plant in Italy has a capacity of 4 tons per hour with automated and robotic packaging and palletizing lines. Every step of the manufacturing process is monitored through systematic chemical analyses to ensure continuous control of production performance and the development of manufacturing processes.",
      "titoloNovita": "News",
      "descrizioneNovita1": "ORSI Group and its team are excited to announce the start of operations of the Orsi Cosmetics division. Located near our current headquarters, it includes: a dedicated area of 6,000 square meters, of which 1,500 square meters are covered. This includes the creation of a production site for cosmetics and a laboratory for analysis and research and development dedicated. Management is entrusted to a team of technicians and researchers, cosmetologists ready for their debut today.",
      "certificazioni2": "CERTIFICATIONS",
    },
      'fr': {
        "home": "ACCUEIL",
        "chiSiamo": "À PROPOS DE NOUS",
        "ricerca": "RECHERCHE",
        "nostriMarchi": "NOS MARQUES",
        "Produzione": "PRODUCTION",
        "novita": "NOUVEAUTÉS",
        "certificazioni": "CERTIFICATIONS",
        "prodotti": "PRODUITS",
        "bucatoProfessionale": "LAVERIE PROFESSIONNELLE",
        "bucatoDomestico": "LAVERIE DOMESTIQUE",
        "contatti": "CONTACTS",
        "presentazione": "Industrie Chimique Orsi",
        "chiSiamo2": "À PROPOS DE NOUS",
        "chiSiamo3": "Fondée à Bologne en 1907,<br>ORSI est l'une des rares entreprises italiennes de premier plan sur le marché des détergents en poudre domestiques et institutionnels.<br>Compétition pour l'expérience, la technologie et la qualité avec les entreprises leaders du secteur.<br>Aujourd'hui, ORSI investit dans la recherche et le développement pour innover dans le domaine des détergents et des cosmétiques.",
        "chiSiamo4": "Avec l'engagement que",
        "titoloSostenibile1": "Innovation Responsable",
        "descrizioneSostenibile1": "L'innovation responsable est la clé d'un progrès durable et durable.",
        "titoloSostenibile2": "Approvisionnement Éthique",
        "descrizioneSostenibile2": "Choisir un approvisionnement éthique est un choix responsable pour un avenir durable.",
        "titoloSostenibile3": "Protéger notre environnement",
        "descrizioneSostenibile3": "Protéger l'environnement, c'est protéger notre avenir.",
        "titoloSostenibile4": "Prendre soin des gens",
        "descrizioneSostenibile4": "Soin dédié au bien-être de tous.",
        "ricerca2": "RECHERCHE & INNOVATION TECHNOLOGIQUE",
        "ricerca3": "Notre équipe dédiée d'experts en recherche et développement est quotidiennement engagée dans la conception et l'industrialisation de produits innovants à forte teneur technologique et de processus de production de plus en plus durables pour l'environnement et les personnes.<br>Nous mettons l'accent sur l'interdisciplinarité en collaborant avec des partenaires externes et des universités pour nous assurer que nos solutions sont alignées sur les dernières découvertes scientifiques et technologiques.",
        "ricerca4": "NOS TECHNOLOGIES",
        "ricerca5": "Poudres et granulés difficiles",
        "ricerca6": "Pour la purification de l'eau<br>Pour la construction<br>Pour les détergents automobiles<br>Pour les détergents en cuir",
        "ricerca7": "Cristaux super parfumés hydrosolubles",
        "ricerca8": "Pour les machines à laver<br>Pour les sécheuses<br>Pour les aspirateurs<br>Pour la désodorisation des tiroirs et des placards",
        "ricerca9": "Poudre monodose hydrosoluble",
        "ricerca10": "Pour la mousse WC probiotique<br>Pour les détergents<br>Pour les sols<br>Pour les assouplissants super parfumés<br>Pour les parfums en poudre",
        "ricerca11": "Détergents et cosmétiques solides monodoses",
        "ricerca12": "Feuilles de lessive<br>Comprimés d'assouplissant super parfumé<br>Comprimés pour lave-vaisselle",
        "ricerca13": "Poudre monodose IDRO PODS",
        "ricerca14": "Machines à laver<br>Lavage à la main<br>Sols",
        "brands2": "Nos Marques",
        "titoloProduzione": "PRODUCTION",
        "descrizioneProduzione": "L'usine de production en Italie a une capacité de 4 tonnes par heure avec des lignes d'emballage automatisées et robotisées. Chaque étape du processus de fabrication est surveillée grâce à des analyses chimiques systématiques pour garantir un contrôle continu des performances de production et le développement des processus de fabrication.",
        "titoloNovita": "Nouveautés",
        "descrizioneNovita1": "ORSI Group et son équipe sont heureux d'annoncer le début des opérations de la division Orsi Cosmetics. Située près de notre siège actuel, elle comprend : une zone dédiée de 6 000 mètres carrés, dont 1 500 mètres carrés sont couverts. Cela comprend la création d'un site de production pour les cosmétiques et un laboratoire pour analysis et recherche et développement dédié. La gestion est confiée à une équipe de techniciens et de chercheurs, cosmetologues prêts pour leurs débuts aujourd'hui.",
        "certificazioni2": "CERTIFICATIONS",
      },
      'de': {
        "home": "STARTSEITE",
        "chiSiamo": "ÜBER UNS",
        "ricerca": "RECHERCHE",
        "nostriMarchi": "UNSERE MARKEN",
        "Produzione": "PRODUKTION",
        "novita": "NEUHEITEN",
        "certificazioni": "ZERTIFIZIERUNGEN",
        "prodotti": "PRODUKTE",
        "bucatoProfessionale": "PROFESSIONELLE WÄSCHE",
        "bucatoDomestico": "HAUSWÄSCHE",
        "contatti": "KONTAKTE",
        "presentazione": "Orsi Chemische Industrie",
        "chiSiamo2": "ÜBER UNS",
        "chiSiamo3": "Gegründet 1907 in Bologna,<br>ist ORSI eines der wenigen bedeutenden italienischen Unternehmen auf dem Markt für Haus- und Institutionenpulverdetergenzien.<br>Im Wettbewerb um Erfahrung, Technologie und Qualität mit führenden Unternehmen der Branche.<br>Heute, ORSI investiert in Forschung und Entwicklung, um im Bereich von Waschmitteln und Kosmetika zu innovieren.",
        "chiSiamo4": "Mit dem Engagement, das",
        "titoloSostenibile1": "Verantwortliche Innovation",
        "descrizioneSostenibile1": "Verantwortliche Innovation ist der Schlüssel für nachhaltigen und dauerhaften Fortschritt.",
        "titoloSostenibile2": "Ethical Sourcing",
        "descrizioneSostenibile2": "Die Wahl einer ethischen Beschaffung ist eine verantwortungsbewusste Wahl für eine nachhaltige Zukunft.",
        "titoloSostenibile3": "Unsere Umwelt schützen",
        "descrizioneSostenibile3": "Die Umwelt zu schützen bedeutet, unsere Zukunft zu schützen.",
        "titoloSostenibile4": "Für Menschen sorgen",
        "descrizioneSostenibile4": "Pflege für das Wohlbefinden aller.",
        "ricerca2": "FORSCHUNG & TECHNOLOGISCHE INNOVATION",
        "ricerca3": "Unser engagiertes Team von Experten für Forschung und Entwicklung ist täglich damit beschäftigt, innovative Produkte mit hoher technologischer Komponente und immer nachhaltigere Produktionsprozesse für die Umwelt und die Menschen zu entwerfen und zu industrialisieren.<br>Wir legen Wert auf Interdisziplinarität und arbeiten mit externen Partnern und Universitäten zusammen, um sicherzustellen, dass unsere Lösungen auf dem neuesten Stand der wissenschaftlichen und technologischen Erkenntnisse sind.",
        "ricerca4": "UNSERE TECHNOLOGIEN",
        "ricerca5": "Schwierige Pulver und Granulate",
        "ricerca6": "Für die Wasseraufbereitung<br>Für den Bau<br>Für Autowaschmittel<br>Für Lederwaschmittel",
        "ricerca7": "Hydrosoluble Super Duftkristalle",
        "ricerca8": "Für Waschmaschinen<br>Für Trockner<br>Für Staubsauger<br>Für die Geruchsbekämpfung in Schubladen und Schränken",
        "ricerca9": "Hydrosoluble Einzeldosispulver",
        "ricerca10": "Für WC-Schaum mit Probiotika<br>Für Reinigungsmittel<br>Für Böden<br>Für superduftende Weichspüler<br>Für Pulverparfums",
        "ricerca11": "Feste Einzeldosis-Waschmittel und Kosmetika",
        "ricerca12": "Waschblätter<br>Superduftende Weichspülertabletten<br>Tabletten für Geschirrspüler",
        "ricerca13": "IDRO PODS Einzeldosispulver",
        "ricerca14": "Waschmaschine<br>Handwäsche<br>Böden",
        "brands2": "Unsere Marken",
        "titoloProduzione": "PRODUKTION",
        "descrizioneProduzione": "Das Produktionswerk in Italien hat eine Kapazität von 4 Tonnen pro Stunde mit automatisierten und robotisierten Verpackungs- und Palettierlinien. Jeder Schritt des Herstellungsprozesses wird durch systematische chemische Analysen überwacht, um eine kontinuierliche Kontrolle der Produktionsleistung und die Entwicklung der Herstellungsprozesse sicherzustellen.",
        "titoloNovita": "Neuheiten",
        "descrizioneNovita1": "ORSI Group und sein Team freuen sich, den Beginn des Betriebs der Abteilung Orsi Cosmetics bekannt zu geben. Diese befindet sich in der Nähe unseres aktuellen Hauptsitzes und umfasst: Einen dedizierten Bereich von 6.000 Quadratmetern, wovon 1.500 Quadratmeter überdacht sind. Dies beinhaltet die Schaffung eines Produktionsstandorts für Kosmetika sowie ein Labor für Analyse und Forschung und Entwicklung. Die Leitung obliegt einem Team von Technikern und Forschern, Kosmetologen, die heute bereit für ihren Start sind.",
        "certificazioni2": "ZERTIFIZIERUNGEN",
      }
    };
  

  const elements = document.querySelectorAll('[data-translation]');
      
elements.forEach(element => {
    const translationKey = element.getAttribute('data-translation');
    // Utilizza innerHTML per mantenere il formato delle nuove righe
    element.innerHTML = translations[lang][translationKey];
});
}
