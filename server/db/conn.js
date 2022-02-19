const mongoose = require("mongoose")

const DB =
  "mongodb+srv://kishor:kishorbha@cluster0.wblx5.mongodb.net/MERNAPP?retryWrites=true&w=majority"

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("App Started"))
  .catch((error) => console.log(error.message))
