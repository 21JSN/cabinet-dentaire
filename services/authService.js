// authService.js - Gestion de l'authentification

class AuthService {
    constructor() {
        this.users = JSON.parse(localStorage.getItem("users")) || [];
    }

    // Inscription d'un nouvel utilisateur
    register(user) {
        const exists = this.users.find(u => u.email === user.email);
        if (exists) {
            throw new Error("Un compte avec cet email existe déjà.");
        }
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        return user;
    }

    // Connexion d'un utilisateur
    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (!user) {
            throw new Error("Identifiants incorrects.");
        }
        localStorage.setItem("currentUser", JSON.stringify(user));
        return user;
    }

    // Déconnexion de l'utilisateur
    logout() {
        localStorage.removeItem("currentUser");
    }

    // Vérifier si l'utilisateur est connecté
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("currentUser"));
    }
}

// Exportation du service
const authService = new AuthService();
export default authService;
