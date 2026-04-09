// Simulasi decentralized storage (IPFS / blockchain ready)

const storage = [];

function saveData(data) {
  storage.push(data);
  return true;
}

function getAllData() {
  return storage;
}

module.exports = {
  saveData,
  getAllData
};
