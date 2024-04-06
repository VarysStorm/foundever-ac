export default function ResponseContainer() {
    var responseOutput = "";

    responseOutput += "<div class='responseWrapper'>";
        responseOutput += "<h2 id='responseTitle'>Sind diese Angaben korrekt?</h2>";
        responseOutput += "<div data-section='outputName'>";
            responseOutput += "<p>Name<p>";
            responseOutput += "<p id='outputName'></p>";
        responseOutput += "</div>";
        responseOutput += "<div data-section='outputTel'>";
            responseOutput += "<p>Telefonnummer<p>";
            responseOutput += "<p id='outputTel'></p>";
        responseOutput += "</div>";
        responseOutput += "<div data-section='outputDate'>";
            responseOutput += "<p>Geburtsdatum<p>";
            responseOutput += "<p id='outputDate'></p>";
        responseOutput += "</div>";
        responseOutput += "<div data-section='outputNumber'>";
            responseOutput += "<p>Zahl<p>";
            responseOutput += "<p id='outputnumber'></p>";
        responseOutput += "</div>";
        responseOutput += "<div data-section='outputButton'>";
            responseOutput += "<button id='sendOutput'>Absenden</button>";
        responseOutput += "</div>";
    responseOutput += "</div>";

    return responseOutput;
}
