/**************************** SPLASH CONTROL *******************************/
$(document).ready(function(){
    splash_num = $("#splash > section").length;
    $('#splash').parent().append("<div id='splash_nav'><ul></ul></div>");

    for (t = 0; t < splash_num; t++) {
        $("#splash_nav ul").append('<li></li>');
    }
    $("#splash_nav li").eq(0).addClass("active");

    current_splash = 0;

    splash_interval = setInterval(function () {
        $('#splash > section.active').removeClass('active');
        $('#splash_nav li.active').removeClass('active');

        if($(window).width() > 960) {$('#splash > section').eq(current_splash).fadeOut(500);} 
        else {$('#splash > section').eq(current_splash).hide();}

        if (current_splash === splash_num - 1) {current_splash = 0;} 
        else {current_splash++;}

        if($(window).width() > 960) {$('#splash > section').eq(current_splash).fadeIn(1000);} 
        else{$('#splash > section').eq(current_splash).show();}

        $('#splash > section').eq(current_splash).addClass('active');
        $('#splash_nav li').eq(current_splash).addClass('active');

    }, 3000);
});

$(document).on('click','#splash_nav li', function () {
    $("#splash > section.active").fadeOut();
    $("#splash > section.active").removeClass("active");

    $("#splash_nav li.active").removeClass("active");

    $(this).addClass("active");
    splash_interval = window.clearInterval(splash_interval);

    $("#splash > section").eq($("#splash_nav li").index(this)).fadeIn();
    $("#splash > section").eq($("#splash_nav li").index(this)).addClass("active");

});