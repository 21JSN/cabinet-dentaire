document.addEventListener("DOMContentLoaded", function () {
    const appointmentForm = document.getElementById("appointmentForm");

    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Empêche la soumission normale du formulaire

            // Récupération des valeurs du formulaire
            const prenom = document.getElementById("prenom").value;
            const nom = document.getElementById("nom").value;
            const email = document.getElementById("email").value;
            const telephone = document.getElementById("telephone").value;
            const date = document.getElementById("date").value;
            const heure = document.getElementById("heure").value;
            const dentiste = document.getElementById("dentiste").value;
            const raison = document.getElementById("raison").value;

            // Vérification des champs obligatoires
            if (!prenom || !nom || !email || !telephone || !date || !heure || !dentiste || !raison) {
                alert("Veuillez remplir tous les champs avant de confirmer votre rendez-vous.");
                return;
            }

            // Stocker les valeurs dans le localStorage pour les récupérer sur la page confirmation.html
            localStorage.setItem("prenom", prenom);
            localStorage.setItem("nom", nom);
            localStorage.setItem("email", email);
            localStorage.setItem("telephone", telephone);
            localStorage.setItem("date", date);
            localStorage.setItem("heure", heure);
            localStorage.setItem("dentiste", dentiste);
            localStorage.setItem("raison", raison);

            // Vérifier si confirmation.html est bien au même niveau ou dans un dossier
            let confirmationPath = "confirmation.html"; // Modifier selon l'emplacement du fichier
            if (window.location.pathname.includes("rendez_vous")) {
                confirmationPath = "../confirmation.html";
            }

            // Rediriger vers la page de confirmation
            window.location.href = confirmationPath;
        });
    } else {
        console.error("Le formulaire de rendez-vous n'a pas été trouvé !");
    }
});
