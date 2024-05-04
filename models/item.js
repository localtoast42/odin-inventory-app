const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("Item", ItemSchema);