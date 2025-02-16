document.addEventListener("DOMContentLoaded", function () {
    console.log("Page d'accueil chargée");

    // Animation de la navbar au scroll
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("shadow");
        } else {
            navbar.classList.remove("shadow");
        }
    });

    // Dynamiser le texte d'accueil
    document.getElementById("intro-text").textContent = "Bienvenue au Cabinet Dentaire de Jordan ! Offrez à votre sourire des soins professionnels adaptés à toute la famille.";

    // Charger dynamiquement les témoignages
    const testimonialsData = [
        { name: "Sophie D.", text: "Un service exceptionnel ! Mon sourire n’a jamais été aussi éclatant." },
        { name: "Marc R.", text: "Une équipe professionnelle et à l’écoute. Je recommande vivement !" },
        { name: "Julie T.", text: "Merci pour votre accueil chaleureux et vos soins de qualité." }
    ];

    let testimonialContainer = document.getElementById("testimonials");
    testimonialsData.forEach(t => {
        let div = document.createElement("div");
        div.classList.add("col-md-4", "testimonial");
        div.innerHTML = `<p>"${t.text}" - <strong>${t.name}</strong></p>`;
        testimonialContainer.appendChild(div);
    });

    // Initialisation de la carte Mapbox
    try {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamEyOSIsImEiOiJjbHg5aW5sZ2sycDEyMnJxMWExYmdtdGh0In0.nlTDcinWQly9hWoZzwCzig';
        if (!mapboxgl.accessToken) {
            throw new Error("Token Mapbox invalide ou manquant.");
        }

        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v12",
            center: [-75.6972, 45.4215], // Coordonnées d'Ottawa
            zoom: 14
        });

        new mapboxgl.Marker()
            .setLngLat([-75.6972, 45.4215])
            .setPopup(new mapboxgl.Popup().setHTML("<h6>Cabinet Dentaire de Jordan</h6><p>29 rue Rideau, Ottawa, ON K1N 4M5</p>"))
            .addTo(map);

        console.log("Carte Mapbox chargée avec succès.");
    } catch (error) {
        console.error("Erreur de chargement de la carte :", error);
        document.getElementById("map").innerHTML = "<p class='text-danger'>Impossible de charger la carte.</p>";
    }
});
