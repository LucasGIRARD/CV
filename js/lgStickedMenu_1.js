var marginTopFixed;
var onePageJs;

var stickyHeight;
var stickyMarginB;
var marginTopStatic;
var vartop;
var sticked;


function stickTheMenu() {
    sticked = true;
    $('.stuckMenu').next().closest('div').css('margin-top', stickyHeight + stickyMarginB + marginTopFixed + 'px');
    $('#nav').attr('id', 'navLeft');
}

function unstickTheMenu() {
    sticked = false;
    $('.stuckMenu').next().closest('div').css('margin-top', marginTopStatic + 'px');
    $('#navLeft').attr('id', 'nav');
    
    
}


$.fn.stickedMenu = function(options) {    
    $(this).addClass('unstuckMenu');
    
    if (options.marginTopFixed == 'auto') {
        marginTopFixed = parseInt($('.stuckMenu').css('margin-top'));
    } else if (!isNaN(parseInt(options.marginTopFixed))) {
        marginTopFixed = parseInt(options.marginTopFixed);
    } else {
        marginTopFixed = 0;
    }
    
    if (options.onePageJs == 'true') {
        onePageJs = true;
    } else {
        onePageJs = false;
    }
    
    sticked = false;
    

    stickyHeight = parseInt($(this).height());
    stickyMarginB = parseInt($(this).css('margin-bottom'));
    marginTopStatic = parseInt($(this).next().closest('div').css('margin-top'));
    vartop = parseInt($(this).offset().top);

    if (onePageJs) {
        varscroll = Math.abs(parseInt($('#content').position().top));
    } else {
        varscroll = parseInt($(document).scrollTop());
    }

    clientWidth = document.documentElement.clientWidth;
    if (clientWidth < 980) {
        stickTheMenu();   
    }
};

$(document).ready(function() {
    if (onePageJs) {
        $('#content').eye({
            'top': function(oldVal, newVal) {
                varscroll = Math.abs(parseInt(newVal));
                if (vartop < varscroll + marginTopFixed && !sticked) {
                    stickTheMenu();   
                } else if (varscroll + marginTopFixed < vartop && sticked) {
                    unstickTheMenu();
                }
            }
        }, 100);
    } else {
        $(document).on('scroll', function() {
            varscroll = parseInt($(document).scrollTop());
            if (vartop < varscroll + marginTopFixed && !sticked) {
                stickTheMenu();                
            } else if (varscroll + marginTopFixed < vartop && sticked) {
                unstickTheMenu();
            }
        });
    }

    $(window).resize(function() {
        clientWidth = document.documentElement.clientWidth;
        if ((clientWidth < 767) && !sticked) {
            stickTheMenu();
        } else if ((clientWidth > 767) && sticked) {
            unstickTheMenu();
        }
    });

    clientWidth = document.documentElement.clientWidth;
    if ((clientWidth < 767) && !sticked) {
        stickTheMenu();
    } else if ((clientWidth > 767) && sticked) {
        unstickTheMenu();
    }
});