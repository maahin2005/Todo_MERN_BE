const createTodo = require("../Controllers/todos/createTodo");
const getTodos = require("../Controllers/todos/getTodos");

const todoRoutes = require("express").Router();

todoRoutes.get("/", getTodos);
todoRoutes.post("/create", createTodo);

module.exports = todoRoutes;
