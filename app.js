var translateBtn = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationalURL(userInputText){
    return serverURL + "?" + "text=" + userInputText;
}

function errorHandler(){
    alert("Oops!! Some error occured, please try again later.");
}

function clickHandler(){
    var inputTxt = txtInput.value;

    fetch(getTranslationalURL(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputDiv.innerText = translatedTxt;
        })
        .catch(errorHandler)
}

translateBtn.addEventListener("click", clickHandler);