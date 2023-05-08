import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import Register from '../user/Register'
import { useState, useContext } from 'react'
import Login from '../user/Login'
import { Context } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [page, setPage] = useState('login')
    const { authenticated } = useContext(Context)
    const navigate = useNavigate();
    
    if(authenticated)
    {
      navigate('/list')
    }

  return (
    <>
    <div className={styles.home}>
        <h1> <span><ion-icon name="bag-handle-outline"></ion-icon></span> <span>Carteira de fornecedores</span></h1>
        <div className={styles.btns}>
            <Link onClick={()=>setPage('login')} >Login</Link>
            <Link onClick={()=>setPage('register')}>Register</Link>
        </div>
    </div>
    {page && page === 'login' ? <Login/> : <Register/>}
     
    </>
  )
}

export default Home