const createTodo = require("../Controllers/todos/createTodo");
const deleteTodo = require("../Controllers/todos/deleteTodo");
const getTodos = require("../Controllers/todos/getTodos");
const updateTodo = require("../Controllers/todos/updateTodo");
const auth = require("../Middlewares/auth");
const verifyUser = require("../Middlewares/verifyUser");

const todoRoutes = require("express").Router();

todoRoutes.get("/", auth, getTodos);
todoRoutes.post("/create", auth, createTodo);
todoRoutes.patch("/update/:id", auth, verifyUser, updateTodo);
todoRoutes.delete("/delete/:id", auth, verifyUser, deleteTodo);

module.exports = todoRoutes;
