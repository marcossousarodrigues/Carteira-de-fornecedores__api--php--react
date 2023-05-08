
import { useAuth } from '../../hooks/useAuth';
import styles from './User.module.css'
import { useState, useEffect, useContext } from 'react'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, respose } = useAuth();
  
  
  if(respose)
  {
    document.querySelector('#message').innerHTML = respose.message;
    if(respose.status === "success")
    {
      document.querySelector('#message').style.color = "rgb(170, 247, 170)";
    }
    else
    {
      document.querySelector('#message').style.color = "rgb(243, 120, 120)";
    }
  }

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    if(email === '')
    {
      document.querySelector('#message').innerHTML = 'O campo e-mail é obrigatorio';   
      return 
    }
    else if(password === '')
    {
      document.querySelector('#message').innerHTML = 'O campo senha é obrigatorio';   
      return   
    }

    const user = {
      email: email, 
      password: password
    }
    try{
      await login(user);
    }
    catch(error)
    {

    }
  
  }
  
  return (

    <div className={styles.form}>
        <p id="message"></p>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input  type="email" 
                    placeholder='Digite seu email'
                    onChange={(e)=>{setEmail(e.target.value)}}
             />

            <label htmlFor="password">Senha</label>
            <input  type="password" 
                    placeholder='Digite sua senha'
                    onChange={(e)=>{setPassword(e.target.value)}}
             />

            <input type="submit" value="Registrar" />

        </form>
    </div>
  )
}

export default Login