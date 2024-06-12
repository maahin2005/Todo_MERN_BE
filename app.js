const express = require("express");
require("dotenv").config();
const connection = require("./config/db");
const userRoutes = require("./Routers/users");
const todoRoutes = require("./Routers/todos");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

app.get("/", (_, res) => {
  res.json({ response: "Get Route successfully created" });
});

app.listen(PORT, async () => {
  try {
    await connection(process.env.MONGODB_URI);

    console.log(`Server is listening on ${PORT} and DB is connected`);
  } catch (error) {
    console.log(error);
  }
});
