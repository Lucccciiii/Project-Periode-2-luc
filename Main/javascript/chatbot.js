async function chatbotresponse(){
    document.getElementById('bot-response').innerHTML = ""; // Cleans screen for new output
    let uinput = document.getElementById("chat").value; // Reads user input from HTML input
    let i;
    let response; // String storage for response
    let responseint = 0; // Handles links for the slow typing document innerHTML
    let sorry = "Sorry. Ik kan helaas je vraag niet beantwoorden. Probeer een andere vraag.";
    let weblink = "<br><a href='https://www.techniekcollegerotterdam.nl/opleidingen/it-en-online/software-developer-bol'>Software Developer</a>" // string for software developer
    uinput = uinput.toLowerCase(); // Makes sure all input is in lowercase. If input isn't lowercase it changes the characters to lowercase
    const stringin = uinput.split(" "); // // Reads string and cuts the words when it finds a whitespace
    // stringin.includes checks if the value is in the stringin array
    if (stringin.includes("opendag")) {
        response = "de opendag is op 26 en 27 Januari";
    }
    else if (stringin.includes("schooljaar")) {
        response = "Het schooljaar begint in Augustus 2024";
    }
    else if (stringin.includes("softwaredeveloper") || stringin.includes("softwaredevelopment") || stringin.includes("software") || stringin.includes("development") || stringin.includes("developer")){
        response = "Als software-developer leer je hoe je aan de hand van programmeer-talen allerlei dingen kunt maken. Je zult in je eerste jaar HTML/CSS, Javascript en PHP leren. Als je meer informatie wilt kan je naar deze website. Hier kan je je ook inschrijven voor de opleiding.";
        responseint = 1;
    }
    else if (stringin.includes("broncode")){
        response = "Gefeliciteerd, je hebt je eerste stap gezet. Als je de broncode van deze website en deze chatbot wilt vinden kan je dat doen in de element inspector. Ctrl + Shift + i is de sneltoets daarvoor in meeste browsers."
    }
    else if (stringin.includes("test")){
        response = "test response";
    }
    // Default response when no value is triggered
    else{
        response = sorry;
    }

    const aresponse = response.split(""); // Splits the response string into single characters to mimic typing effect when writing to bot-response paragraph
    // Safety check for links since they don't work with the slow tying
    if(responseint !== 0) {
        switch (responseint) {
            case 1:
                while (typeof (i = aresponse.shift()) !== "undefined") {
                    document.getElementById('bot-response').innerHTML += i;
                    await new Promise(chatbotresponse => setTimeout(chatbotresponse, 25));
                }
                document.getElementById('bot-response').innerHTML += weblink;
                break;
            case 2:
                while (typeof (i = aresponse.shift()) !== "undefined") {
                    document.getElementById('bot-response').innerHTML += i;
                    await new Promise(chatbotresponse => setTimeout(chatbotresponse, 25));
                }
                break;
        }
    }
    // Standard slow typing
    else {
        while (typeof (i = aresponse.shift()) !== "undefined") {
            document.getElementById('bot-response').innerHTML += i;
            await new Promise(chatbotresponse => setTimeout(chatbotresponse, 25));
        }
    }
}