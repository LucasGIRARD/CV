var stickyHeight = 0;
var stickyMarginB = 0;
var marginTopStatic = 0;
var marginTopFixed = 0;
var clientWidth = document.documentElement.clientWidth;
var vartop;
var widthSticked = false;

$.fn.stickedMenu = function(options) {
    $(this).addClass('stuckMenu');

    if (options.marginTopFixed == 'auto') {
        marginTopFixed = parseInt($('.stuckMenu').css('margin-top'));
    } else if (!isNaN(parseInt(options.marginTopFixed))) {
        marginTopFixed = parseInt(options.marginTopFixed);
    }

    stickyHeight = parseInt($(this).height());
    stickyMarginB = parseInt($(this).css('margin-bottom'));
    marginTopStatic = parseInt($(this).next().closest('div').css('margin-top'));
    vartop = parseInt($(this).offset().top);
    varscroll = parseInt($(document).scrollTop());
    if (vartop < varscroll + marginTopFixed || clientWidth < 980) {
        widthSticked = true;
        $('.stuckMenu').addClass('isStuck');
        //$('.stuckMenu').next().closest('div').css('margin-top', stickyHeight + stickyMarginB + marginTopFixed + 'px');
        $('.stuckMenu').css("position", "fixed");
        $('.isStuck').css('top', '0px');
        $('.isStuck').css('left', '0px');
    }
};

$(document).on('scroll', function() {
    if (!widthSticked) {
        varscroll = parseInt($(document).scrollTop());

        if (vartop < varscroll + marginTopFixed) {
            $('.stuckMenu').addClass('isStuck');
            $('.stuckMenu').next().closest('div').css('margin-top', stickyHeight + stickyMarginB + marginTopFixed + 'px');
            $('.stuckMenu').css("position", "fixed");
            $('.isStuck').css('top', '0px');
            $('.isStuck').css('left', '0px');
        } else if (varscroll + marginTopFixed < vartop) {
            $('.stuckMenu').removeClass('isStuck');
            $('.stuckMenu').next().closest('div').css('margin-top', marginTopStatic + 'px');
            $('.stuckMenu').css("position", "relative");
        }
    }
});