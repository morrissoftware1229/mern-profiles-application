const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-profiles-application",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

//Why am I able to use the const Profile twice?
const Profile = require("./models/Profile");

app.get('/profiles', async(req, res) => {
    const profiles = await Profile.find();

    res.json(profiles);
});

app.listen(3001, () => console.log("Server started on port 3001"));