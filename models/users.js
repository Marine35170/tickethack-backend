const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    mail: String,
    password: String,
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'trips'}],
    booking: [{ type: mongoose.Schema.Types.ObjectId, ref: 'trips'}]
})

const User = mongoose.model('users',userSchema);

module.exports = User; 