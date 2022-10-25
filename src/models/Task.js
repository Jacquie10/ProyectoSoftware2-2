import {Schema, model, version} from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    description:
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

export default model('Task', taskSchema)