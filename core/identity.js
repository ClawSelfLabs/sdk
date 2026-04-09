const { v4: uuidv4 } = require("uuid");

const identities = [];

function createIdentity(username) {
  const newUser = {
    id: uuidv4(),
    username,
    createdAt: new Date(),
    ownership: true
  };

  identities.push(newUser);
  return newUser;
}

function findIdentity(id) {
  return identities.find(user => user.id === id);
}

module.exports = {
  createIdentity,
  findIdentity
};
