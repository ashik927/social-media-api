const mongoose = require('mongoose');

const STATUS_ACTIVE = 1
const STATUS_INACTIVE = 0

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { 
        type: Number,
        enum: [STATUS_ACTIVE, STATUS_INACTIVE], 
        required: true, 
        default: STATUS_ACTIVE 
    },
    tax: {type: mongoose.Schema.Types.Mixed, require: false, default: null},
    createdAt: { type: Date, required: false, default: Date.now().toString() },
    updatedAt: { type: Date, required: false },
    client_id: { type: Number, required: true},

});

const category = new mongoose.model("category", categorySchema);

module.exports = category;
