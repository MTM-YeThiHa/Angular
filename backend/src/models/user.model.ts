import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema ({
    fullName: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    created_user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    updated_user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    deleted_user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    deleted_at: {
        type: Date
    },
    
},
{
    timestamps: true
}
);

export default model("User", userSchema);