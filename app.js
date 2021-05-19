console.log("js file attached");

var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", () => {
  clickHandler();
});

function clickHandler() {
  console.log("clicked!!!");
  console.log(txtInput.value);
}
