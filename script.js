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


// find more button 
const btnTarget = document.querySelector("#what_we_offer .grid-item:last-child");
const findOutMoreTemplate = `<button class="more-btn">Find out more</button>`;
btnTarget.insertAdjacentHTML("afterbegin", findOutMoreTemplate);


// chatbot 
const footerEl = document.querySelector('.footer-container');
const chatbot = document.querySelector('.chatbot');
const banner = document.querySelector('#banner_carousel');

function isInViewport(ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);

  return (
    (top > 0 || bottom > 0) &&
    top < vHeight
  );
}

document.addEventListener("scroll", (event) => {
  const status = isInViewport(footerEl);
  console.log(status);
  if (status) {
    let pos = window.innerHeight - footerEl.getBoundingClientRect().y;
    console.log(footerEl.getBoundingClientRect().y - chatbot.getBoundingClientRect().height)
    chatbot.style.cssText = `top: ${footerEl.getBoundingClientRect().y - chatbot.getBoundingClientRect().height - 10}px;transform:none;`;
  }
  else {
    chatbot.style.cssText = `top: ${banner.getBoundingClientRect().height - 80}px; transform: none;`;
  }

})


document.addEventListener("DOMContentLoaded", () => {
  chatbot.style.cssText = `top: ${banner.getBoundingClientRect().height - 80}px; transform: none;`;
});
