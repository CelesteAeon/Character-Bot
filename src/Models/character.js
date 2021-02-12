const mongoose = require(`mongoose`);

const characterSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    lastname: String,
    description: String,
    bio: String,
    personality: String,
    size: String,
    gender: String,
    picture: String,
    thumb: String

})

module.exports = mongoose.model("Character", characterSchema);