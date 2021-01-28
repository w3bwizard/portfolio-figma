$(function () {
    var topnav = $('.topnav');
    var burger = $('.burger');
    var lang_switch = $('.ru-en');

    burger.click(function (e) {
        e.preventDefault();
        burger.toggleClass('burger_active');
        topnav.toggleClass('topnav_show');
        lang_switch.toggleClass('ru-en_show');
    });
    console.log(lang_switch.innerHeight());

});