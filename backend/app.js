const express = require("express");
const userRouter = require("./routes/usersRouter");
const connectDB = require("./utils/connectDB");
const errorHandler = require("./middlewares/errorHandler");
const categoryRouter = require("./routes/categoryRoute");
const transactionRouter = require("./routes/transactionRoute");

const app = express();

//! Middlewares
app.use(express.json()) //Pass incoming json data

//! Routes
app.use("/", userRouter)
app.use("/", categoryRouter)
app.use("/", transactionRouter)

//! Error
app.use(errorHandler)



//! Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server running on the port... ${PORT}`));
