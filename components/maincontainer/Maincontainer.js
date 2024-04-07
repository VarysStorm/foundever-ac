export default function MainContainer() {
    var output = "";

    
    output += "<div id='maincontainerWrapper'>";
        output += "<div class='wrapperLeft wrapper'>";
            output += "<div class='headerWrapper'>";
                output += "<img src='../assets/img/foundever-logo.png'>";
                output += "<h2 class='title'>Kontaktdetails</h2>";
            output += "</div>";
            output += "<div class='bodyWrapper'>";
                output += "<p>Foundever B.V. & Co. KG</p>";
                output += "<p>Sonnenallee 221 D-F</p>";
                output += "<p>12059 Berlin</p>";
                output += "<p>Telefon: +49 30 233615000</p>";
                output += "<p>Email: kontakt@foundever.com</p>";
            output += "</div>";
        output += "</div>";
        output += "<div class='wrapperRight wrapper'>";
            output += "<img src='../assets/img/contact.png' alt='contactIcon'>";
            output += "<h2 class='mainTitle'>Jetzt Kontakt aufnehmen!</h2>";
            output += "<div class='formGroup' data-section='name'>";
                output += "<h2 class='title'>Ihr Name</h2>";
                output += "<div class='formGroupNameWrapper'>";
                    output += "<input type='text' id='surname' name='Nachname' placeholder='Nachname'>";
                    output += "<input type='text' id='firstName' name='Vorname' placeholder='Vorname'>";
                output += "</div>";
            output += "</div>";
            output += "<div class='formGroup' data-section='phone'>";
                output += "<h2 class='title'>Ihre Telefonnummer</h2>";
                output += "<div class='formGroupphoneWrapper'>";
                    output += "<input type='tel' id='phoneNumber' name='phoneNumber' placeholder='0180800000'>";
                output += "</div>";
            output += "</div>";
            output += "<div class='formGroup' data-section='birthdate'>";
                output += "<h2 class='title'>Ihr Geburtsdatum</h2>";
                output += "<div class='formGroupBirthdateWrapper' data-section='birthdate'>";
                   output += "<input type='date' id='birthdate' name='birthdate' placeholder='2000-01-01'>";
               output += "</div>";
            output += "</div>";
            output += "<div class='formGroup' data-section='number'>";
              output += "<h2 class='title'>Eine Nummer zwischen 1 und 9998</h2>";
              output += "<div class='formGroupNumberWrapper' data-section='number'>";
                  output += "<input type='number' id='number' name='number' placeholder='12'>";
              output += "</div>";
          output += "</div>";
          output += "<div class='formGroup' data-section='button'>";
             output += "<button id='sendInput'>Absenden</button>";
          output += "</div>";
        output += "</div>";
    output += "</div>";

    return output;
}
