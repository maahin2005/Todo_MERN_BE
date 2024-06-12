const createTodo = require("../Controllers/todos/createTodo");
const deleteTodo = require("../Controllers/todos/deleteTodo");
const getTodos = require("../Controllers/todos/getTodos");
const updateTodo = require("../Controllers/todos/updateTodo");

const todoRoutes = require("express").Router();

todoRoutes.get("/", getTodos);
todoRoutes.post("/create", createTodo);
todoRoutes.patch("/update/:id", updateTodo);
todoRoutes.delete("/delete/:id", deleteTodo);

module.exports = todoRoutes;
