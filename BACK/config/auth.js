const authSecret = 'senhaqualquer'
const jwt = require('jwt-simple')
const bcrypt = require('bcryptjs')
const usermodel = require('./mongodb')



//criar primeiro token..
const loginuser = async (req, res) => {
    const email = req.body.username;
    const password = req.body.password;
   
    
    if (!email || !password) {
        return res.status(400).json({menssage:'Informar os dados necessarios!'})
    }
    //verificar documento por email..
    const user = await usermodel
    .findOne({email:email})

    if (!user) return res.status(400).json({menssage:'Usuário não encontrado!'})
    //se usuario nao existir

    //verificar senha
    const comparepasswordbank = bcrypt.compareSync(req.body.password, user.password)
    if (!comparepasswordbank) return res.status(400).json({menssage:'Email/Senha inválidos!'})//comparar a senha


    //retornar dados do banco de dados...
    const payload = {
        name: user.name,
        email: user.email,
        city: user.city,
        login: user.login
    } //usado para autheticar no futuro..

    res.json({  ...payload,
      token: jwt.encode(payload, authSecret)//envia os dados basicos da aplicação e gera um token.
    })
}



module.exports =  loginuser