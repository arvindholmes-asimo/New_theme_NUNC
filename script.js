$(document).ready(function () {
  // banner carousel script
  $("#banner_carousel").slick({
    adaptiveHeight: false,
    variableWidth: false,
    centerPadding: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // if ($('.slick-slide').hasClass('slick-active')) {
  //   $('.caption').addClass('animated fadeInLeft');
  // } else {
  //   $('.caption').removeClass('animated fadeInLeft');
  // }

  // $("#banner_carousel").on("beforeChange", function () {

  //   $('.caption').removeClass('animated fadeInLeft').hide();
  //   $('.caption').addClass('animated fadeInLeft').show();

  // })

  let headingAnimate =
    "animate__animated animate__slideInUp animate__delay-0.1s";
  let tagLineAnimate =
    "animate__animated animate__slideInUp animate__delay-.4s";
  let readmoreAnimate =
    "animate__animated animate__slideInUp animate__delay-.6s";
  $("#banner_carousel").on("afterChange", function (e, slick, currentSlide) {
    console.log({ slick, currentSlide });
    $(".slick-slide .heading1").removeClass(headingAnimate);
    $(".slick-slide .tag-line").removeClass(tagLineAnimate);
    $(".slick-slide .read_more").removeClass(readmoreAnimate);
    $(".slick-current .heading1").addClass(headingAnimate);
    $(".slick-current .tag-line").addClass(tagLineAnimate);
    $(".slick-current .read_more").addClass(readmoreAnimate);
  });

  $("#banner_carousel").on("init", function (event, slick) {
    console.log("initialized");
    $(".slick-current .heading1").addClass(headingAnimate);
    $(".slick-current .tag-line").addClass(tagLineAnimate);
    $(".slick-current .read_more").addClass(readmoreAnimate);
    // event subscriber goes here
  });
  // client carousel script
  $("#client_carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: false,
    autoplaySpeed: 5000,
    arrows: true,
    // mobileFirst:true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //case_studies_carousel_script
  $("#case_studies_carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          dots: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 600,
        arrows: true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        arrows: true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// chatbot
const footerEl = document.querySelector(".footer-container");
const chatbot = document.querySelector(".chatbot");
const banner = document.querySelector(".hero-container");

function isInViewport(ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = window.innerHeight || document.documentElement.clientHeight;

  return (top > 0 || bottom > 0) && top < vHeight;
}

document.addEventListener("scroll", (event) => {
  const status = isInViewport(footerEl);
  console.log(status);
  if (status) {
    let pos = window.innerHeight - footerEl.getBoundingClientRect().y;
    console.log(
      footerEl.getBoundingClientRect().y -
        chatbot.getBoundingClientRect().height
    );
    chatbot.style.cssText = `top: ${
      footerEl.getBoundingClientRect().y -
      chatbot.getBoundingClientRect().height -
      10
    }px;transform:none;`;
  } else {
    chatbot.style.cssText = `top: ${
      banner.getBoundingClientRect().height - 100
    }px; transform: none;`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  chatbot.style.cssText = `top: ${
    banner.getBoundingClientRect().height - 100
  }px; transform: none;`;
});

let menu = document.getElementById("hamberger-menu");
let headerbar = document.querySelector(".headerbar");
menu.addEventListener("toggle", openNav);
// action
function openNav() {
  if (headerbar.style.display === "none") {
    headerbar.style.display = "inline-block";
    headerbar.style.transform = "translateY:65%";
  } else {
    headerbar.style.display = "none";
  }
}

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
