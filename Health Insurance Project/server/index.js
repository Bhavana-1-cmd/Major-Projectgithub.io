const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

const userRouter = require('./routes/auth.js');
const insuranceRouter = require('./routes/insurance.js');

const app = express();
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is Hospital Insurance Backend");
});

app.use("/users",userRouter)
// app.use("/insurance",insuranceRouter)

const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0.ujn0nlf.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology: true}).then(
    app.listen(PORT, () => {
        console.log(`Connected on port ${PORT}`)
        console.log("Database Connected ")
    })
    
).catch(
    (err) => {
        console.log(err)
    }
)