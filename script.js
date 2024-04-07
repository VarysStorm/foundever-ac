import MainContainer from "./components/maincontainer/Maincontainer.js";
import Toast from "./components/toast/Toast.js";
import ResponseContainer from "./components/responsecontainer/ResponseContainer.js";
import SuccessContainer from "./components/successcontainer/Successcontainer.js";

$(function App() {
    
    $('#mainContainer').html(MainContainer);
    $('#toast').html(Toast);
    $('#responseContainer').html(ResponseContainer);
    $('#successContainer').html(SuccessContainer);
    $('#sendInput').on('click',function(){
        validate();
    });
    $('#toast').on('click',function(){
        toastOut('manuell');
    });
    $('#sendOutput').on('click',function(){
        responseSend();
    });
    

});

/* Erste Eingaben Validerung */

function validate() {
    var error = '';
    var errorType = false;
    var personData = [];

    function checkAndAssignValue(id, variableName, errorMessage) {
        var value = $('#' + id).val();
        if (!value) {
            error += errorMessage;
        } else {
            if (id === 'number' && (value <= 0 || value >= 9999)) {
                error += '<p>Die Zahl muss zwischen 1 und 9998 liegen!</p>';
            } else {
                if (id === 'phoneNumber') {
                    if (value.startsWith('0')) {
                        value = value.substring(1);
                    }
                    if (!value.startsWith('+')) {
                        value = '+49' + value;
                    }
                }else if (id === 'birthdate') {
                    let date = new Date(value);
                    let year = date.getFullYear();
                    let month = String(date.getMonth() + 1).padStart(2, '0');
                    let day = String(date.getDate()).padStart(2, '0');
                    value = `${year}${month}${day}`;
                }

                window[variableName] = value;
            }
        }
    }

    checkAndAssignValue('surname', 'surname', '<p>Nachname fehlt!</p>');
    checkAndAssignValue('firstName', 'firstname', '<p>Vorname fehlt!</p>');
    checkAndAssignValue('phoneNumber', 'phonenumber', '<p>Telefonnummer fehlt!</p>');
    checkAndAssignValue('birthdate', 'birthdate', '<p>Geburtsdatum fehlt!</p>');
    checkAndAssignValue('number', 'number', '<p>Zahl fehlt!</p>');

    if (error === '') {
        errorType = true;
        surname = surname.toUpperCase();
        firstname = firstname.toUpperCase();
        personData = {'surname': surname, 'firstname': firstname, 'phonenumber': phonenumber, 'birthdate': birthdate, 'number':number};
        toast(errorType);
        response(personData);
    } else {
        toast(errorType, error);
    }

    /* Hier könnte man als Beispiel die Daten an das Backend (hier PHP als Beispiel) übergeben
        $.ajax({
            url: 'ContactData.php', 
            method: 'POST', 
            data: { 'surname': surname, 'firstname': firstname, 'phonenumber': phonenumber, 'birthdate': birthdate, 'number':number }, 
            success: function(response) {
                toast(type, message); // Hier müsste man die Toast Funktion etwas erweitern um eine if Klausel welche prüft ob data !=null ist
        },
        error: function(error) {
            toast(type, message);
        }
        });


    */

}

/* User-Feedback-Popup-Logik */

function toast(type, data=null) {
    switch (type) {
        case false:
            $('#ToastTitle').html('Fehler').addClass('falseToast');
            $('#ToastHeader').addClass('falseToastHeader');
            $('#ToastDesc').html('Fehlerhafte Angaben: ' + data);
            $('#toast').fadeIn('slow').removeClass('hidden');
            toastOut();
            break;
        case true:
            $('#ToastTitle').html('Erfolg').addClass('trueToast');
            $('#ToastHeader').addClass('trueToastHeader');
            $('#ToastDesc').html('Alle Angaben waren korrekt!');
            $('#toast').fadeIn('slow').removeClass('hidden');
            toastOut();
            break;
        default:
            console.error('Ungültiger Wert für type-Parameter in der toast-Funktion.');
    }
}

function toastOut( type=null ){
    if(!type){
        setTimeout(function() {
            $('#toast').fadeOut().addClass('hidden');
        }, 5400);
   }else{
        $('#toast').fadeOut().addClass('hidden');
   }
}

/* Ausgabe */

function response(data) {
    for (let key in data) {
        if (key === 'number') {
            let numberType = checkDivision(data[key]);
            if (numberType !== '') {
                $('#output_' + key).html('Die angegebene Zahl '+data[key]+' ist '+numberType+' teilbar.');
            }else{
                $('div[data-section="outputNumber"]').addClass('hidden');
            }
        } else {
            $('#output_' + key).html(data[key]);
        }
    }
    $('#responseContainer').fadeIn('slow').removeClass('hidden');
}

function checkDivision(number) {
    let numberType = '';

    if (number % 3 === 0) {
        numberType += 'durch 3';
    }
    if (number % 7 === 0) {
        if (numberType !== '') {
            numberType += ', ';
        }
        numberType += 'durch 7';
    }
    if (number % 11 === 0) {
        if (numberType !== '') {
            numberType += ', ';
        }
        numberType += 'durch 11';
    }

    return numberType;
}


function responseSend(){
    
    $('#successContainer').fadeIn('slow').removeClass('hidden');
    $('#responseContainer').fadeOut().addClass('hidden');
    
    setTimeout(function() {
        location.reload();
    }, 7200);

    
}
