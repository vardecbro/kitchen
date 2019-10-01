/*eslint-env jquery*/
function slider(){
  var
    slider         = document.getElementById('slider'),
    sliderField    = document.getElementById('sliderField'),
    sliderWidth    = slider.getBoundingClientRect().width,
    sliderElements = sliderField.querySelectorAll('li');

  $(window).resize(function(){
    sliderWidth    = slider.getBoundingClientRect().width;  
    console.log(sliderWidth);  
  });

  $(window).resize();

  console.log(sliderWidth);

  if(sliderWidth < 1024){
      sliderElements[0].className = 'slider__item curry_first';

      $('.next').click(function(){
        var
          currentSlide      = $('.slider__item.curry_first'),
          currentSlideIndex = $('.slider__item.curry_first').index(),
          nextSlideIndex    = currentSlideIndex + 1,
          nextSlide         = $('.slider__item').eq(nextSlideIndex);
        currentSlide.removeClass('curry_first');
          if(nextSlideIndex === ($('.slider__item:last').index() + 1)){
            $('.slider__item').eq(0).addClass('curry_first');
          } else {
            nextSlide.addClass('curry_first');
          };
      });

      $('.prev').click(function(){
        var
          currentSlide = $('.slider__item.curry_first'),
          currentSlideIndex = $('.slider__item.curry_first').index(),
          prevSlideIndex    = currentSlideIndex - 1,
          prevSlide         = $('.slider__item').eq(prevSlideIndex);
        currentSlide.removeClass('curry_first');
        prevSlide.addClass('curry_first');
      });

  } else {
    sliderElements[0].className = 'slider__item curry_first';
    sliderElements[1].className = 'slider__item curry_second';
    $('.next').click(function(){
      var
        currentSlide      = $('.slider__item.curry_first'),
        currentSecondSlide = $('.slider__item.curry_second'),

        currentSlideIndex = $('.slider__item.curry_first').index(),
        currentSecondSlideIndex = $('.slider__item.curry_second').index(),

        nextSlideIndex    = currentSlideIndex + 1,
        nextSecondSlideIndex = currentSecondSlideIndex + 1,

        nextSlide         = $('.slider__item').eq(nextSlideIndex),
        nextSecondSlide = $('.slider__item').eq(nextSecondSlideIndex);
      currentSlide.removeClass('curry_first');
      currentSecondSlide.removeClass('curry_second');

        if(nextSlideIndex === ($('.slider__item:last').index() + 1)){
          $('.slider__item').eq(0).addClass('curry_first');
          $('.slider__item').eq(1).addClass('curry_second');
          $('.slider__field').removeClass('revers');
        } else {
          nextSlide.addClass('curry_first');
          if(nextSecondSlideIndex === ($('.slider__item:last').index() + 1)){
            $('.slider__item').eq(0).addClass('curry_second');
            $('.slider__field').addClass('revers');
          } else {
            nextSecondSlide.addClass('curry_second');
          };
        };
    });

    $('.prev').click(function(){
      var
        currentSlide = $('.slider__item.curry_first'),
        currentSecondSlide = $('.slider__item.curry_second'),
        currentSlideIndex = $('.slider__item.curry_first').index(),
        currentSecondSlideIndex = $('.slider__item.curry_second').index(),
        prevSlideIndex    = currentSlideIndex - 1,
        prevSecondSlideIndex = currentSecondSlideIndex - 1,
        prevSlide         = $('.slider__item').eq(prevSlideIndex),
        prevSecondSlide = $('.slider__item').eq(prevSecondSlideIndex);
      currentSlide.removeClass('curry_first');
      currentSecondSlide.removeClass('curry_second');
      prevSlide.addClass('curry_first');
      prevSecondSlide.addClass('curry_second');
      if(prevSecondSlideIndex === 0){
        $('.slider__field').addClass('revers');
      } else {
        $('.slider__field').removeClass('revers');
      };
    });
  };
}

module.exports = slider;