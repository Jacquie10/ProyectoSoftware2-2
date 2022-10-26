import {Schema, model, version} from "mongoose";

const charSchema = new Schema({
    registro: {
        type: String,
        require: true,
        trim: true,
    },
    nombreCharla:
    {
        type: String,
    },
    expositor:
    {
        type: String,
       
    },
    fechaCharla:
    {
        type: String,
    }, 
    link:
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

export default model('Char', charSchema)