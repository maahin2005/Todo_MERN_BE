const TodoModel = require("../../Model/todo");

const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await TodoModel.findByIdAndUpdate(id, req.body);

    res.status(201).json({ msg: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = updateTodo;
