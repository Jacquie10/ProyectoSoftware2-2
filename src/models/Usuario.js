import {Schema, model, version} from "mongoose";

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    email:
    {
        type: String,
        require: true   
    },
    password:
    {
        type: String,
        require: true   
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

export default model('Usuario', usuarioSchema)