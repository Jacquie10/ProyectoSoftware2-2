import {Schema, model, version} from "mongoose";

const repoSchema = new Schema({
    registro: {
        type: String,
        require: true,
        trim: true,
    },
    nombreVoluntariado:
    {
        type: String,
        require: true   
    },
    organizacion:
    {
        type: String,
       
    },
    descripcion:
    {
        type: String,
        require: true   
    },
    linkEvento:
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

export default model('Vol', repoSchema)