const { Schema, model } = require('mongoose');

const LogSchema = new Schema({
    comment: String,
    evaluation: {
        type: Number,
        default: 3,
        min: [0, "Log cannot have a negative evaluation"],
        max: 5
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

module.exports = model("Log", LogSchema);