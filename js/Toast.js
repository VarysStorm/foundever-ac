export default function Toast() {
    console.log('toast');
    var toast = "";
        toast += "<div class='toastWrapper'>";
            toast += "<div data-section='toast'>";
                toast += "<h2 class='ToastTitle' data-type=''>Titel</h2>";
                toast += "<p class='ToastDesc' data-type=''>Desc<p>";
            toast += "</div>";
        toast += "</div>";


    return toast;
}