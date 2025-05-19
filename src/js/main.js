document.addEventListener("DOMContentLoaded", function () {
    var spy = new Gumshoe('header .pure-menu-list a', {
        reflow: true,
        offset: function () {
            return document.querySelector('header').getBoundingClientRect().height;
        },
        events: true
    });

    document.addEventListener('gumshoeActivate', function (event) {
        let url = event.target.querySelector('a').href;
        //location.href = url;
    }, false);

    let menuBtn = document.querySelector('#menuLink');
    menuBtn.addEventListener('click', function (e) {
        let menuWrapper = document.querySelector('body > header');
        if (menuWrapper.classList.contains('menuOpen')) {
            menuWrapper.classList.remove('menuOpen');
        } else {
            menuWrapper.classList.add('menuOpen');
        }
    });

    var mixer2 = mixitup('#xps .mixWrap', { selectors: { target: '#xps .mix', control: '#xps ul li button' } });
    var mixer3 = mixitup('#projects .mixWrap', { selectors: { target: '#projects .mix', control: '#projects ul li button' } });
    var mixer4 = mixitup('#culture .mixWrap', { selectors: { target: '#culture .mix', control: '#culture ul li button' } });

    document.querySelectorAll('#skills .mix>div:not(.popupContent), #xps .mix>div:not(.popupContent), #culture .mix>div:not(.popupContent)').forEach(function (el) {
        el.addEventListener('click', function (e) {
            let html = ""
            let options = {
                showCloseButton: true
            }
            let elw = el.parentElement;
            if (elw.classList.length < 4) {
                elw = elw.parentElement;
            }

            let img = elw.querySelector('img');
            if (img) {
                options.imageUrl = img.src;
                options.imageAlt = img.alt;
            }


            let title = elw.title;
            if (!title) {
                title = elw.querySelector('h3').innerHTML
            }
            options.title = title;


            if (elw.dataset.text) {
                html = elw.dataset.text;
            } else if (elw.querySelector('.popupContent')) {
                html = elw.querySelector('.popupContent').innerHTML;
            }
            options.html = html;


            if (options.html != '' || options.imageUrl) {
                Swal.fire(options);
            } else {
                Toast.fire({ icon: "error", title: 'pas de contenu' });
            }
        });
    });

    async function sendForm(form) {
        try {
            const formData = new FormData(form);
            const formDataO = Object.fromEntries(formData);

            var missingField = [];
            ['name', 'email', 'subject', 'message'].forEach(function (el) {
                if (!formDataO.hasOwnProperty(el)) {
                    missingField.push(el);
                }
            });

            if (missingField.length > 0) {
                console.error('Champ(s) manquant(s)', missingField);
                throw new Error(`Champ(s) manquant(s): ${missingField}`);
            }

            const options = {
                method: form.method,
                body: formData
            };

            const reponse = await fetch(form.action, options);

            if (!reponse.ok) {
                throw new Error(`Erreur serveur: ${reponse.status}`);
            }

            const resultat = await reponse.text();
            console.log('Réussite:', resultat);
            return resultat;

        } catch (erreur) {
            console.error('Erreur:', erreur.message);
            throw erreur;
        }
    }

    var sendingMail = false;
    document.querySelectorAll('form').forEach(function (el) {
        el.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!sendingMail) {
                sendingMail = true;
                sendForm(el).then(resultat => {
                    console.log('Données envoyées avec succès:', resultat);
                    Toast.fire({ icon: "success", title: resultat.answer });
                    sendingMail = false;
                }).catch(erreur => {
                    console.error('Erreur lors de l\'envoi:', erreur.message);
                    Toast.fire({ icon: "error", title: resultat.answer });
                    sendingMail = false;
                });
            }
        })
    });

    async function fetchCsrfToken() {
        try {
            const response = await fetch('ajaxPHP/index.php?a=token', {
                method: 'GET',
                credentials: 'same-origin' // Important for CSRF protection
            });

            if (!response.ok) {
                throw new Error('Failed to fetch token');
            }

            const { token } = await response.json();

            document.querySelectorAll('form').forEach(function (el) {
                const tokenInput = document.createElement('input');

                tokenInput.type = 'hidden';
                tokenInput.name = 'token';
                tokenInput.value = token;

                // Remove existing token if present
                const existingToken = el.querySelector('input[name="token"]');
                if (existingToken) {
                    existingToken.remove();
                }

                el.appendChild(tokenInput);
            });

        } catch (error) {
            console.error('Error fetching CSRF token:', error);
        }
    }

    fetchCsrfToken();

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 30000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    tarteaucitron.init({
        "privacyUrl": "", /* Privacy policy url */
        "bodyPosition": "bottom", /* or top to bring it as first element for accessibility */

        "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
        "cookieName": "tarteaucitron", /* Cookie name */

        "orientation": "middle", /* Banner position (top - bottom - middle - popup) */

        "groupServices": false, /* Group services by category */
        "showDetailsOnClick": true, /* Click to expand the description */
        "serviceDefaultState": "wait", /* Default state (true - wait - false) */

        "showAlertSmall": false, /* Show the small banner on bottom right */
        "cookieslist": false, /* Show the cookie list */

        "showIcon": true, /* Show cookie icon to manage cookies */
        // "iconSrc": "", /* Optional: URL or base64 encoded image */
        "iconPosition": "BottomRight", /* Position of the icon between BottomRight, BottomLeft, TopRight and TopLeft */

        "adblocker": false, /* Show a Warning if an adblocker is detected */

        "DenyAllCta": true, /* Show the deny all button */
        "AcceptAllCta": true, /* Show the accept all button when highPrivacy on */
        "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */
        "alwaysNeedConsent": false, /* Ask the consent for "Privacy by design" services */

        "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */

        "removeCredit": false, /* Remove credit link */
        "moreInfoLink": true, /* Show more info link */
        "useExternalCss": false, /* If false, the tarteaucitron.css file will be loaded */
        "useExternalJs": false, /* If false, the tarteaucitron.services.js file will be loaded */

        // "cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for subdomain website */

        "readmoreLink": "", /* Change the default readmore link pointing to tarteaucitron.io */

        "mandatory": true, /* Show a message about mandatory cookies */
        "mandatoryCta": true, /* Show the disabled accept button when mandatory on */

        // "customCloserId": "", /* Optional a11y: Custom element ID used to open the panel */

        "googleConsentMode": true, /* Enable Google Consent Mode v2 for Google ads and GA4 */
        "bingConsentMode": false, /* Enable Bing Consent Mode for Clarity and Bing Ads */
        "softConsentMode": false, /* Soft consent mode (consent is required to load the services) */

        "dataLayer": false, /* Send an event to dataLayer with the services status */
        "serverSide": false, /* Server side only, tags are not loaded client side */

        "partnersList": false /* Details the number of partners on the popup and middle banner */
    });

    /******************************************GOOGLE ANALITICS******************************************/
    tarteaucitron.user.gtagUa = 'G-PQV4SGSTZK';
    tarteaucitron.user.gtagMore = function () { /* add here your optionnal gtag() */ };
    (tarteaucitron.job = tarteaucitron.job || []).push('gtag');

    // <!-- Google tag (gtag.js) -->
    // <script async src="https://www.googletagmanager.com/gtag/js?id=G-PQV4SGSTZK"></script>
    // <script>
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', 'G-PQV4SGSTZK');
    // </script>
    /******************************************FIN GOOGLE ANALITICS******************************************/
});