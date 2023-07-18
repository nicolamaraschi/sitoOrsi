function setLanguage(lang) {

        // Salva la nuova lingua
        localStorage.setItem('language', lang);
        // Aggiorna la lingua corrente
        currentLanguage = lang;

        const translations = {
        'it': {

            'innovazione':'Innovazioni',
            'bucatoProfessionale':'Bucato Professional',
                'bucatoDomestico':'Bucato Domestico',
                'contatti':'Contatti',
                'schedaTecnica':'Ottieni Scheda Tecnica/Sicurezza',



            'titoloRicercaSviluppo':'Ricerca E Sviluppo',
                'descrizioneRicercaSviluppo':'Il Nostro Team Dedicato Di Esperti In Ricerca E Sviluppo Lavora Instancabilmente Per Esplorare Nuovi Orizzonti, Sperimentare Nuove Tecnologie E Sviluppare Prodotti All avanguardia. Mettiamo L" accento Sull interdisciplinarietà, Collaborando Con Partner Esterni E Università Per Garantire Che Le Nostre Soluzioni Siano Allineate Alle Più Recenti Scoperte Scientifiche E Tecnologiche',

                'titoloAssistenza':'Assistenza Al Cliente',
                'descrizioneAssistenza':'ORSI Group Assiste Il Cliente Nell’intero Processo Di Fabbricazione Del Prodotto Per Soddisfarne Ogni Esigenza Garantendo Competitività, Controllo Costante Della Produzione E Gli Alti Standard Qualitativi, Nel Rispetto Delle Norme Nazionali Ed Internazionali.',

                'titoloTecnologiaDesign':'Tecnologia E Design',
                'descrizioneTecnologiaDesign':'Apparecchiature, Linee Di Confezionamento Di Ultima Generazione E Personale Altamente Qualificato Garantiscono Prodotti Di Eccellenza. Design E Qualità Sono I Simboli Del Nostro Made In Italy.',

                'titoloProduzione':'PRODUZIONE',
                'descrizioneProduzione':'Lo Stabilimento Produttivo In Italia Ha La Capacità Di 4 Ton/Ora Con Linee Di Confezionamento E Pallettizzazione Automatiche E Robotizzate. Ogni Fase Della Lavorazione È Seguita Attraverso Sistematiche Analisi Chimiche Finalizzate Ad Un Continuo Controllo Delle Performance Produttive E Allo Sviluppo Dei Processi Produttivi.',

                'titoloCertificazioni':'Le Nostre Certificazioni',
                'titoloBiologico':'Certificato Detersivo Biologico',
                'descrizioneBiologico1':'Il Nostro Detersivo Biologico È Certificato Da Un autorità Riconosciuta Nel Settore Dell ecologia E Dell ambiente. Questa Certificazione Attesta Che Il Nostro Prodotto Rispetta Rigorosi Standard Di Produzione Ecologica, Utilizzando Ingredienti Naturali E Sostenibili',
                'descrizioneBiologico2':'Il Certificato Detersivo Biologico Garantisce Che Il Nostro Prodotto Non Contenga Sostanze Chimiche Nocive Per L ambiente E Per La Salute Umana. Inoltre, È Prodotto Con Metodi Che Minimizzano L impatto Ambientale Durante Tutto Il Ciclo Di Vita, Dalla Produzione All uso E Allo Smaltimento.',
                'titoloVeritas':'Certificato Bureau Veritas',
                'descrizioneVeritas1':'Il Nostro Prodotto È Stato Sottoposto A Una Valutazione Approfondita E Ha Ottenuto Il Certificato Rilasciato Da Bureau Veritas, Un organizzazione Leader Nel Settore Delle Certificazioni.',
                'descrizioneVeritas2':'Bureau Veritas È Riconosciuta A Livello Internazionale Per La Sua Competenza E Indipendenza Nelle Valutazioni Di Conformità. Il Certificato Bureau Veritas Attesta Che Il Nostro Prodotto Soddisfa Rigorosi Standard Di Qualità, Sicurezza E Sostenibilità.',
                'descrizioneVeritas3':'La certificazione Bureau Veritas è un segno di fiducia per i consumatori, poiché conferma che il nostro prodotto è stato sottoposto a controlli e test accurati per garantire la sua qualità e conformità alle normative vigenti.',

                'titoloBrands':'I Nostri Brand',
                'descrizioneBrands':'Descrizione Principale Dei Nostri Servizi',

                'titoloNovita':'Novità',
                'descrizioneNovita1':'Siamo Lieti Di Annunciare L avvio Delle Operazioni Della Divisione Cosmetica Di Orsi Group. Situata Nelle Vicinanze Della Nostra Sede Attuale, Questa Nuova Divisione Rappresenta Un importante Espansione Per Lazienda.',
                'descrizioneNovita2':'La Divisione Cosmetica Dispone Di Un area Dedicata Di 6.000 M2, Di Cui 1.500 M2 Coperti. Qui È Stato Creato Un Sito Produttivo Completamente Attrezzato Per La Produzione Di Cosmetici, Che Include Un Laboratorio Di Analisi, Ricerca E Sviluppo.',
                'descrizioneNovita3':'La Gestione Di Questa Divisione È Affidata A Un Team Competente Di Tecnici E Ricercatori Cosmetologi, Pronti A Fare Il Loro Debutto Nel Settore. Siamo Entusiasti Di Unire Le Nostre Competenze E La Nostra Passione Per La Cosmesi Per Offrire Prodotti Di Alta Qualità E Soluzioni Innovative Ai Nostri Clienti.',
                'descrizioneNovita4':'Questo Nuovo Sviluppo Rappresenta Un Importante Passo Avanti Per Orsi Group Nel Settore Cosmetico, E Siamo Pronti Ad Affrontare Questa Nuova Sfida Con Impegno E Determinazione. Continueremo A Lavorare Duramente Per Offrire Prodotti Di Eccellenza E Per Soddisfare Le Esigenze Sempre Crescenti Dei Nostri Clienti.',

                'titiloIdrocristalli':'IDROCRISTALLI',
                'descrizioneIdrocristalli':'100% OLII ESSENZIALI NATURALI E BIOLOGICI',

                'titoloSostenibile1':'Il Nostro Viaggio Nel Business Sostenibile',
                'titoloSostenibile2':'nnovazione Responsabile',
                'descrizioneSostenibile1':'L innovazione Responsabile È La Chiave Per Un Progresso Sostenibile E Duraturo',
                'titoloSostenibile3':'Approvigionamento Etico',
                'descrizioneSostenibile2':'Scegliere Un Approvvigionamento Etico È Una Scelta Responsabile Per Un Futuro Sostenibile.',
                'titoloSostenibile4':'Proteggere Il Nostro Ambiente',
                'descrizioneSostenibile3':"Proteggere l'ambiente è proteggere il nostro futuro",

                'titoloParnership':'I NOSTRI PARTNERSHIP'
        },
        'en': {

            'innovazione':'Innovations',
            'bucatoProfessionale':'Professional Laundry',
                'bucatoDomestico':'Home Laundry',
                'contatti':'Contacts',
                'schedaTecnica':'Get Technical Data/Safety Sheet',

                'titoloRicercaSviluppo':'Research and Development',
                'descrizioneRicercaSviluppo':'Our dedicated team of experts in Research and Development works tirelessly to explore new horizons, experiment with new technologies, and develop cutting-edge products. We emphasize interdisciplinary collaboration, partnering with external stakeholders and universities to ensure that our solutions align with the latest scientific and technological advancements.',

                'titoloAssistenza':'Customer Support',
                'descrizioneAssistenza':'ORSI Group provides customer support throughout the entire product manufacturing process to meet their every need, ensuring competitiveness, constant production control, and high-quality standards in compliance with national and international regulations.',

                'titoloTecnologiaDesign':'Technology and Design',
                'descrizioneTecnologiaDesign':'State-of-the-art equipment, cutting-edge packaging lines, and highly skilled personnel ensure excellent products. Design and quality are the symbols of our Made in Italy.',

                'titoloProduzione':'PRODUCTION',
                'descrizioneProduzione':'The production plant in Italy has a capacity of 4 tons per hour with automated and robotic packaging and palletizing lines. Every stage of the manufacturing process is monitored through systematic chemical analysis to ensure continuous control of production performance and development of manufacturing processes.',

                'titoloCertificazioni':'Our Certifications',
                'titoloBiologico':'Organic Detergent Certification',
                'descrizioneBiologico1':'Our organic detergent is certified by a recognized authority in the field of ecology and environment. This certification attests that our product meets rigorous standards of ecological production, using natural and sustainable ingredients.',
                'descrizioneBiologico2':'The organic detergent certificate guarantees that our product does not contain harmful chemicals for the environment and human health. Additionally, it is produced using methods that minimize environmental impact throughout its life cycle, from production to use and disposal.',
                'titoloVeritas':'Bureau Veritas Certificate',
                'descrizioneVeritas1':'Our product has undergone a thorough evaluation and has obtained the certification issued by Bureau Veritas, a leading organization in the field of certifications.',
                'descrizioneVeritas2':'Bureau Veritas is internationally recognized for its expertise and independence in conformity assessments. The Bureau Veritas certification attests that our product meets rigorous standards of quality, safety, and sustainability.',
                'descrizioneVeritas3':'La certificazione Bureau Veritas è un segno di fiducia per i consumatori, poiché conferma che il nostro prodotto è stato sottoposto a controlli e test accurati per garantire la sua qualità e conformità alle normative vigenti.',

                'titoloBrands':'Our Brands',
                'descrizioneBrands':'Main description of our services',

                'titoloNovita':'News',
                'descrizioneNovita1':'We are pleased to announce the launch of Orsi Groups cosmetic division. Located near our current headquarters, this new division represents a significant expansion for the company.',
                'descrizioneNovita2':'The cosmetic division has a dedicated area of 6,000 m2, including 1,500 m2 of covered space. Here, a fully equipped production site has been established for cosmetic manufacturing, which includes an analysis laboratory for research and development.',
                'descrizioneNovita3':'The management of this division is entrusted to a competent team of technicians and cosmetic researchers, ready to make their debut in the industry. We are excited to combine our expertise and passion for cosmetics to offer high-quality products and innovative solutions to our customers.',
                'descrizioneNovita4':'This new development represents a significant step forward for Orsi Group in the cosmetics industry, and we are ready to face this new challenge with commitment and determination. We will continue to work hard to provide excellent products and meet the ever-growing needs of our customers.',

                'titiloIdrocristalli':'IDROCRISTALLI',
                'descrizioneIdrocristalli':'100% NATURAL AND ORGANIC ESSENTIAL OILS',

                'titoloSostenibile1':'Our Journey in Sustainable Business',
                'titoloSostenibile2':'Responsible Innovation',
                'descrizioneSostenibile1':'Responsible innovation is the key to sustainable and lasting progress.',
                'titoloSostenibile3':'Ethical sourcing',
                'descrizioneSostenibile2':'Choosing ethical sourcing is a responsible choice for a sustainable future.',
                'titoloSostenibile4':'Protecting our environment.',
                'descrizioneSostenibile3':"Proteggere l'ambiente è proteggere il nostro futuro",

                'titoloParnership':'Our partnerships.'
        }
      };

  
      const elements = document.querySelectorAll('[data-translation]');
      
      elements.forEach(element => {
        const translationKey = element.getAttribute('data-translation');
        element.innerText = translations[lang][translationKey];
      });
}