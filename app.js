var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#txt-output");

function constructURL(input) {
  return (
    "https://api.funtranslations.com/translate/minion.json" + "?text=" + input
  );
}
function clickHandler() {
  var inputText = txtInput.value;

  txtOutput.innerText = fetch(encodeURI(constructURL(inputText)))
    .then((response) => response.json())
    .then((json) => (txtOutput.innerHTML = json.contents.translated))
    .catch(errorHandler);
}

function errorHandler(error) {
  alert("Something went wrong", error);
  console.log("Error: ", error);
}

btnTranslate.addEventListener("click", clickHandler);
