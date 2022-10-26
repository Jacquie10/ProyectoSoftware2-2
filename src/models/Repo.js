import {Schema, model, version} from "mongoose";

const repoSchema = new Schema({
    titulo: {
        type: String,
        require: true,
        trim: true,
    },
    registro:
    {
        type: String,
        require: true   
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

export default model('Repo', repoSchema)