
import styles from './Create.module.css'
import { useContext, useEffect, useState } from 'react'
import { useApi } from '../../hooks/useApiCep';
import { useApiSupplier } from '../../hooks/useApiSupplier';
import { Context } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const [name, setName] = useState('');
    const [fantasy, setFantasy] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [key, setKey] = useState('');
    const [pix, setPix] = useState('');
    const [email, setEmail] = useState('');
    const [emailTwo, setEmailTwo] = useState('');
    const [tel, setTel] = useState('');
    const [telTwo, setTelTwo] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const { feactDataCep, data} = useApi();
    const { httpRequest } = useApiSupplier();

    const navigate = useNavigate();

    const {authenticated} = useContext(Context);
    
    if(!authenticated)
    {
        navigate('/')
    }

    useEffect( ()=>{
        
        console.log(data.bairro)
        if(data.bairro)
        {
            console.log(data)
            setAddress(data.logradouro)
            setNeighborhood(data.bairro)
            setCity(data.localidade)
            setState(data.uf)
        }
      

    }, [data]);

    const handleCep = () =>{
        setAddress('')
        setState('')
        setNeighborhood('')
        setCity('')
        setState('')
        
        console.log(cep)
        feactDataCep(cep)
        document.querySelector('#number').focus()
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();

        const message = document.querySelector('#message')
        message.innerHTML = '';
        if(name === '')
        {
            message.innerHTML = 'O campo nome é obrigatorio';
            return
        }

        else if(email === '')
        { 
            message.innerHTML = 'O campo email é obrigatorio';
            return
        }

        const supplier = {
            name, fantasy, cnpj, key, pix, email, emailTwo, tel, telTwo,
            cep, address, number, complement, neighborhood, city, state
        }

        await httpRequest("POST", supplier)
        
        console.log(supplier)

    }

  return (
    <div className={styles.supplier}>
        <p id='message'></p>
        <h1>Editar fornecedor</h1>
        <form onSubmit={handleSubmit}>
            <div className={styles.form}>
            <label htmlFor="name">
                <span>Fornecedor</span> 

                <input type="text" placeholder='Digite o nome do fornecedor' 
                onChange={(e)=>{setName(e.target.value)}}
                />
            </label>
            

            <label htmlFor="fantasia">
                <span>Nome Fantasia</span> 
                <input type="text" placeholder='Digite o nome do fornecedor' 
                onChange={(e)=>{setFantasy(e.target.value)}}
                />
            </label>

            <label htmlFor="cnpj">
                <span>CNPJ</span> 
                <input type="text" placeholder='Digite o nome do fornecedor'
                onChange={(e)=>{setCnpj(e.target.value)}}
                />
            </label>


            <label htmlFor="chave">
                <span>Chave Pix</span> 
                <select  name="" id="" >
                    <option value="cpf">CPF</option>
                    <option value="cnpj">CNPJ</option>
                    <option value="cel">Celular</option>
                    <option value="random">Aleatoria</option>
                </select>
            </label>

            <label htmlFor="pix">
                <span>Pix</span> 
                <input type="text" placeholder='Digite o nome do fornecedor' 
                onChange={(e)=>{setPix(e.target.value)}}
                />
            </label>

            <label htmlFor="email">
                <span>Email</span> 
                <input type="email" placeholder='Digite o nome do fornecedor' 
                onChange={(e)=>{setEmail(e.target.value)}}
                />
            </label>

            <label htmlFor="emailSecundario">
                <span>Email Secundario</span> 
                <input type="email" placeholder='Digite o nome do fornecedor' 
                onChange={(e)=>{setEmailTwo(e.target.value)}}
                />
            </label>

            <label htmlFor="tel">
                <span>Telefone Fixo</span> 
                <input type="tel" placeholder='Digite o nome do fornecedor' 
                onChange={(e)=>{setTel(e.target.value)}}
                />
            </label>

            <label htmlFor="tel">
                <span>Telefone Celular</span> 
                <input type="tel" placeholder='Digite o nome do fornecedor' 
                onChange={(e)=>{setTelTwo(e.target.value)}}
                />
            </label>

            <label htmlFor="cep">
                <span>Cep</span> 
                <input type="text" placeholder='Digite o nome do fornecedor' 
                onBlur={()=>{handleCep()}}
                onChange={(e)=>{setCep(e.target.value)}}
                />
            </label>

            <label htmlFor="addresss">
                <span>Endereco</span> 
                <input type="text" placeholder='Digite o nome do fornecedor' 
                value={address}
                onChange={(e)=>{setAddress(e.target.value)}}
                />
            </label>

            <label htmlFor="number">
                <span>Numero</span> 
                <input type="text" placeholder='Digite o nome do fornecedor' 
                id='number'
                onChange={(e)=>{setNumber(e.target.value)}}
                />
            </label>

            <label htmlFor="complement">
                <span>Complemento</span> 
                <input type="text" placeholder='Digite o nome do fornecedor' 
                onChange={(e)=>{setComplement(e.target.value)}}
                />
            </label>

            <label htmlFor="bairro">
                <span>Bairro</span> 
                <input type="text" placeholder='Digite o nome do fornecedor' 
                value={neighborhood}
                onChange={(e)=>{setNeighborhood(e.target.value)}}
                />
            </label>

            <label htmlFor="city">
                <span>Cidade</span> 
                <input type="text" placeholder='Digite o nome do fornecedor' 
                value={city}
                onChange={(e)=>{setCity(e.target.value)}}
                />
            </label>

            <label htmlFor="name">
                <span>Estado</span> 
                <input type="text" placeholder='Digite o nome do fornecedor' 
                value={state}
                onChange={(e)=>{setState(e.target.value)}}
                />
            </label>
            <label htmlFor="">
                <input className={styles.add} type="submit" value="Adicionar" />
            </label>
           
            </div>
           
            

        </form>

        {/* <div className={styles.search}>
            <input type="text" placeholder='Pesquisar' />
            <button>Pesquisar</button>
        </div> */}
    </div>
  )
}

export default Edit