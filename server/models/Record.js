const { Schema, model } = require('mongoose');

const RecordSchema = new Schema({
    memo: String,
    status: String,
    rating: {
        type: Number,
        default: 3
    },
    progress: Number,
    book: {
        isbn: String,
        title: String,
        image: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: Date,
}, {
    timestamps: true
});

module.exports = model("Record", RecordSchema);