//cria um servidor...(api)
const express = require('express')
const app = express()

//importando caminho e connectado ao banco
const mongoose = require('./config/mongodb')
app.mongoose = mongoose

//organizar o arquivos com o consign
const consign = require('consign')

consign()//aqui fica o criador de caminhos ate todas as dependencias..
    .include('./config/middlewares.js')
    .then('./config/passport.js')
    .then('./config/routes.js')
    .into(app)


//funcoes globais 
//app.use((req,res,next)=>{
//    res.locals.user = req.user || null;
//    next()
//})


//porta de escuta do API
const PORT = 4000
app.listen(PORT,()=>{
    console.log('server on...')
})

