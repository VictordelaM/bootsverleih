import mongoose ,{ Schema } from "mongoose"


const bootModel = new Schema ({
    name: {
        type: String,
        required: true,
    },
    seats:{
        type: Number,
        required: true,
        min: 1,
    },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    hp:{
        type: Number,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true,
    }

})

export const Boot = mongoose.model('Boot', bootModel, 'boote')