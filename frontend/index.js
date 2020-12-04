var btnTranslate = document.querySelector("#btncolor");
var txtInput = document.querySelector("#inputTxt");
var outputDiv = document.querySelector("#outputTxt");
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time. Maximum 5 outputs possible per hour")
}
function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; 
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)