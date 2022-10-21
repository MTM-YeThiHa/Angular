import mongoose, { Schema, model } from "mongoose";

const passwordResetSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    token: {
        type: String,
        required: true
    },
},

{
    timestamps: true
}
);

export default model("PasswordReset", passwordResetSchema)