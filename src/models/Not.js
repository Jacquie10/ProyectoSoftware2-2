import {Schema, model, version} from "mongoose";

const notSchema = new Schema({
    registro: {
        type: String,
        require: true,
        trim: true,
    },
    nombreNoticia:
    {
        type: String,
    },
    link:
    {
        type: String,
       
    },
    foto:
    {
        type: String, 
    },
    done:
    {
        type: Boolean,
        default: false,
    },
}, 
    {
        timestamps: true,
        versionKey: false
    })

export default model('Not', notSchema)