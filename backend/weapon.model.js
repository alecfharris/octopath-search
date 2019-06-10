const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Weapon = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    phys_atk: {
        type: Number
    },
    ele_atk: {
        type: Number
    },
    misc_1: {
        type: Object
    },
    misc_2: {
        type: String
    },
    shops: {
        type: Array
    },
    obtained: {
        type: Array
    }
});
module.exports = mongoose.model('Weapon', Weapon);