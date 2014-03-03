$(document).ready(function(){
    $('.navpill').click(function () {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })
});