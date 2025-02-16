document.addEventListener("DOMContentLoaded", function () {
    const routes = {
        accueil: "accueil.html",
        services: "services.html",
        equipe: "equipe.html",
        rendezVous: "rendez_vous.html",
        confirmation: "confirmation.html"
    };

    function navigateTo(page) {
        if (routes[page]) {
            history.pushState({}, "", routes[page]);
            loadPage(routes[page]);
        } else {
            console.error("Page non trouvée :", page);
        }
    }

    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
                attachEventListeners();
            })
            .catch(error => console.error("Erreur de chargement :", error));
    }

    function attachEventListeners() {
        document.querySelectorAll("[data-route]").forEach(button => {
            button.addEventListener("click", function () {
                navigateTo(this.getAttribute("data-route"));
            });
        });

        const appointmentForm = document.getElementById("appointmentForm");
        if (appointmentForm) {
            appointmentForm.addEventListener("submit", function (event) {
                event.preventDefault();
                
                const formData = {
                    prenom: document.getElementById("prenom").value,
                    nom: document.getElementById("nom").value,
                    email: document.getElementById("email").value,
                    telephone: document.getElementById("telephone").value,
                    date: document.getElementById("date").value,
                    heure: document.getElementById("heure").value,
                    dentiste: document.getElementById("dentiste").value,
                    raison: document.getElementById("raison").value
                };

                if (Object.values(formData).some(value => !value.trim())) {
                    alert("Veuillez remplir tous les champs avant de confirmer votre rendez-vous.");
                    return;
                }

                localStorage.setItem("appointmentData", JSON.stringify(formData));
                navigateTo("confirmation");
            });
        }
    }

    attachEventListeners();
    console.log("Système de routage dynamique chargé !");
});
