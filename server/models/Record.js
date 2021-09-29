const { Schema, model } = require('mongoose');

const RecordSchema = new Schema({
    memo: String,
    status: String,
    rating: {
        type: Number,
        default: 3
    },
    progress: String,
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true,
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