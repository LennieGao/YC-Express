const mongoose = require("mongoose");
let url = "mongodb://127.0.0.1:27017/yc";
mongoose.connect(url);


module.exports = {
    mongoose
}