import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";
import { Storage } from "../interfaces/storage";

const StorageSchema = new Schema<Storage>(
    {
        fileName: {
            type: String,
            required: true,
        },
        idUser: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const StorageModel = model("storage", StorageSchema);
export default StorageModel;