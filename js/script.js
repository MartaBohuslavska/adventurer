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

  $("#all").click(function(){
    $(".work").show();
    return false
  });

  $("#photography").click(function(){
    $(".work").hide();
    $("#work-photography1").show();
    $("#work-photography2").show();
    return false
  });

  $("#graphic").click(function(){
    $(".work").hide();
    $("#work-graphic").show();
    return false
  });

  $("#print").click(function(){
    $(".work").hide();
    $("#work-print1").show();
    $("#work-print2").show();
    return false
  });

  $("#web").click(function(){
    $(".work").hide();
    $("#work-web").show();
    return false
  });

  $('a[data-target^="anchor"]').on('click.smoothscroll', function(){
    var target = $(this).attr("href"),
        bl_top = $(target).offset().top - 100;
    $('body, html').animate({scrollTop: bl_top}, 700);
  });
  
  870
});