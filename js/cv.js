var limitHeightHome;
var clientHeight;
var clientWidth;
var leftMenuDeployed = false;
var menuId = '#navLeft';
var topBarId = '#header';
var popupCVHeader = "<h2>Télécharger le C.V.</h2>";
var popupCVContent = "<form class=\"pure-form\">" +
        "<label for=\"cvType\">Veuillez séléctionner le format du fichier : </label>" +
        "<select id=\"cvType\" onchange=\"listFileToDown('#cvType')\">" +
        "<option value=\"files/cv/CV_Lucas_GIRARD.pdf\">PDF</option>" +
        "<option value=\"files/cv/CV_Lucas_GIRARD.docx\">Word 2007</option>" +
        "<option value=\"files/cv/CV_Lucas_GIRARD.doc\">Word 97</option>" +
        "<option value=\"files/cv/CV_Lucas_GIRARD.odt\">OpenOffice</option>" +
        "</select> " +
        "<a id=\"downloadButton\" class=\"pure-button pure-button-primary\" target=\"_blank\" href=\"files/cv/CV_Lucas_GIRARD.pdf\">Télécharger</a> " +
        "<button type=\"button\" class=\"pure-button pure-button-primary\" onclick=\"popupClose()\">Fermer</button>" +
        "</form>";
var popupVCardHeader = "<h2>Télécharger la Vcard</h2>";
var popupVCardContent = "<form class=\"pure-form\">" +
        "<label for=\"vcardType\">Veuillez séléctionner le format du fichier : </label>" +
        "<select id=\"vcardType\" onchange=\"listFileToDown('#vcardType')\">" +
        "<option value=\"files/fiche/Lucas_GIRARD.vcf\">Vcard</option>" +
        "<option value=\"files/fiche/Lucas_GIRARD.zip\">LDIF</option>" +
        "</select> " +
        "<a id=\"downloadButton\" class=\"pure-button pure-button-primary\" target=\"_blank\" href=\"files/fiche/Lucas_GIRARD.vcf\">Télécharger</a> " +
        "<button type=\"button\" class=\"pure-button pure-button-primary\" onclick=\"popupClose()\">Fermer</button>" +
        "</form>";
var popupAlert = "<h2>Attention</h2>";
var popupAlertContentButton = " <button type=\"button\" class=\"pure-button pure-button-primary\" onclick=\"popupClose()\">Fermer</button>";

var sendingMail = false;

var correctionTailleNavigateur = 0;
var isFirefox = navigator.userAgent.indexOf('Firefox');
var isWindows = navigator.userAgent.indexOf('Windows');
var isIE = navigator.userAgent.indexOf('MSIE');
if (isFirefox != -1 && isWindows == -1) {
    correctionTailleNavigateur = 4;
} else if (isIE != -1) {
    correctionTailleNavigateur = 1;
}

/******************************************WINDOW READY******************************************/
$(document).ready(function() {
    /*******************PAGE HEIGHT*******************/   
    clientHeight = document.documentElement.clientHeight;
    clientWidth = document.documentElement.clientWidth;

    if (clientWidth < 980) {
        minHeightBlock = clientHeight + 40;
    } else {
        minHeightBlock = clientHeight;
    }

    $('#home').height(minHeightBlock-40);
    $('#skills').css('min-height', minHeightBlock);
    $('#experiences').css('min-height', minHeightBlock);
    $('#portfolios').css('min-height', minHeightBlock);
    $('#contact').css('min-height', minHeightBlock);
    /*******************FIN PAGE HEIGHT*******************/
    /*******************EASING*******************/
    $('a[href*=#]:not([href=#menu-left])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 700);
                menuLeftClose();
            }
        }
    });
    /*******************FIN EASING*******************/
    /*******************MENU*******************/
    $('#header').stickedMenu({
        marginTopFixed: 0
    });
    ActiveMenu({
        parts: {
            0: 'home',
            1: 'skills',
            2: 'experiences',
            3: 'portfolios',
            4: 'contact'
        },
        itemClass: {
            0: 'navLeftItem',
            1: 'navItem'
        },
        itemHover: 'active'
    });
    /*******************FIN MENU*******************/
    Picatcha.API_SERVER = 'http://api.picatcha.com';
    Picatcha.PUBLIC_KEY = "PYCEEMUbTWRiToi4effg7O9FFONb9DS9ktRdg-0p";
    Picatcha.setCustomization({"format": "1", "color": "#2a1f19", "link": "0", "image_size": "50", "lang": "fr", "langOverride": "0", "noise_level": "10", "noise_type": "0"});
    Picatcha.create("picatcha");
});
/******************************************FIN WINDOW READY******************************************/
/******************************************GOOGLE ANALITICS******************************************
 var _gaq = _gaq || [];
 _gaq.push(['_setAccount', 'UA-34537753-1']);
 _gaq.push(['_trackPageview']);
 var ga = document.createElement('script');
 ga.type = 'text/javascript';
 ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 var s = document.getElementsByTagName('script')[0];
 s.parentNode.insertBefore(ga, s);
 ******************************************FIN GOOGLE ANALITICS******************************************/
function menuLeftToggle() {
    if (leftMenuDeployed) {
        menuLeftClose();
    } else {
        menuLeftOpen();
    }
}

function menuLeftOpen() {
    $(menuId).show();
    menuLeftSetPosition();
    leftMenuDeployed = true;
}

function menuLeftSetPosition() {
    $(menuId).height(clientHeight);
    menuLeftWidth = clientWidth / 4;
    $(topBarId).animate({
        left: menuLeftWidth + 3
    }, 700);
    $(menuId).animate({
        width: menuLeftWidth
    }, 700);
}

function menuLeftClose() {
    $(topBarId).animate({
        left: 0
    }, 700);
    $(menuId).animate({
        width: 0
    },
    {
        duration: 700,
        complete: function() {
            $(menuId).hide()
        }
    });
    leftMenuDeployed = false;
}

function listFileToDown(list) {
    $("#popup #downloadButton").attr("href", $(list).val());
}

function popupOpen(title, content) {
    $("#popup #popupHeader").html(title);
    $("#popup #popupContent").html(content);
    $("#popupBack").show();
    popupSetPosition();
}

function popupSetPosition() {
    $("#popup").css('margin-top', (clientHeight / 2) - ($("#popup").height() / 2));
    $("#popup").css('margin-left', (clientWidth / 2) - ($("#popup").width() / 2));
}

function popupClose() {
    $("#popup #popupHeader").html('');
    $("#popup #popupContent").html('');
    $("#popupBack").hide();
}

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
            $('#picatcha_table').find($(':checked')).each(function(index) {
                picatcha_data['s0'].push(this.value)
            });

            $.ajax({
                url: 'phpAjax/emailSend.php',
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
                success: function(code_html, statut) {
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
                error: function(resultat, statut, erreur) {

                }
            });
        } else {
            if (missingField.length == 1) {
                popupOpen(popupAlert, 'Le champ suivant est manquant : ' + missingField[0] + popupAlertContentButton);
            } else {
                popupOpen(popupAlert, 'Les champs suivant sont manquants : ' + missingField.join(', ') + popupAlertContentButton);
            }
            sendingMail = false;
        }

    } else {
        popupOpen(popupAlert, 'E-mail en cours d\'envoi ou déjà envoyé.' + popupAlertContentButton);
    }
}