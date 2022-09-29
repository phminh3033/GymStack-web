import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

//Routes
import postRoutes from "./routes/posts.js";
import adminRoutes from "./routes/admins.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

//Can use middleware
app.use(bodyParser.json({ extended: true, limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

const PORT = process.env.PORT || 5000;

//HTTP request logger
app.use(morgan("combined"));

//Routes
app.use("/posts", postRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

//Connect to DB
mongoose
    .connect(process.env.URI_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((err) => console.log("err", err));
// mongoose.set("useFindAndModify", false);
