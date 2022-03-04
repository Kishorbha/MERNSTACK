const mongoose = require("mongoose")

const DB =
  // Add your connection

  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("App Started"))
    .catch((error) => console.log(error.message))
