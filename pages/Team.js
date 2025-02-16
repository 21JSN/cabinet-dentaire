document.addEventListener("DOMContentLoaded", function () {
    console.log("Teams.js chargé avec succès !");

    // Gestion du bouton retour à l'accueil
    const backToHomeButton = document.getElementById("backToHome");
    if (backToHomeButton) {
        backToHomeButton.addEventListener("click", function () {
            window.location.href = "accueil.html";
        });
    }

    // Effet interactif sur les descriptions des membres
    const teamCards = document.querySelectorAll(".team-card");

    teamCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            card.classList.add("highlight");
        });

        card.addEventListener("mouseout", function () {
            card.classList.remove("highlight");
        });
    });

    console.log("Interactions activées sur les membres de l'équipe.");
});
