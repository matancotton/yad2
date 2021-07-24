const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
    {
        address: {
            property: {
                type: String,
                default: "",
            },
            condition: {
                type: String,
                default: "",
            },
            city: {
                type: String,
                default: "",
            },
            street: {
                type: String,
                default: "",
            },
            houseNumber: {
                type: Number,
                default: 0,
            },
            floor: {
                type: Number,
            },
            maxFloor: {
                type: Number,
            },
            neighborhood: {
                type: String,
                default: "",
            },
            region: {
                type: String,
            },
        },
        about: {
            roomsNumber: {
                type: Number,
            },
            parking: {
                type: Number,
            },
            balcony: {
                type: Number,
            },
            features: [{ type: String }],
            textArea: {
                type: String,
            },
        },
        payment: {
            squareFeet: {
                type: Number,
            },
            totalFeet: {
                type: Number,
            },
            price: {
                type: Number,
            },
            date: {
                type: Date,
            },
        },
        files: [
            {
                type: String,
            },
        ],
        contact: {
            mainName: String,
            mainPhone: String,
            secondName: String,
            secondPhone: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
