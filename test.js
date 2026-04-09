const { createIdentity } = require("../src/core/identity");

const testUser = createIdentity("tester");

console.log("✅ Test User Created:", testUser);
