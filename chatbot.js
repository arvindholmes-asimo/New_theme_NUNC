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
