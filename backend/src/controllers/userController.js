const userService = require('../service/userService');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await userService.login(email, password);
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
