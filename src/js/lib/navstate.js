/*eslint-env jquery*/

function navstate() {
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.navbar')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.navbar')
        .removeClass('menu_state_open');
    });
  });
}

module.exports = navstate;
