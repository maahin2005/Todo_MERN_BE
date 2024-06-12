const TodoModel = require("../../Model/todo");

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await TodoModel.findByIdAndDelete(id);

    res.status(203).json({ msg: "Todo deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteTodo;
