// header drop
$('.header__lang-main').on('click', function () {
    $('.header__lang-drop').toggleClass('active');
});
$('.header__lang-drop').on('click', function () {
    var nowText = $('.header__lang-main span').html();
    var secText = $('.header__lang-drop span').html();
    var nowImg = $('.header__lang-main img').attr('src');
    var secImg = $('.header__lang-drop img').attr('src');

    $('.header__lang-main span').html(secText);
    $('.header__lang-drop span').html(nowText);
    $('.header__lang-main img').attr('src', secImg);
    $('.header__lang-drop img').attr('src', nowImg);
    $('.header__lang-drop').removeClass('active');
});
// home media
$('.home-media__tabs').on('click', 'button:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.home-media').find('.home-media__cont-block').removeClass('active').eq($(this).index()).addClass('active');
    $(this).closest('.home-media').find('.home-media__cont-block').eq($(this).index()).find('.home-media__slider').slick('reinit');
});

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

// form file
$('.about-reviews__upload-wrap').on('click', function () {
    $('.about-reviews__upload input').click();
});
var inputs = document.querySelectorAll('.about-reviews__upload input');
Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
        labelVal = label.innerHTML;
    input.addEventListener('change', function (e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
            fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
            fileName = e.target.value.split('\\').pop();
        if (fileName) {
            $(".about-reviews__upload span").html(fileName);
        }
        else
            label.innerHTML = labelVal;
    });
});

// about niceScroll
$('.about-reviews__main').niceScroll({
    cursorcolor: "#2AB46C",
    cursorwidth: "5px",
    cursorborder: "0",
    cursorborderradius: 0,
    autohidemode: 'leave',
    background: "rgba(196, 196, 196, 0.2)"
});
$('.about-news__wrap').niceScroll({
    cursorcolor: "#2AB46C",
    cursorwidth: "5px",
    cursorborder: "0",
    cursorborderradius: 0,
    autohidemode: 'leave',
    background: "rgba(196, 196, 196, 0.2)"
});

// konf niceScroll
$('.konf__table-wrap').niceScroll({
    cursorcolor: "#2AB46C",
    cursorwidth: "5px",
    cursorborder: "0",
    cursorborderradius: 0,
    autohidemode: 'leave',
    background: "rgba(196, 196, 196, 0.2)"
});

// konf slider
$('.konf__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    slide: '.konf__slide'
});

// konf tabs
$('.konf__tabs').on('click', '.konf__tabs-block:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.konf').find('.konf__cont-block').removeClass('active').eq($(this).index()).addClass('active');
    $(this).closest('.konf').find('.konf__cont-block').eq($(this).index()).find('.konf__slider').slick('reinit');
});

// konf arrows
$('.konf .prev').on('click', function () {
    $(this).closest('.konf__slider').slick('prev');
});
$('.konf .next').on('click', function () {
    $(this).closest('.konf__slider').slick('next');
});

// konf change main img
$('.konf__slide').on('click', function () {
    $(this).closest('.konf__cont-block').find('.konf__img img').attr('src', $(this).find('img').attr('src'));
});

// card tabs
$('.card-parts__tabs').on('click', 'button:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.card-parts').find('.card-parts__cont-block').removeClass('active').eq($(this).index()).addClass('active');
    $(this).closest('.card-parts').find('.card-parts__cont-block').eq($(this).index()).find('.konf__slider').slick('reinit');
});

// card slider slides
$('.card-main .home-media__count-all').html($('.card-main__slider img').length);

// card slider
$('.card-main__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: false,
    slide: 'img',
    prevArrow: ".home-media__prev",
    nextArrow: ".home-media__next"
});
$('.card-main__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.card-main .home-media__count-curr').html(currentSlide + 1);
});