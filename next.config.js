require("dotenv").config();
module.exports = {
  publicRuntimeConfig: {
    ...process.env
  }
};
