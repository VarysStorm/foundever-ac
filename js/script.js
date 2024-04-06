import MainContainer from "./Maincontainer.js";
import Toast from "./Toast.js";
import ResponseContainer from "./ResponseContainer.js";

$(function() {
    
    $('#mainContainer').html(MainContainer);
    $('#toast').html(Toast);
    $('#responseContainer').html(ResponseContainer);
});

/*Anrede
• Name
• Vorname
• Telefonnummer
• Geburtsdatum
• eine beliebige ganze Zahl X mit 0<X<9999*/