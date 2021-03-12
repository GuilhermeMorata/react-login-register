const bcryptjs = require('bcryptjs');
const bankda = require('./mongodb');
let criar = false

//encryptar a senha
const encryptPassword = password => {
    const salt = bcryptjs.genSaltSync(10)
    return bcryptjs.hashSync(password, salt)
}


//validar se os dados nao tem erros.
const validadedate = (valor,msg,numb=30)=>{
    if(!valor){
        console.log(msg)
        throw res.status(400).send({msg}) 
    }
    if(valor.length <= 6){
        console.log(msg)
        throw res.status(400).send({msg});  
    }
    if(valor.length >= numb){
        console.log(msg)
        throw res.status(400).send({msg})  
    }
    else{
        null
    }
}


const registeruser = async (req, res) => {
    const newuser = { ...req.body };
    const email = newuser.email;

   
    //testando se tem algum erro no usuario
    try {
        validadedate(newuser.password,'senha invalido')
        validadedate(newuser.name,'nome invalido')
        validadedate(newuser.login,'login invalido')
        validadedate(newuser.city,'cidade invalida')
    }catch{
        return res.json({msg:'fracasso'})
    }
    //se vir um requerimento vazio..
    if(newuser == null){
        return res.send('resposta vazia..')
    }
    //verficar se existe uma conta no banco..
    await bankda.findOne({email}, (err, newuser) => {
        //se tem error ou usario ja existe..
        if (err || newuser) {
            return res.send({menssage:'usuario existe'}), criar= false
        }
        else{
            return criar = true
        };
    })

    //codificando a senha do usuario...
    const cryptpassword = encryptPassword(newuser.password)
    newuser.password = cryptpassword;

    if(criar==true){
    let saveuser =  new bankda({
        login: newuser.login,
        password: newuser.password,
        name: newuser.name,
        email: newuser.email,
        city: newuser.city,

    })
    saveuser.save()
        .then(()=>{return res.json({menssage:'sucesso'})})
        .catch((err) => {res.json({menssage:err})})

    }
    else{
        return res.json({menssage:'algo deu errado'})
    }
}

module.exports =  registeruser

