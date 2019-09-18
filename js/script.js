$(document).ready(function(){

  $(".header-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.slide-prev').on('click', function(){
    $('.header-slider').slick('slickPrev');
  });

  $('.slide-next').on('click', function(){
      $('.header-slider').slick('slickNext');
  });

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
  
  $('#search').on('click', function() {
    var search = prompt("What are you looking for?");
    if (search) {
      return false;
    }
    return false;
  });

  function ValidMail(e) {
    var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
    var mail = $('[type="email"]').val();
    var valid = reg.test(mail);
    if (valid) {
        alert("Thank you for your subscription!");
    } else if (!valid) {
        alert("Please, enter the correct email!");
    }
    return false;
  }

  $('#subscribe').on('click', function() {
      console.log(ValidMail());
      $('[type="email"]').val(' ');
  });

});