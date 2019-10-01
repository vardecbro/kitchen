


  $('.next').click(function(){
  // $.slider.querySelector('.next').onclick(function(){
    var
      currentSlide      = $('.slider__item.curry_first'),
      currentSecondSlide = $('.slider__item.curry_second'),

      currentSlideIndex = $('.slider__item.curry_first').index(),
      currentSecondSlideIndex = $('.slider__item.curry_second').index(),

      nextSlideIndex    = currentSlideIndex + 1,
      nextSecondSlideIndex = currentSecondSlideIndex + 1,

      nextSlide         = $('.slider__item').eq(nextSlideIndex),
      nextSecondSlide = $('.slider__item').eq(nextSecondSlideIndex);
      // currentSlide.fadeOut(500);
      // currentSecondSlide.fadeOut(500);
    currentSlide.removeClass('curry_first');
    currentSecondSlide.removeClass('curry_second');

      if(nextSlideIndex === ($('.slider__item:last').index() + 1)){
        // $('.slider__item').eq(0).fadeIn(500);
        $('.slider__item').eq(0).addClass('curry_first');
        $('.slider__item').eq(1).addClass('curry_second');
        $('.slider__field').removeClass('revers');
      } else {
        nextSlide.addClass('curry_first');
        // nextSecondSlide.addClass('curry_second');
        if(nextSecondSlideIndex === ($('.slider__item:last').index() + 1)){
          $('.slider__item').eq(0).addClass('curry_second');
          $('.slider__field').addClass('revers');
        } else {
          nextSecondSlide.addClass('curry_second');
        };
      };
      // console.log(currentSlideIndex),
      // console.log(currentSecondSlideIndex),
      // console.log($('.slider__item:last').index());
      // console.log(nextSlideIndex),
      // console.log(nextSecondSlideIndex);
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

      console.log(prevSlideIndex),
      console.log(prevSecondSlideIndex);

  });





  // sliderElements[0]
  // console.log(currentSlide)