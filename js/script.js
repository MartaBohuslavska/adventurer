$(document).ready(function(){

  $('.item-collapse h2').on('click', function() {
    $(this).parents('.item-collapse').siblings().removeClass('active');
    $(this).parents('.item-collapse').addClass('active');
  });

  $(".myBar").each(function() {
    $(this)
      .data("origWidth", $(this).width())
      .width(0)
      .animate({
        width: $(this).data("origWidth")
      }, 1500);
  });

  $(function(){
    $(".myBar > span").hide()
    setTimeout(function() {
      $(".myBar > span").show("slow")
    }, 1000);
  });

  $(".slider_reviews").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

});