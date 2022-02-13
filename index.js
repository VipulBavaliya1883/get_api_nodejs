var express = require('express')
var mongoose = require('mongoose')
const port = process.env.PORT || 3338;
mongoose.connect('mongodb+srv://VipulBavaliya1883:Vipul2000@cluster0.nv6gn.mongodb.net/movies?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('DB Connected');

    var app = express();
    app.listen(port, () => {
        console.log("Server Started 3000")
    })
}).catch((e) => {
    console.log("DB Not Connected")
})