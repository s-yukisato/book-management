const { Schema, model } = require('mongoose');

const RecordSchema = new Schema({
    memo: String,
    status: String,
    rating: {
        type: Number,
        default: 3
    },
    page: Number,
    book: {
        isbn: String,
        title: String,
        pages: {
            type: Number,
            default: 300,
        },
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