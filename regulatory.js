
  /*
  function searchProduct() {
    var searchInput = document.getElementById("searchInput").value;
    var resultContainer = document.getElementById("resultContainer");
    var productCode = document.getElementById("productCode");
    var pdf1Link = document.getElementById("pdf1Link");
    var pdf2Link = document.getElementById("pdf2Link");

    // Array di oggetti con i codici e i relativi PDF
    var products = [
      {
        code: "001",
        pdf1: "001_SDS.pdf",
        pdf2: "001_ST.pdf"
      },
      {
        code: "002",
        pdf1: "scheda sicurezza/500120_DOLOMITENWSUPER_SDS_IT_Rel._3.pdf",
        pdf2: "scheda tecnica/500205_ST_Prof.pdf"
      },
      // Aggiungi altre associazioni di codici e PDF qui
    ];

    // Verifica se il codice prodotto è presente nell'array
    var product = products.find(function(item) {
      return item.code === searchInput;
    });

    if (product) {
      // Mostra il risultato e i link per il download dei PDF
      resultContainer.style.display = "block";
      productCode.innerText = "Codice prodotto: " + product.code;
      pdf1Link.href = product.pdf1;
      pdf2Link.href = product.pdf2;
    } else {
      // Mostra un messaggio di fallimento della ricerca
      resultContainer.style.display = "none";
      alert("Codice prodotto non trovato");
    }
  }

*/

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
  } else {
    resultContainer.style.display = "none";
    alert("Codice prodotto non trovato");
  }
}






const savedLanguage = localStorage.getItem('language'); 

if (savedLanguage) {
  setLanguage(savedLanguage);
}
