jQuery(document).ready(function(){
$('.video_info>.fa').click(function() {
    $(this).parents('.video').toggleClass('open');
    $('.video_info .fa-angle-right').toggle();
    $('.video_info .fa-angle-left').toggle();
    return false;
});

$('.circle').on('click', function(e){
  $('.cust_video')[0].play();
});

$('video').on('play', function(e){
  $('.circle').css('display', 'none');
});

$('video').on('pause', function(e){
  $('.circle').css('display', 'block');
});

$('.loc_name').click(function() {
    $(this).parents('.senegal_item').toggleClass('open');
    $(this).find('.fa-angle-left').toggle();
    $(this).find('.fa-angle-down').toggle();
    return false;
});


$('#hamburger').on('click', function(){
  $('.menu').toggleClass('show');

    if ($(this).hasClass('is-closed')) {
      $('#hamburger').addClass('is-open').removeClass('is-closed');
    } else {
      $('#hamburger').addClass('is-closed').removeClass('is-open');
    }

})

});