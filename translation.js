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

                

                'titoloBrands':'I Nostri Brand',
                'descrizioneBrands':'Descrizione Principale Dei Nostri Servizi',

                'titoloNovita':'Novità',
                'descrizioneNovita1':'ORSI group e il suo Team È lieto di comunicare l’inizio dell’operatività della divisione Cosmetica Orsi. Locata nei pressi della nostra attuale sede comprende: Un’area dedicata di 6.000 M2 di cui 1.500 M2 coperti La creazione di un sito produttivo per la cosmesi e un laboratorio di analisi e ricerca e sviluppo dedicato. La gestione è affidata ad uno staff di tecnici e ricercatori, cosmetologi oggi pronti al debutto',
                'descrizioneNovita2':'',
                'descrizioneNovita3':'',
                'descrizioneNovita4':'',

                'titiloIdrocristalli':'IDROCRISTALLI',
                'descrizioneIdrocristalli':'100% OLII ESSENZIALI NATURALI E BIOLOGICI',

                'titoloSostenibile1':'Il Nostro Viaggio Nel Business Sostenibile',
                'titoloSostenibile2':'Innovazione Responsabile',
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

                

                'titoloBrands':'Our Brands',
                'descrizioneBrands':'Main description of our services',

                'titoloNovita':'News',
                'descrizioneNovita1':'ORSI Group and its team are pleased to announce the start of operations of the Orsi Cosmetics division. Located near our current headquarters, it encompasses: a dedicated area of 6,000 square meters, of which 1,500 square meters are covered. This includes the establishment of a production site for cosmetics and a laboratory for analysis and dedicated research and development. The management is entrusted to a team of technicians and researchers, cosmetologists who are ready for their debut today.',
                'descrizioneNovita2':'',
                'descrizioneNovita3':'',
                'descrizioneNovita4':'',

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