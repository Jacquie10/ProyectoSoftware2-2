import {Schema, model, version} from "mongoose";

const evenSchema = new Schema({
    registro: {
        type: String,
        require: true,
        trim: true,
    },
    nombreEvento:
    {
        type: String,
    },
    organizacion:
    {
        type: String,
       
    },
    fechaEvento:
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

export default model('Even', evenSchema)