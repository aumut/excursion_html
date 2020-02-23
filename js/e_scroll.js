$(function() {
    let s;
    let scrollPos = 0;
    let header = $('#header');
    $("body").scroll(function(){
        s = $(this).scrollTop();
        (s > scrollPos) ? header.hide() :  header.show();
        scrollPos = s;
    });
});