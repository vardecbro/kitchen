/*eslint-env jquery*/
function preloaders()
{
  var
    images              = document.images,
    ImageTotalCount  = images.length,
    ImageLoadCont = 0,
    preloader           = document.getElementById('page__preloader'),
    loader              = document.getElementById('page__loader'),
    logo                = document.getElementById("logo"),
    PercDisplay        = document.getElementById('load__perc');

  for( var i = 0; i < ImageTotalCount; i++ )
  {
    var ImageClone         = new Image();
    ImageClone.onload  = ImageLoaded;
    ImageClone.onerror = ImageLoaded;
    ImageClone.src     = images[i].src;
  }

  function ImageLoaded() {
    ImageLoadCont++;

    PercDisplay.innerHTML = (( ( 100 / ImageTotalCount ) * ImageLoadCont ) <<0) + '%';

    if( ImageLoadCont >= ImageTotalCount )
    {
      setTimeout(function() 
      {     
        if( !loader.classList.contains('done__load') )
        {
          loader.classList.add('done__load');
        }
      }, 300);

      setTimeout(function() 
      {     
        if( !logo.classList.contains('done__logo') )
        {
          logo.classList.add('done__logo');
        }
      }, 1000);

      setTimeout(function() 
      {     
        if( logo.classList.contains('done__logo') )
        {
          logo.classList.remove('done__logo');
        }
      }, 3000);

      setTimeout(function() 
      {     
        if( !preloader.classList.contains('done__preload') )
        {
          preloader.classList.add('done__preload');
        }
      }, 3200);
    }



  }
}
module.exports = preloaders;