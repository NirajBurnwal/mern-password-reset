const mongoose = require("mongoose")

const URI = process.env.DB


mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("Database connected")).catch((error) => console.log(error))