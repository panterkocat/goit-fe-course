$(document).ready(function(){
  $('.section-05__slick-container').slick({
    accessibility: true,
    appendArrows: $('.slick-button'),
    prevArrow: $('.slick-button.button-left'),
    nextArrow: $('.slick-button.button-right'),
    dots: true,
    //dotsClass: $('.slick-dots.wheel__item1'),
    appendDots: $('.slick-dots.wheel'),
    customPaging : function(slider, i) {
      let thumb = $(slider.$slides[i]).data();
      return '<button class="dot">'+"0"+(i+1)+"</button>";
    },
});
});
