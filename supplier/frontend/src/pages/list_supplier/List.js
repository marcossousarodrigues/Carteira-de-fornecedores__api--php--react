import React, { useContext, useEffect, useState } from 'react'
import { useApiSupplier } from '../../hooks/useApiSupplier'
import styles from './List.module.css'
import {Link} from 'react-router-dom'
import { Context } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const List = () => {
    const { httpRequest, data, response } = useApiSupplier();
    const { authenticated } = useContext(Context);
    const [id, setId] = useState('');
    const navigate = useNavigate();

    if(!authenticated)
    {
      navigate('/')
    }

    useEffect( ()=>{
        const getData = async () =>{
          await httpRequest("GET");
        }
        getData();
        
    }, []);

    if(response)
    {
      document.querySelector('#message').innerHTML = response
      console.log(response);
    }
  
    const handleDelete = async (id) =>{
      await httpRequest("DELETE", {}, id);
      setId(id);
    }
  
  return (
    <div className={styles.list}>
      <h1>Meus fornecedores</h1>
      <p id='message'></p>
      {data &&
        <ul className={styles.head}>
          <div className={styles.right}>
              <li >Fornecedor</li>
              <li >CNPJ</li>
          </div>
          <div className={styles.left}> 
              <li>
                <Link to="/supplier/1" className={`${styles.edit} ${styles.hidden}`}><ion-icon name="create-outline"></ion-icon></Link>
                <Link to="/supplier/1" className={`${styles.delete} ${styles.hidden} `} ><ion-icon name="trash-outline"></ion-icon></Link>
              </li>
          </div>
         
        </ul>
      }
      {!data && <h1>Nenhum registro encontrado</h1> }

      { data && data.map( (supplier) =>(
        <ul key={supplier.id}>
          <div className={styles.right}>
              <li >{supplier.name}</li>
              <li >{supplier.cnpj}</li>
          </div>
          <div className={styles.left}> 
              <li>
                <Link to="/supplier/1" className={styles.edit}><ion-icon name="create-outline"></ion-icon></Link>
                <Link onClick={()=>{handleDelete(supplier.id)}} className={styles.delete} ><ion-icon name="trash-outline"></ion-icon></Link>
              </li>
          </div>
         
        </ul>
      ))}
            
    </div>

    
  )
}

export default List
