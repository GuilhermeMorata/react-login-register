// Load User model
const authsecret = 'blackcat'
const passport = require('passport')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt


//validar todas as requisicões 
module.exports = app => {
    const params = {
        secretOrKey: authsecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }
    //busca o id baseado no token...    
    const strategy = new Strategy(params, (payload, done) => {
        app.db('usuarios')//banco de dados dos usuarios...
            .where({ id: payload.id })
            .first()
            .then(user => done(null, user ? { ...payload } : false))
            .catch(err => done(err, false))
    })

    passport.use(strategy)

    return {
        //inicialize.
        authenticate: () => passport.authenticate('jwt', { session: false })//colocar o secret

    }
}

