async function chatbotresponse(){
    document.getElementById('botresponse').innerHTML = "";
    let uinput = document.getElementById("chat").value;
    let i;
    let response;
    let responseint;
    let sorry = "Sorry. Ik kan helaas je vraag niet beantwoorden. Probeer een andere vraag.";
    let weblink = "<br><a href='https://www.techniekcollegerotterdam.nl/opleidingen/it-en-online/software-developer-bol'>Software Developer</a>"
    // Lees string en cut waar er een whitespace zit om woorden te herkennen
    uinput = uinput.toLowerCase();
    const stringin = uinput.split(" ");
    if (stringin.includes("wanneer")) {
        if (stringin.includes("opendag")) {
            response = "de opendag is op 26 en 27 januari";
        }
        if (stringin.includes("schooljaar")) {
            response = "Het schooljaar begint in Augustus 2024";
        }
        if(!stringin.includes("opendag") && !stringin.includes("schooljaar")) {
            response = sorry;
        }

    }
    else if (stringin.includes("softwaredeveloper") || stringin.includes("softwaredevelopment") || stringin.includes("software") || stringin.includes("development") || stringin.includes("developer")){
        response = "Als software-developer leer je hoe je aan de hand van programmeer-talen allerlei dingen kunt maken. Je zult in je eerste jaar HTML/CSS, Javascript en PHP leren. Als je meer informatie wilt kan je naar deze website. Hier kan je je ook inschrijven voor de opleiding.";
        responseint = 1;
    }
    else if (stringin.includes("broncode")){
        response = "Gefeliciteerd, je hebt je eerste stap gezet. Als je de broncode van deze website en deze chatbot wilt vinden kan je dat doen in de element inspector. Ctrl + Shift + i is de sneltoets daarvoor in meeste browsers."
    }
    else{
        response = sorry;
    }
    if(responseint === 1) {

        const aresponse = response.split("");
        while (typeof (i = aresponse.shift()) !== "undefined") {
            document.getElementById('botresponse').innerHTML += i;
            await new Promise(chatbotresponse => setTimeout(chatbotresponse, 25));
        }
        document.getElementById('botresponse').innerHTML += weblink;
    }
    else {
        const aresponse = response.split("");
        while (typeof (i = aresponse.shift()) !== "undefined") {
            document.getElementById('botresponse').innerHTML += i;
            await new Promise(chatbotresponse => setTimeout(chatbotresponse, 25));
        }

    }

}
