//arquivo fica entre o pedido e a resposta

const bodyParser = require('body-parser')//trasnforma o corpo em um objeto..
const cors = require('cors')//permite acessos por qual quer computador..

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
       
}