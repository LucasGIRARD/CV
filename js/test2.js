var minHeightBI = false;
var activeSlide = 1;
var nbrSlide = 2;
$(window).load(function() {
    KrousselSizing(); 
    $(window).on('resize', function() {
        KrousselSizing();
    });
});
function KrousselSizing() {
    var clientWidth = document.documentElement.clientWidth;
    var marginTopContent;
    var backgroundImageHeight;
    var contentHeight;
    var KrousselHeight;
    var heightMarginArrow = 0;

    $('#Kroussel-slides').css('width', clientWidth);
    $('.Kroussel-slide').css('width', clientWidth);
    $('.Kroussel-backgroundImage').css('width', clientWidth);
/*
    contentHeight = $('.Kroussel-content').height();
    backgroundImageHeight = $('.Kroussel-backgroundImage').height();
    
    if (backgroundImageHeight > contentHeight) {
        $('#Kroussel').css('height', backgroundImageHeight);
        $('#Kroussel-interface').css('height', backgroundImageHeight);
        KrousselHeight = backgroundImageHeight;
    } else {
        $('#Kroussel').css('height', contentHeight);
        $('#Kroussel-interface').css('height', contentHeight);
        KrousselHeight = contentHeight;
    }

    if (clientWidth <= 767) {
        marginTopContent = $('#Kroussel-arrowtop-container').height();
    } else {
        if (KrousselHeight > contentHeight) {
            marginTopContent = (KrousselHeight - contentHeight) / 2;
        } else {
            marginTopContent = 0;
        }
    }
    $('.Kroussel-content').css('paddingTop', marginTopContent + "px");
    contentHeight = $('.Kroussel-content').height();


    $('#Kroussel-slides').css('minHeight', KrousselHeight);
    $('.Kroussel-backgroundImage').css('minHeight', KrousselHeight);

    if (clientWidth <= 767) {
        $('#Kroussel-navigator-container-mobile').css('height', KrousselHeight);
    } else {
        $('#Kroussel-arrowleft').css('paddingTop', (KrousselHeight - $('#Kroussel-arrowleft').height()) / 2 + "px");
        $('#Kroussel-arrowright').css('paddingTop', (KrousselHeight - $('#Kroussel-arrowright').height()) / 2 + "px");
        $('#Kroussel-navigator').css('paddingTop', (((KrousselHeight - $('.Kroussel-content').height()) / 2) + $('.Kroussel-content').height()) + "px");
    }
    */
}

function KrousselPrevious() {
    activeSlide = activeSlide - 1;
    if (activeSlide < 1) {
        activeSlide = nbrSlide;
    }
    newPosition = $("#Kroussel-slide-" + activeSlide).position().left;
    $("#Kroussel-slides-overflow").animate({
        left: "-" + newPosition + "px"
    }, 1000);
}

function KrousselNext() {
    activeSlide = activeSlide + 1;
    if (activeSlide > nbrSlide) {
        activeSlide = 1;
    }
    newPosition = $("#Kroussel-slide-" + activeSlide).position().left;
    $("#Kroussel-slides-overflow").animate({
        left: "-" + newPosition + "px"
    }, 1000);
}
