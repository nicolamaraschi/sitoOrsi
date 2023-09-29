const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const messaggio = document.getElementById("messaggio").value;
    const fileInput = document.getElementById("file");

    // Creazione di un oggetto FormData per inviare i dati
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("telefono", telefono);
    formData.append("messaggio", messaggio);

    // Aggiunta del file se è stato selezionato
    if (fileInput.files.length > 0) {
        formData.append("file", fileInput.files[0]);
    }

    // Esempio di invio dati utilizzando SendGrid API
    fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
            // DA SETTARE CON API DEL ACCOUNT SENDGRID
            "Authorization": "Bearer YOUR_SENDGRID_API_KEY",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            personalizations: [{
                //DA SETTARE CON EMAIL DI ORSI
                to: [{ email: "destinatario@email.com" }],
                subject: "Oggetto dell'email",
            }],
            from: { email: email },
            content: [{
                type: "text/plain",
                value: messaggio,
            }],
        }),
    })
        .then((response) => {
            if (response.ok) {
                // Reindirizza alla pagina di conferma o a una pagina di ringraziamento
                window.location.href = "conferma.html";
            } else {
                // Gestisci errori qui, ad esempio mostrando un messaggio di errore
                console.error("Errore nell'invio del modulo.");
            }
        })
        .catch((error) => {
            // Gestisci errori di rete qui
            console.error("Errore di rete:", error);
        });
});

const fetchMock = require("fetch-mock");
const FormData = require("form-data");



//testing invio email
describe("Test unitari per il modulo di invio email", () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  test("Invio di un modulo con successo", async () => {
    const form = new FormData();
    form.append("nome", "John Doe");
    form.append("email", "john.doe@example.com");
    form.append("telefono", "1234567890");
    form.append("messaggio", "Questo è un messaggio di prova");

    fetchMock.mock("https://api.sendgrid.com/v3/mail/send", 200);

    const response = await inviaModulo(form);
    expect(response).toBe(true);
  });

  test("Invio di un modulo con errore", async () => {
    const form = new FormData();
    form.append("nome", "John Doe");
    form.append("email", "john.doe@example.com");
    form.append("telefono", "1234567890");
    form.append("messaggio", "Questo è un messaggio di prova");

    fetchMock.mock("https://api.sendgrid.com/v3/mail/send", 500);

    const response = await inviaModulo(form);
    expect(response).toBe(false);
  });
});