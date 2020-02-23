$(function() {
    let s;
    let scrollPos = 0;
    let header = $('#header');
    $("body").scroll(function(){
        s = $(this).scrollTop();
        //(s > scrollPos) ? header.hide() :  header.show();
        (s > scrollPos) ? header.css('opacity', '0') : header.css('opacity', '1');
        scrollPos = s;
    });
});