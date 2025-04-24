var contentTop = [];
var testView = [];

var lastScrollTop = 0;
var scrollDir = '';
var menuSize = 0;
var itemClass = [];
var itemHover;

var onePageJs = true;

function ActiveMenu(options) {

    for (var o in options.parts) {
        if (options.parts.hasOwnProperty(o)) {
            menuSize++;
        }
    }

    for (var o in options.itemClass) {
        if (options.itemClass.hasOwnProperty(o)) {
            itemClass.push(options.itemClass[o])
        }
    }

    itemHover = options.itemHover;

    for (var i = 0; i < menuSize; i++) {
        contentTop[i] = $('#' + options.parts[i] + '').offset().top;
        contentView = $('#' + options.parts[i] + '').height() * .4;
        testView[i] = contentTop[i] - contentView;
    }
    if (onePageJs) {
        varscroll = Math.abs(parseInt($('#content').offset().top));
    } else {
        varscroll = parseInt($(document).scrollTop());
    }

    if (varscroll < 50) {
        for (var i = 0; i < itemClass.length; i++) {
            $('.' + itemClass[i] + ':eq(0)').addClass(itemHover);
        }
    } else {
        for (var i = 0; i < menuSize - 1; i++) {
            if (varscroll < testView[i]) {
                i--;
                break;
            }
        }
        for (var i = 0; i < itemClass.length; i++) {
            $('.' + itemClass[i] + ':eq(' + i + ')').addClass(itemHover);
        }

    }
}
;
$(document).ready(function() {
    if (onePageJs) {
        $('#content').eye({
            'top': function(oldVal, newVal) {
                varscroll = Math.abs(parseInt(newVal));

                var st = $(this).scrollTop();
                if (st > lastScrollTop) {
                    scrollDir = 'down';
                } else {
                    scrollDir = 'up';
                }
                lastScrollTop = st;

                if (scrollDir == 'up' && varscroll < 50) {

                    for (var i = 0; i < itemClass.length; i++) {
                        $('.' + itemClass[i]).removeClass(itemHover);
                        $('.' + itemClass[i] + ':eq(0)').addClass(itemHover);
                    }
                } else {
                    for (var i = 0; i < menuSize; i++) {
                        if (scrollDir == 'down' && varscroll > contentTop[i] - 50 && varscroll < contentTop[i] + 0) {
                            for (var y = 0; y < itemClass.length; y++) {
                                $('.' + itemClass[y]).removeClass(itemHover);
                                $('.' + itemClass[y] + ':eq(' + i + ')').addClass(itemHover);
                            }

                        } else if (scrollDir == 'up' && varscroll > testView[i]) {
                            for (var y = 0; y < itemClass.length; y++) {
                                $('.' + itemClass[y]).removeClass(itemHover);
                                $('.' + itemClass[y] + ':eq(' + i + ')').addClass(itemHover);
                            }
                        }
                    }
                }
            }
        }, 100);
    } else {
        $(document).on('scroll', function() {
            varscroll = parseInt($(document).scrollTop());

            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                scrollDir = 'down';
            } else {
                scrollDir = 'up';
            }
            lastScrollTop = st;

            if (scrollDir == 'up' && varscroll < 50) {

                for (var i = 0; i < itemClass.length; i++) {
                    $('.' + itemClass[i]).removeClass(itemHover);
                    $('.' + itemClass[i] + ':eq(0)').addClass(itemHover);
                }
            } else {
                for (var i = 0; i < menuSize; i++) {
                    if (scrollDir == 'down' && varscroll > contentTop[i] - 50 && varscroll < contentTop[i] + 0) {
                        for (var y = 0; y < itemClass.length; y++) {
                            $('.' + itemClass[y]).removeClass(itemHover);
                            $('.' + itemClass[y] + ':eq(' + i + ')').addClass(itemHover);
                        }

                    } else if (scrollDir == 'up' && varscroll > testView[i]) {
                        for (var y = 0; y < itemClass.length; y++) {
                            $('.' + itemClass[y]).removeClass(itemHover);
                            $('.' + itemClass[y] + ':eq(' + i + ')').addClass(itemHover);
                        }
                    }
                }
            }
        });
    }
});