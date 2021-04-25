import React from 'react';
import react, { useState, useEffect } from 'react';
//criar o content ou component global e passar valor inicial
export const UserContext = react.createContext({});


//criando formar de prover e os valores internos..
export const UserProvider = (props) =>{
    const [user,setuser] = useState({
       
    })
    useEffect(()=>{
        const userStorage = localStorage.getItem("user");
        if(userStorage){
            setuser(JSON.parse(userStorage))
            //se tiver logado e tiver dados no storage
        }
        else{
        }
    },[])

    //prover para toda operação e usando setuser para alteração..
    return (
        <UserContext.Provider value={{user,setuser}}>
            {props.children}
        </UserContext.Provider>
    )
}
//acima ja é funcional e necessita para importacao do componente no que sera usado

export const  useUser = () => react.useContext(UserContext)//AQUI CRIAR UM HOOKS PERSONALIZADO..
