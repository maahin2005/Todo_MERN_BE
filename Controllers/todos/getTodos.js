const TodoModel = require("../../Model/todo");

const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();

    res.status(200).json({ data: todos });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = getTodos;
