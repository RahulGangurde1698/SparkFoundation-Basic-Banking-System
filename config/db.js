const mongoose = require('mongoose');

const URI= 'mongodb+srv://Products:Pass12345@cluster0.m81duvk.mongodb.net/SparkBank?retryWrites=true&w=majority';


const mongo = () => {
    mongoose.connect(URI,{
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(() => {
        console.log("Connection Sucessfull ...");
    }).catch((err) => {
        console.log(err);
    });
}
module.exports = mongo;