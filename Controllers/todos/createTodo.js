const TodoModel = require("../../Model/todo");

const createTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel(req.body);

    await newTodo.save();

    res.status(201).json({ msg: "todo saved successfully", newTodo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = createTodo;
