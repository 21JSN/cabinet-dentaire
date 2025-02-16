document.addEventListener("DOMContentLoaded", function () {
    console.log("La page des services est chargée.");

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            alert(`Vous avez sélectionné le service: ${this.querySelector(".card-title").textContent}`);
        });
    });
});
