/******************************************WINDOW READY******************************************/
$(document).ready(function () {

function validDialogCV() {
    return true;
}

var dialogCV = $("#dialog-form").dialog({
    autoOpen: false,
    height: 300,
    width: 350,
    modal: true,
    buttons: {
        "Create an account": validDialogCV,
        Cancel: function () {
            dialogCV.dialog("close");
        }
    },
    close: function () {
                return true;
    }
});

$(document).on("click", "#buttonDownloadCV", function () {
    dialogCV.dialog("open");
});

    /*******************MENU*******************/

    $('#content').fullpage({
        anchors: ['home', 'skills', 'experiences', 'portfolios', 'contact'],
        menu: '#menu',
        resize: false,
        scrollingSpeed: 1000,
        scrollOverflow: true,
        afterRender: function () {
            $("#menu").wonderfullMenu({
                sticked: true,
                marginTopFixed: 0,
                onePageJs: true,
                idContainer: "content",
                mobile: true,
                responsive: true,
                active: true,
                parts: {
                    0: 'sectionHome',
                    1: 'sectionSkills',
                    2: 'sectionExperiences',
                    3: 'sectionPortfolios',
                    4: 'sectionContact'
                },
                itemHoverClass: 'activeWM'
            });
            $('.parallax').wonderfullParallax({onePageJs: true, idContainer: "content", bgParallax: true});
        }
    });

    /*******************FIN MENU*******************/

    Picatcha.API_SERVER = 'http://api.picatcha.com';
    Picatcha.PUBLIC_KEY = "PYCEEMUbTWRiToi4effg7O9FFONb9DS9ktRdg-0p";
    Picatcha.setCustomization({"format": "1", "color": "#2a1f19", "link": "0", "image_size": "50", "lang": "fr", "langOverride": "0", "noise_level": "10", "noise_type": "0"});
    Picatcha.create("picatcha");

});
/******************************************FIN WINDOW READY******************************************/

/******************************************GOOGLE ANALITICS******************************************/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34537753-1']);
_gaq.push(['_trackPageview']);
var ga = document.createElement('script');
ga.type = 'text/javascript';
ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);
/******************************************FIN GOOGLE ANALITICS******************************************/







/*
var sendingMail = false;

function submitMail()
{
    if (!sendingMail) {

        sendingMail = true;
        var name = $('#name').val()
        var email = $('#email').val()

        var company = $('#company').val()
        var website = $('#website').val()

        var object = $('#object').val()
        var message = $('#message').val()
        var missingFieldBool = false;
        var missingField = [];

        if (name == '') {
            missingField.push('name');
            missingFieldBool = true;
        }
        if (email == '') {
            missingField.push('email');
            missingFieldBool = true;
        }

        if (object == '') {
            missingField.push('object');
            missingFieldBool = true;
        }
        if (message == '') {
            missingField.push('message');
            missingFieldBool = true;
        }

        if (missingFieldBool == false) {
            picatcha_data = {'s0': [], 'token': [], 'stages': 0};
            picatcha_data['token'] = $('.picatcha_token').val();
            $('#picatcha_table').find($(':checked')).each(function (index) {
                picatcha_data['s0'].push(this.value)
            });

            $.ajax({
                url: 'ajaxPHP/emailSend.php',
                type: 'POST',
                data: {
                    'name': name,
                    'email': email,
                    'company': company,
                    'website': website,
                    'object': object,
                    'message': message,
                    'picatcha[token]': picatcha_data['token'],
                    'picatcha[stages]': picatcha_data['stages'],
                    'picatcha[r][s0][]': picatcha_data['s0']
                },
                success: function (code_html, statut) {
                    response = eval('(' + code_html + ')');
                    ;
                    if (response.answer == 'ok') {
                        $('#contactMessage').removeClass("red");
                        $('#contactMessage').addClass("green");
                        $('#contactMessage').html("L'e-mail a été correctement envoyé.");
                        $('#contactForm').animate({
                            opacity: 0
                        }, 700);
                        $('#contactMessage').animate({
                            opacity: 1,
                            height: '24px'
                        }, 700);
                    } else {
                        $('#contactMessage').addClass("red");
                        $('#contactMessage').html("L'e-mail n'a été correctement envoyé. Veuillez réessayer.");
                        $('#contactMessage').animate({
                            opacity: 1,
                            height: '24px'
                        }, 700);
                        sendingMail = false;
                    }

                },
                error: function (resultat, statut, erreur) {

                }
            });
        } else {
            if (missingField.length == 1) {
                //popupOpen(popupAlert, 'Le champ suivant est manquant : ' + missingField[0] + popupAlertContentButton);
            } else {
                //popupOpen(popupAlert, 'Les champs suivant sont manquants : ' + missingField.join(', ') + popupAlertContentButton);
            }
            sendingMail = false;
        }

    } else {
        //popupOpen(popupAlert, 'E-mail en cours d\'envoi ou déjà envoyé.' + popupAlertContentButton);
    }
}
*/