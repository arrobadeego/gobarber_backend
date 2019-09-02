const Appointment = require('../models/Appointment');

class AppointmentController {
    async store(req, res) {
        return res.json();
    }
}

module.exports = new AppointmentController();
