$(document).ready(function() {
    var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
    $('#js-centered-navigation-menu').removeClass("show");
    
    menuToggle.on('click', function(e) {
      e.preventDefault();
      $('#js-centered-navigation-menu').slideToggle(function(){
        if($('#js-centered-navigation-menu').is(':hidden')) {
          $('#js-centered-navigation-menu').removeAttr('style');
        }
      });
    });
});

$(document).ready(function () {
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

$(document).ready(function() {
  // var desiredHeight = $("body").height() - $("#top").height() - $("#bot").height() - $("#nav").height() - 2;
  $("#central").css("min-height", "100vh + 1300px" );
});

function goBack() {
    window.history.back()
}