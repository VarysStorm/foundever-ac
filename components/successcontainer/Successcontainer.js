export default function SuccessContainer() {
    var SuccessContainer = "";
    SuccessContainer +="<div class='successWrapper'>";
        SuccessContainer +="<div class='success'>";
            SuccessContainer += "<div class='successWrapperHeader'>";
                SuccessContainer += "<img src='../assets/img/heart.png'>";
                SuccessContainer += "<h2 id='successTitle'>Vielen Dank!</h2>";
            SuccessContainer += "</div>";
            SuccessContainer += "<div class='successWrapperDesc'>";
                SuccessContainer += "<p id='successDesc'>Wir nehmen in Kürze Kontakt mit dir auf!</h2>";
            SuccessContainer += "</div>";
        SuccessContainer += "</div>"; 
    SuccessContainer += "</div>";    

    return SuccessContainer;
}
