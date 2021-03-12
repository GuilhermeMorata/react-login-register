
const authSecret = 'blackcat'


//validar o token na tela inicial...
const validateToken = async (req, res) => {
    console.log(req)
    const userData = req.body.passtoken || null
    try {
        if(userData) {
            const token = jwt.decode(userData.token, authSecret)
            if(new Date(token.exp * 1000) > new Date()) {
                return res.send(true)
            }
        }
    } catch(e) {
        // problema com o token
    }
    res.status(false)
}

module.exports =  validateToken