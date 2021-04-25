import "./register.css";
import axios from 'axios';
import{useState} from 'react';


function Register() {

//arrumar as strings antes de fazer o registro.

const registeruser = (req)=>{
    axios({
        method: 'post',
        url: "http://localhost:4000/register",
        data: req,
        })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((response)=>{
        console.log(response)
    })
}

    
//local onde estao os stats...
const [user, setUser] = useState({
    name:'',
    login:'',
    email:'',
    password:'',
    city:'',

})


function handleChange(e) {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
    if(e.target.id === 'email'){
        let stl = document.getElementById(e.target.id)
        stl.setAttribute("style","color:blue")
    }

    else if(value.length <= 3 || value.length >= 25){
        let stl = document.getElementById(e.target.id)
        stl.setAttribute("style","color:red")
    }

    else{
        let stl = document.getElementById(e.target.id)
        stl.setAttribute("style","color:green")
    }
    
}

function handleSubmit(e) {
    e.preventDefault();
    registeruser(user)
}
    
//setar os patterns nos inputs...
return(
<div> 
    <div className="registerbody">
        <form className='registerform' onSubmit={handleSubmit}>
            <span>Register </span>
            <fieldset className='mfieldset'>
                <label>Nome da Empresa:</label>
                <input type="text" id='name' placeholder='Full Name' name='name' required={true} value={user.name} onChange={handleChange}></input><br></br>
                <label>Login:</label>
                <input type="text"id='login' placeholder='User' name='login' required={true} value={user.login} onChange={handleChange}></input><br></br>
                <label>Senha:</label>
                <input type="password" id='password' placeholder='Password' name='password' required={true} value={user.password} onChange={handleChange}></input><br></br>
                <label>Email:</label>
                <input type="email" id='email' placeholder='Email' name='email' required={true} value={user.email} onChange={handleChange}></input><br></br>
                <label>Cidade:</label>
                <input type="text" id='city' placeholder='City' name='city' required={true} value={user.city} onChange={handleChange}></input><br></br>
                <button type="submit" className='registerbutton'>Registrar</button>   
            </fieldset>
        </form>
    </div>
</div>
);   
}
export default Register