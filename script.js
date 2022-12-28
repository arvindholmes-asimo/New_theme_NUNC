$(document).ready(function () {

  // banner carousel script
  $('#banner_carousel').slick({
    adaptiveHeight: false,
    variableWidth: false,
    centerPadding: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ],
  });

  if ($('.slick-slide').hasClass('slick-active')) {
    $('.caption').addClass('animated fadeInLeft');
  } else {
    $('.caption').removeClass('animated fadeInLeft');
  }

  $("#banner_carousel").on("beforeChange", function () {

    $('.caption').removeClass('animated fadeInLeft').hide();
      $('.caption').addClass('animated fadeInLeft').show();


  })

  // client carousel script
  $('#client_carousel').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 1000
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 1000
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      }

    ],
  });

  //case_studies_carousel_script
  $('#case_studies_carousel').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 1000
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 1000
        }
      },
      {
        breakpoint: 600,
        arrows: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        arrows: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ],
  });
})

