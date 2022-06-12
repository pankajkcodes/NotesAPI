const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const env = require('dotenv');
env.config();


const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json())
app.use((req,res,next)=>{
console.log("HTTP METHOD - "+ req.method+" URL - "+req.url);
    next();
});

app.use("/users", userRouter);
app.use("/notes", noteRouter);



mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server Running on port ${PORT} !`))
        app.get("/", (req, res) => {
            const response = { message: "API Works Fine !" };
            res.json(response);
        });


    }).catch((error) => {
        console.log(error);
    });




