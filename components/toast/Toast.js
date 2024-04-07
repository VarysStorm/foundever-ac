export default function Toast() {
    

    var toast = "";
        toast += "<div class='toastWrapper'>";
            toast += "<div class='toast' data-section='toast'>";
                toast += "<h2 id='ToastTitle' data-type=''>Titel</h2>";
                toast += "<p id='ToastDesc' data-type=''>Desc<p>";
            toast += "</div>";
        toast += "</div>";


    return toast;
}