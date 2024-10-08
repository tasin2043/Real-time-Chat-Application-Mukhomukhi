const mongoose = require("mongoose")
const color = require("colors")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log(`MongoDB is Connected on: ${conn.connection.host}`.bgYellow.bold)
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;