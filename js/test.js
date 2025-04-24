var minHeightBI = false;
$(window).load(function() {
    $('#Kroussel-text').flowtype({
        minFont: 12,
        maxFont: 22
    });
    sizing();
    $(window).on('resize', function() {
        sizing();
    });
});
function sizing() {
    $('#Kroussel-image').css('marginTop', "-" + ($('#Kroussel-image').height() / 2) + "px");
    $('#Kroussel-text').css('marginTop', "-" + ($('#Kroussel-text').height() / 2) + "px");
    $('#Kroussel-arrowleft').css('marginTop', "-" + ($('#Kroussel-arrowleft').height() / 2) + "px");
    $('#Kroussel-arrowright').css('marginTop', "-" + ($('#Kroussel-arrowright').height() / 2) + "px");

    clientWidth = document.documentElement.clientWidth;
    $('#Kroussel-backgroundImage').css('width', clientWidth);

    if (($('#Kroussel-backgroundImage').height() > $('#Kroussel-image').height()) && ($('#Kroussel-backgroundImage').height() > $('#Kroussel-text').height())) {
        if (minHeightBI == true) {
            $('#Kroussel-backgroundImage').css('minHeight', '0');
            minHeightBI = false;
        }
        $('#Kroussel-content').css('height', $('#Kroussel-backgroundImage').height());
    } else {
        if ($('#Kroussel-image').height() > $('#Kroussel-text').height()) {
            $('#Kroussel-content').css('height', $('#Kroussel-image').height());
        } else {
            $('#Kroussel-content').css('height', $('#Kroussel-text').height());
        }
        $('#Kroussel-backgroundImage').css('minHeight', $('#Kroussel-content').height());
        minHeightBI = true;
    }
}