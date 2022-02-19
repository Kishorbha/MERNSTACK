const mongoose = require("mongoose")

const DB = "AddYour"
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("App Started"))
  .catch((error) => console.log(error.message))
