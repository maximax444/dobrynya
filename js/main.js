$('.access__block').on('click', function (e) {
    e.preventDefault();
    $(this).next('.overlay').addClass('active');
    $('body').css("overflow", "hidden");
});
$('.popup__close').on('click', function (e) {
    e.preventDefault();
    $('.overlay').removeClass('active');
    $('body').css("overflow", "visible");
});
$('.overlay').on('click', function (e) {
    if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
        $('body').css("overflow", "visible");
        $(this).removeClass('active');
    }
});