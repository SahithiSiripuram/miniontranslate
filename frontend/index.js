var btnTranslate=document.querySelector('#btncolor');
var txtInput=document.querySelector('#inputTxt');
var txtOutput=document.querySelector('outputTxt');
var serverURL="https://api.funtranslations.com/translate/minion.json";
function getTranslation(text){
    return serverURL+'?'+'text='+text;
}
function clickHandler(){
    var inputText=txtInput.value;
    fetch(getTranslation(inputText))
        .then(response=>response.json())
        .then(json=>{
            var translatedTxt=json.contents.translated;
            outputDiv.innerText=translatedTxt;;
        })
        .catch(errorHandler)
};
function errorHandler(error){
    alert('Something wrong with the server. Please try later. Maximum limit for the server is 5 requests per hour.')
};
btnTranslate.addEventListener("click",clickHandler)