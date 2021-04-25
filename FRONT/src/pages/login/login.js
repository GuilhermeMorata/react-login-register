import './login.css';
import{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useUser } from '../../config/contextuser';

//icons
import {AiOutlineLogin,AiOutlineUser} from 'react-icons/ai';
import {FaDraftingCompass,FaRegRegistered} from 'react-icons/fa';
import {RiLockPasswordLine} from 'react-icons/ri';





function Login(){

//context do usuario global
const {setuser,user} = useUser()//pegando os dados do context

//setar o token no bronser..
function setToken(userToken) {
  sessionStorage.setItem('passetoken', JSON.stringify(userToken));
}

//criar um for para setar todos osdados do user...
function setall(){
  sessionStorage.setItem('name',user.name)//criar um for para setar os valores no storage...
  sessionStorage.setItem('login',user.login)
  sessionStorage.setItem('city',user.city)
  sessionStorage.setItem('employees',user.employees)
  sessionStorage.setItem('note',user.note)
  sessionStorage.setItem('products',user.products)
  sessionStorage.setItem('box',user.box)
}


//login que gera um token de uso temporario..
function getlogin(req){
  axios.post("http://localhost:4000/login",req)
    .then((res)=>{
    if(res.status >= 200 || res.status <= 299){
      const token = res.data.token
      setToken(token)
      return res.data
    }
    else{
      console.log(res.status)
      alert('Aconteceu algum erro !')
    }
    })
    .then(res=>setuser(res))//setando os dados da chamada...
    .then(setall())
    .catch((e)=>{console.log(e)})
}

//jogar  para outra pagina
let history = useHistory()
const redipage=(parametro,valor)=>{
    history.push(`${parametro}`,valor)
}

//states da pagina
const [username, setUserName] = useState();
const [password, setPassword] = useState();

//lidar com o click subimit
const handleSubmit = async e => {
    e.preventDefault();
    await getlogin({
      username,
      password
    })
    redipage('main')
  }
//lidar com o click register
const handleregister = e=>{
  e.preventDefault();
  redipage('register')
}

//pagina rederizada
return (
<div className='mbody'>
  <FaDraftingCompass/><h1>YourDream</h1>  
  <form className='mform'> 
    <div className='mcontrol'>  
      <AiOutlineUser className='iconsst'/>
      <input type="text" name='email'placeholder="email" onChange={e => setUserName(e.target.value)}></input>
    </div>
    <div className='mcontrol'>
      <RiLockPasswordLine className='iconsst'/>
      <input type="password" name="password"placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
    </div>
    <div className='conteinerbottoes'>
      <button className='mbuttonenter'  type='submit' onClick={handleSubmit}><AiOutlineLogin/><span>Enter</span></button>
      <button className='mbutton' type='button' onClick={handleregister}><FaRegRegistered /><span>Register</span></button>
    </div>
  </form>
</div>
  );
}


export default Login;

