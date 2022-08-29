import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

//Routes
import postRoutes from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 5000;

const URI_CONNECT =
    "mongodb+srv://admin:yhwvrMawwdQQzJWp@cluster0.rkkex.mongodb.net/?retryWrites=true&w=majority/gymStack";
//pass yhwvrMawwdQQzJWp

//Can use middleware
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

//HTTP request logger
app.use(morgan("combined"));

//Routes
app.use("/posts", postRoutes);

//Connect to DB
mongoose
    .connect(URI_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("err", err);
    });
