import {Schema, model, version} from "mongoose";

const contSchema = new Schema({
    registro: {
        type: String,
        require: true,
        trim: true,
    },
    distrito:
    {
        type: String,
    },
    ubicacion:
    {
        type: String,
       
    },
    descripcion:
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

export default model('Cont', contSchema)