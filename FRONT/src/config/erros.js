import { string } from "prop-types"

function errortest(valor,msg){
    if(typeof(valor) != string){
        return(console.log(msg))
    }
    if(valor === null){
        return(console.log(msg))
    }
    if(valor.legth === 0){
        return(console.log(msg))
    }
    else{
    }
}

export default errortest