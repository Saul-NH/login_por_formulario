import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const messagesSchema = new Schema({
    author: {
        type: Object,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export default model('Messages', messagesSchema);
