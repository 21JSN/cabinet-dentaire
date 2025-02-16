// appointmentService.js - Gestion des rendez-vous

class AppointmentService {
    constructor() {
        this.appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    }

    // Ajouter un nouveau rendez-vous
    addAppointment(appointment) {
        this.appointments.push(appointment);
        localStorage.setItem("appointments", JSON.stringify(this.appointments));
        return appointment;
    }

    // Récupérer tous les rendez-vous
    getAppointments() {
        return this.appointments;
    }

    // Récupérer un rendez-vous par email
    getAppointmentByEmail(email) {
        return this.appointments.find(app => app.email === email);
    }

    // Vérifier la disponibilité du dentiste
    isDentistAvailable(dentist, date, heure) {
        return !this.appointments.some(app => app.dentiste === dentist && app.date === date && app.heure === heure);
    }
}

// Exportation du service
const appointmentService = new AppointmentService();
export default appointmentService;
