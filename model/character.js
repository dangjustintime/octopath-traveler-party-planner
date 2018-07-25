// dependencies
const mongoose = require('mongoose');

// database schema
const characterSchema = new mongoose.Schema({
    name: String,
    primary_class: String,
    secondary_class: String,
    level: Number,
    max_hp: Number,
    max_sp: Number,
    phys_atk: Number,
    phys_def: Number,
    elem_atk: Number,
    elem_def: Number,
    accuracy: Number,
    speed: Number,
    critical: Number,
    evasion: Number
});

// mongoose model
const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
