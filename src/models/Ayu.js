import {Schema, model, version} from "mongoose";

const ayuSchema = new Schema({
    contacto: {
        type: String,
      
        trim: true,
    },
    telefono:
    {
        type: String,
    },
    correo:
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

export default model('Ayu', ayuSchema)