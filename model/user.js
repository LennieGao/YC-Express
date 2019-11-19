const mongoose = require("mongoose");
let url = "mongodb://127.0.0.1:27017/yc";
mongoose.connect(url);


module.exports = {
    mongoose
}
const userFind = (userInfo, cb) => {

    User.findOne(userInfo).then(result => {

        cb(result)
    })
}

const userSave = (userInfo, cb) => {
    const user = new User(userInfo);
    user.save().then(result => {
        console.log(result)
        cb(result)
    })
}

module.exports = {
    userFind,
    userSave
}