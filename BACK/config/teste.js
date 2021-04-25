const bankda = require('./mongodb');

function teste1(valor){
    const user = bankda.findOne(valor)
    if(user){
        user.update
    }
}