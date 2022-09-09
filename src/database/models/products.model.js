import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    thumbnail: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
    }
    
});

export default model('Product', productSchema);
