const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;