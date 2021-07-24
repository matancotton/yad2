const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const postRouter = require("./routers/postRouter");
const fileRouter = require("./routers/fileRouter");
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(postRouter);
app.use(fileRouter);

app.listen(port, () => {
    console.log("Server is running on port ", port);
});
