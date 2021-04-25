//criar o banco de dado e connectar
const mongoose = require('mongoose')

//verificar o significado disso..
mongoose.Promise = global.Promise;

//connecatando com o banco/ connecta por url / depois o nome do banco
mongoose.connect('mongodb://localhost/tudo', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    console.log('conectado ao banco!!')
  })
  .catch((err)=>{
    console.log('nao foi possivel connectar: '+err)
  })
//comando para ligar o banco
db = mongoose.connection;

//=====================================================================================================================//

//esquemas do banco de dado..

const usuariosShema = mongoose.Schema({
  login:{
    type:String,
    require:true,
    unique:true,
  },
  name:{
    type: String,
    require:true,
  },
  password:{
    type: String,
    require: true,
  },
  email:{
    type: String,
    require: true,
    unique: true
  },
  products:{
    type: Array,
    require: false,
  },
  employees:{
    type: Array,
    require: false,
  },
  note:{
    type:Array,
    require:false,
  },
  box:{
    type:Array,
    require:false,
  },
  admin:{
    type:Boolean,
    default:true,
  },
  city:{
    type:String,
    require:true,
  },
  date:{
    type:Date,
    default:Date.now()

  }
  
})

module.exports = mongoose.model('usuarios',usuariosShema)//importando o connect do banco..
