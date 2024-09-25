const mongoose = require("mongoose");
const connectionString = "mongodb+srv://admin:7CRjHgN1pT6U4kBD@cluster0.8msvs.mongodb.net/ticketHack";

mongoose.connect(connectionString, { connectTimeoutMS: 2000})
  .then(() => console.log("Database connected"))
  .catch(error => console.error(error));

  