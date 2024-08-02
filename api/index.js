const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const port = 8000;
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

app.use("/", employeeRoutes);


mongoose.connect("mongodb+srv://abhishekomr07:abhi123@cluster0.4b6ewmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Server connected with database")
    })
    .catch((error) => {
        console.log("error connecting to mongodb", error);
    })


app.listen(port, () => {
    console.log("Server is running on port 8000")
})