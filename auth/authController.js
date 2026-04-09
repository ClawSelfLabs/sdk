const { createIdentity, findIdentity } = require("../core/identity");

exports.registerUser = (req, res) => {
  const { username } = req.body;

  const user = createIdentity(username);
  res.json({ success: true, user });
};

exports.getUser = (req, res) => {
  const user = findIdentity(req.params.id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
};
