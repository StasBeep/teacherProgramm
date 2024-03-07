let card = document.querySelector(".card");

let cards = document.querySelector(".car-speeds").children;

console.log(card);

cards[0].addEventListener(('click'), () => {
    card.style.display = "block";
})