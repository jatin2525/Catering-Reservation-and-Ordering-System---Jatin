const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    customerName: String,
    date: Date,
    time: String,
    guests: Number,
});

module.exports = mongoose.model('Reservation', reservationSchema);
