export default function Toast() {
    

    var toast = "";
        toast += "<div class='toastWrapper'>";
            toast += "<div class='toast' data-section='toast'>";
                toast += "<div id='ToastHeader'>";
                    toast += "<img class='toastIMG'>";
                    toast += "<h2 id='ToastTitle' data-type=''>Titel</h2>";
                toast += "</div>";
                toast += "<p id='ToastDesc' data-type=''>Desc<p>";
            toast += "</div>";
        toast += "</div>";


    return toast;
}