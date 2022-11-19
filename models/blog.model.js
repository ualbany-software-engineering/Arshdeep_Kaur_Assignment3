const mongoose = require("mongoose"),
passportLocalMongoose = require("passport-local-mongoose");
// var blogSchema =
module.exports = mongoose.model(
    "Blog",
    new mongoose.Schema({
        title: String,
        image: String,
        body: String,
        date: Date,
        author: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            username: { type: String, index: false },
        },
        likes: [
            {
                id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                username: { type: String, index: false },
            },
        ],
    }).plugin(passportLocalMongoose)
);
