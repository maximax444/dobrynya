// Overlays
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

// reviews
$('.reviews__block:hidden').slice(0, 4).slideDown();
if ($(".reviews__block:hidden").length == 0) {
    $('.reviews__more').hide();
}
$(".reviews__more").on("click", function (e) {
    e.preventDefault();
    $('.reviews__block:hidden').slice(0, 2).slideDown();
    console.log($(".reviews__block:hidden").length);
    if ($(".reviews__block:hidden").length == 0) {
        $('.reviews__more').hide();
    }
});

// news
$('.news__el:hidden').slice(0, 3).slideDown();
if ($(".news__el:hidden").length == 0) {
    $('.news__more').hide();
}
$(".news__more").on("click", function (e) {
    e.preventDefault();
    $('.news__el:hidden').slice(0, 3).slideDown();
    console.log($(".news__el:hidden").length);
    if ($(".news__el:hidden").length == 0) {
        $('.news__more').hide();
    }
});