function searchProduct() {
  var searchInput = document.getElementById("searchInput").value;
  var resultContainer = document.getElementById("resultContainer");
  var productCode = document.getElementById("productCode");

  var products = [];

  // Genera un nuovo prodotto con le relative schede
  function generateProduct(productCode) {
    var newProduct = {
      code: productCode,
      pdf1: "scheda_sicurezza/" + productCode + "_SDS.pdf",
      pdf2: "scheda_tecnica/" + productCode + "_ST.pdf"
    };

    products.push(newProduct);
  }

  // Esempio di generazione di un prodotto con codice "001"
  generateProduct("001");

  // Esempio di generazione di un prodotto con codice "002"
  generateProduct("002");

  // Esempio di generazione di un prodotto con codice "003"
  generateProduct("003");

  var product = products.find(function(item) {
    return item.code === searchInput;
  });

  if (product) {
    resultContainer.style.display = "block";
    productCode.innerText = "Codice prodotto: " + product.code;

    var pdf1Link = document.getElementById("pdf1Link");
    pdf1Link.href = product.pdf1;
    pdf1Link.innerText = "Visualizza scheda Sicurezza";

    var pdf2Link = document.getElementById("pdf2Link");
    pdf2Link.href = product.pdf2;
    pdf2Link.innerText = "Visualizza scheda Tecnica";

    // Ora, chiama setLanguage(lang) per tradurre i nuovi elementi all'interno di #resultContainer
    setLanguage(localStorage.getItem('language'));
  } else {
    resultContainer.style.display = "none";
    alert("Codice prodotto non trovato");
  }
}
