$(function () {
    /* Changge header navigation on scroll function */
    $(document).scroll(function () {
        var $nav = $("header");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    /* End */
    /* Back to top function */
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    /* end */
      $( ".flip-card-back:even" ).css( "background-color", "#26A65B" );
      $( ".flip-card-back:odd" ).css( "background-color", "#F37021" );
  });

  $(document).ready(function(){
    $('.my-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true
    });
  });
