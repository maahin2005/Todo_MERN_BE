const TodoModel = require("../../Model/todo");

const getTodos = async (req, res) => {
  let isRole = {};
  const { userId } = req.body;

  try {
    if (req.body.role === "Admin") {
      isRole = {};
    } else {
      isRole = { userId: userId };
    }

    const todos = await TodoModel.find(isRole);

    res.status(200).json({ data: todos });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = getTodos;
