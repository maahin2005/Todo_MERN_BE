const createTodo = require("../Controllers/todos/createTodo");
const deleteTodo = require("../Controllers/todos/deleteTodo");
const getTodos = require("../Controllers/todos/getTodos");
const updateTodo = require("../Controllers/todos/updateTodo");
const auth = require("../Middlewares/auth");

const todoRoutes = require("express").Router();

todoRoutes.get("/",auth, getTodos);
todoRoutes.post("/create", auth, createTodo);
todoRoutes.patch("/update/:id", auth, updateTodo);
todoRoutes.delete("/delete/:id", auth, deleteTodo);

module.exports = todoRoutes;
