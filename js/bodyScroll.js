$('.drawer-open').click(function () {
    $('body').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
    });
});

$('.drawer-close, .modal-background, .gnb-container ul li a').click(function () {
    $('body').off('scroll touchmove mousewheel');
});