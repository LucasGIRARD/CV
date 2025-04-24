var activeSlide;
var nbrSlide;

$(window).load(function() {
    KrousselInit();
    $(window).on('resize', function() {
        KrousselSizing();
    });
});

function KrousselInit() {
    activeSlide = 1;
    nbrSlide = 2;
    KrousselSizing();
}

function KrousselSizing() {
    var clientWidth = document.documentElement.clientWidth;
    var KrousselHeight;
    var marginTopContent;

    $('#Kroussel').css('minHeight', "0px");
    $('#Kroussel-slides').css('minHeight', "0px");
    $('.Kroussel-content').css('paddingTop', "0px");
    $('.Kroussel-backgroundImage').css('minHeight', "0px");

    $('#Kroussel-interface').css('minHeight', "0px");
    $('#Kroussel-navigator-container-mobile').css('minHeight', "0px");
    $('#Kroussel-arrowleft').css('paddingTop', "0px");
    $('#Kroussel-arrowright').css('paddingTop', "0px");
    $('#Kroussel-navigator').css('paddingTop', "0px");

    $('#Kroussel-slides').css('width', clientWidth);
    $('.Kroussel-slide').css('width', clientWidth);
    $('.Kroussel-backgroundImage').css('width', clientWidth);

    var contentHeight = $('.Kroussel-content').height();
    var backgroundImageHeight = $('.Kroussel-backgroundImage').height();
    var arrowTopNavHeight = $('#Kroussel-arrowtop-container').height();

    if (backgroundImageHeight > contentHeight) {
        KrousselHeight = backgroundImageHeight;
    } else {
        KrousselHeight = contentHeight;
        backgroundImageHeight = contentHeight;
    }

    if (clientWidth <= 767) {
        marginTopContent = arrowTopNavHeight;
        KrousselHeight += marginTopContent * 2;
    } else {
        if (KrousselHeight > contentHeight) {
            marginTopContent = (KrousselHeight - contentHeight) / 2;
        } else {
            marginTopContent = 0;
        }
    }

    $('#Kroussel').css('minHeight', KrousselHeight);
    $('#Kroussel-slides').css('minHeight', KrousselHeight);
    $('.Kroussel-content').css('paddingTop', marginTopContent + "px");
    $('.Kroussel-backgroundImage').css('minHeight', KrousselHeight);

    $('#Kroussel-interface').css('minHeight', KrousselHeight);
    $('#Kroussel-navigator-container-mobile').css('minHeight', KrousselHeight - ( marginTopContent * 2 ));
    $('#Kroussel-arrowleft').css('paddingTop', (KrousselHeight - $('#Kroussel-arrowleft').height()) / 2 + "px");
    $('#Kroussel-arrowright').css('paddingTop', (KrousselHeight - $('#Kroussel-arrowright').height()) / 2 + "px");
    $('#Kroussel-navigator').css('paddingTop', (((KrousselHeight - $('.Kroussel-content').height()) / 2) + $('.Kroussel-content').height()) + "px");

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
