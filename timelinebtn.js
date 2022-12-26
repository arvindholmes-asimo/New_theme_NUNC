const btnTarget = document.querySelector("#what_we_offer .grid-item:last-child");
const findOutMoreTemplate = `<button class="more-btn">Find out more</button>`;
btnTarget.insertAdjacentHTML("afterbegin", findOutMoreTemplate);