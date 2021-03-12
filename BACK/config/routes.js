//const authtoken = require('../config/authtoken');
//const authenticate  = require("./passport");
//const passport = require("./passport");

const auth = require('../config/auth')
const registeruser = require('./register')

module.exports = app => {
    //login e registro
    app.post('/register',registeruser)
    app.use('/login',auth);

    
  
}
