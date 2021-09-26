const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
    _id: String,
    title: {
        type: String,
        required: true
    },
    document: Object,
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

module.exports = model("Project", ProjectSchema);