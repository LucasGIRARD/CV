document.addEventListener("DOMContentLoaded", function () {
    var spy = new Gumshoe('header .pure-menu-list a');
    var mixer = mixitup('.mixWrap');


    document.querySelectorAll('.mixWrap img').forEach(function (img) {
        img.addEventListener('click', function (e) {
            Swal.fire({
                title: img.title,
                imageUrl: img.src,
                imageAlt: img.alt,
                text: img.dataset.text,
                showCloseButton: true
            });
        });
    })
});