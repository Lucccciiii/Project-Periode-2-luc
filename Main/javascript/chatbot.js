function chatbotresponse(){
let uinput = document.getElementById("chat").value;
let response;
// Lees string en cut waar er een whitespace zit om woorden te herkennen
const stringin = uinput.split(" ");
if (stringin[0] === "wanneer"){
    if(stringin[3] === "opendag" || stringin[3] === "Opendag"){
        console.log
        response = "de opendag is op 26 en 27 januari"
    }
    if(stringin[3] === "schooljaar" || stringin[3] === "Schooljaar"){
        response = "Het schooljaar begint in Augustus 2024"
    }
}
if(stringin[3] === "softwaredeveloper" || stringin[3] === "Softwaredeveloper"|| stringin[3] === "Softwaredevelopment"|| stringin[3] === "softwaredevelopment"){
    response = "Als softwaredeveloper leer je "
}
    document.getElementById('botresponse').innerHTML = response;
}