$(document).ready(function () {
    //$('.carousel').carousel({
    //    interval: 2000
    //})
    $('.navpill').click(function () {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })
});