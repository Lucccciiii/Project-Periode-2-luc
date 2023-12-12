let welkomtekst = "welkom bij de opendag van het Techniek College Rotterdam";
let day = new Date;
h = day.getHours();
m = day.getMinutes();
if (h > 0 && h < 12) {
    document.getElementById("welkom").innerHTML = "<h2> Goedemorgen " + welkomtekst + "</h2>";
}
if (h > 12 && h < 18) {
    document.getElementById("welkom").innerHTML = "<h2> Goedemiddag " + welkomtekst + "</h2>";
}
if (h > 18 || h === 0) {
    document.getElementById("welkom").innerHTML = "<h2> Goedenavond " + welkomtekst + "</h2>"
}