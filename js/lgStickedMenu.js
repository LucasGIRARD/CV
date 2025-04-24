

var idMenu;
var marginTopFixed;
var onePageJs;
var idContent;

var stickyHeight;
var stickyMarginB;
var marginTopStatic;
var vartop;
var sticked;
var mobileMenu;


function stickTheMenu() {
    sticked = true;
    $(idMenu).next().closest('div').css('margin-top', stickyHeight + stickyMarginB + marginTopFixed + 'px');
    $(idMenu).addClass("sticked");
}

function unstickTheMenu() {
    sticked = false;
    $(idMenu).next().closest('div').css('margin-top', marginTopStatic + 'px');
    $(idMenu).removeClass("sticked");
}

function showMobileMenu() {
    mobileMenu = true;
    stickTheMenu();
}

function hideMobileMenu() {
    mobileMenu = false;
    unstickTheMenu();
}


function checkScroll() {
    if (vartop < varscroll + marginTopFixed && !sticked) {
        stickTheMenu();
    } else if (varscroll + marginTopFixed < vartop && sticked) {
        unstickTheMenu();
    }
}

function checkWidth() {
    clientWidth = document.documentElement.clientWidth;
    if ((clientWidth < 767) && !mobileMenu) {
        showMobileMenu();
    } else if ((clientWidth > 767) && mobileMenu) {
        hideMobileMenu();
    }
}




$.fn.stickedMenu = function (options) {
    idMenu = '#' + $(this).attr('id');

    if (options.marginTopFixed === 'auto') {
        marginTopFixed = parseInt($(idMenu).css('margin-top'));
    } else if (!isNaN(parseInt(options.marginTopFixed))) {
        marginTopFixed = parseInt(options.marginTopFixed);
    } else {
        marginTopFixed = 0;
    }

    if (options.onePageJs === true) {
        onePageJs = true;
    } else {
        onePageJs = false;
    }

    idContent = options.idContent;

    sticked = false;
    mobileMenu = false;

    stickyHeight = parseInt($(this).height());
    stickyMarginB = parseInt($(this).css('margin-bottom'));
    marginTopStatic = parseInt($(this).next().closest('div').css('margin-top'));
    vartop = parseInt($(this).offset().top);

    if (onePageJs) {
        varscroll = Math.abs(parseInt($(idContent).position().top));
    } else {
        varscroll = parseInt($(document).scrollTop());
    }

    $(document).ready(function () {
        if (options.sticked) {
            if (onePageJs) {
                $(idContent).eye({
                    'top': function (oldVal, newVal) {
                        varscroll = Math.abs(parseInt(newVal));
                        checkScroll();
                    }
                }, 100);
            } else {
                $(document).on('scroll', function () {
                    varscroll = parseInt($(document).scrollTop());
                    checkScroll();
                });
            }
        }

        if (options.mobile) {
            if (options.responsive) {
                //add pure css
                $(window).resize(function () {
                    checkWidth();
                });
            } else {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    checkWidth();
                } else {
                    //alert('not mobile');
                }
            }
        }



        if (options.active) {

        }

    });



};