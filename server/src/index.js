import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

//Routes
import postRoutes from "./routes/posts.js";

const app = express();

//Can use middleware
app.use(bodyParser.json({ extended: true, limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

const URI_CONNECT =
    "mongodb+srv://admin:yhwvrMawwdQQzJWp@cluster0.rkkex.mongodb.net/gymStack?retryWrites=true&w=majority"; //pass yhwvrMawwdQQzJWp
const PORT = process.env.PORT || 5000;

//HTTP request logger
app.use(morgan("combined"));

//Routes
app.use("/posts", postRoutes);

//Connect to DB
mongoose
    .connect(URI_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((err) => console.log("err", err));
// mongoose.set("useFindAndModify", false);
