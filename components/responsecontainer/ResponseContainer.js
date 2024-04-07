export default function ResponseContainer() {
    var responseOutput = "";

    responseOutput +="<div class='response'>";
        responseOutput += "<div class='responseWrapper'>";
            responseOutput += "<h2 id='responseTitle'>Sind diese Angaben korrekt?</h2>";
            responseOutput += "<div data-section='outputName'>";
                responseOutput += "<p>Anrede<p>";
                responseOutput += "<div id='output_addressPerson'>";
                    responseOutput += "<p id='output_addressPerson'></p>";
                responseOutput += "</div>";
            responseOutput += "</div>";
            responseOutput += "<div data-section='outputName'>";
                responseOutput += "<p>Name<p>";
                responseOutput += "<div id='output_Namewrapper'>";
                    responseOutput += "<p id='output_firstname'></p>";
                    responseOutput += "<p id='output_surname'></p>";
                responseOutput += "</div>";
            responseOutput += "</div>";
            responseOutput += "<div data-section='outputPhonenumber'>";
                responseOutput += "<p>Telefonnummer<p>";
                responseOutput += "<p id='output_phonenumber'></p>";
            responseOutput += "</div>";
            responseOutput += "<div data-section='outputDate'>";
                responseOutput += "<p>Geburtsdatum<p>";
                responseOutput += "<p id='output_birthdate'></p>";
            responseOutput += "</div>";
            responseOutput += "<div data-section='outputNumber'>";
                responseOutput += "<p>Zahl<p>";
                responseOutput += "<p id='output_number'></p>";
            responseOutput += "</div>";
            responseOutput += "<div data-section='outputButton'>";
                responseOutput += "<button id='sendOutput'>Super!</button>";
            responseOutput += "</div>";
        responseOutput += "</div>";
    responseOutput += "</div>";    

    return responseOutput;
}
