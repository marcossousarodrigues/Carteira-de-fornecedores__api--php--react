
import { useState } from 'react';
import styles from './User.module.css'
import { useAuth } from '../../hooks/useAuth';
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const {register} = useAuth();
    

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        if(name === '')
        {
            document.querySelector('#message').innerHTML = 'O campo nome é obrigatorio'; 
            return  
        }
        else if(email === '')
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
            name, email, password
        }


        await register(user);

        console.log({name, email, password})
    }
  return (
    <div className={styles.form}>
        <p id="message"></p>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input  type="text" 
                    placeholder='Digite seu nome'
                    onChange={(e)=>{setName(e.target.value)}}
             />

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

export default Register