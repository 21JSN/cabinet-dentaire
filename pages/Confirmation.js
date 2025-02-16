document.addEventListener("DOMContentLoaded", function () {
    // Vérifier si des données existent dans le localStorage
    const prenom = localStorage.getItem("prenom");
    const nom = localStorage.getItem("nom");
    const email = localStorage.getItem("email");
    const telephone = localStorage.getItem("telephone");
    const date = localStorage.getItem("date");
    const heure = localStorage.getItem("heure");
    const dentiste = localStorage.getItem("dentiste");
    const raison = localStorage.getItem("raison");

    if (prenom && nom && email && telephone && date && heure && dentiste && raison) {
        document.getElementById("client-name").textContent = prenom + " " + nom;
        document.getElementById("nom").textContent = nom;
        document.getElementById("email").textContent = email;
        document.getElementById("telephone").textContent = telephone;
        document.getElementById("date").textContent = date;
        document.getElementById("heure").textContent = heure;
        document.getElementById("dentiste").textContent = dentiste;
        document.getElementById("raison").textContent = raison;
    } else {
        document.getElementById("confirmation-details").innerHTML = "<p class='text-danger'>Erreur : Impossible de récupérer les détails du rendez-vous.</p>";
    }
});
