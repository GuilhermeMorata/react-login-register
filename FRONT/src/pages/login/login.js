import './login.css';
import{useState} from 'react';
import axios from 'axios';



//setar o token no bronser..
function setToken(userToken) {
  sessionStorage.setItem('passetoken', JSON.stringify(userToken));
}

//login que gera um token de uso temporario..
function getlogin(req){
  axios.post("http://localhost:4000/login",req)
    .then((res)=>{
    if(res.status >= 200 || res.status <= 299){
      const token = res.data.token
      setToken(token)
      window.location.replace('/main')
    }
    else{
      console.log(res)
    }
    
   
    //token salvo....
    //window.location.replace(`http://localhost:4000/${dados}`);
    })
    .catch((e)=>{console.log(e)})
}


function Login() {

const [username, setUserName] = useState();
const [password, setPassword] = useState();

const handleSubmit = async e => {
    e.preventDefault();
    const user = await getlogin({
      username,
      password
    });
    return user
  }


  
return (
<div className='mbody'>
  <legend>login</legend>  
  <form className='mform' tittle='login' onSubmit={handleSubmit}> 
    <div className='mcontrol'>  
      <label>Name:</label>
      <input type="text" name='email'placeholder="email" onChange={e => setUserName(e.target.value)}></input>
    </div>
    <div className='conteinersenha'>
      <label>Senha:</label>
      <input type="password" name="password"placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
    </div>
    <div className='conteinerbottoes'>
      <button  className='mbutton' type='submit' >Enter</button>
      <button className='mbutton'>register</button>
    </div>
  </form>
</div>
  );
}


export default Login;

