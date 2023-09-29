// server.js

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // Serve i file statici dalla cartella "public"

app.get("/api/getpdfs", (req, res) => {
  const searchInput = req.query.searchInput;

  // Qui dovresti implementare la logica per trovare i nomi dei file PDF in base al codice prodotto.
  // Ad esempio, puoi eseguire la scansione della cartella dei PDF e trovare i file corrispondenti al codice prodotto.

  // Supponiamo che hai trovato i nomi dei file come pdf1 e pdf2.
  const pdf1 = `percorso/della/cartella/scheda_tecnica_${searchInput}.pdf`;
  const pdf2 = `percorso/della/cartella/scheda_sicurezza_${searchInput}.pdf`;

  const response = {
    found: true, // Indica se il prodotto è stato trovato
    pdf1: pdf1,
    pdf2: pdf2
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
