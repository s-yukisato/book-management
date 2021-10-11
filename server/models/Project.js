const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
    _id: String,
    title: {
        type: String,
        required: true
    },
    document: Object,
    status: String,
    books: [],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    deadline: Date,
}, {
    timestamps: true
});

module.exports = model("Project", ProjectSchema);