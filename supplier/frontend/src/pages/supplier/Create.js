
import styles from './Create.module.css'
import { useContext, useEffect, useState } from 'react'
import { useApi } from '../../hooks/useApiCep';
import { useApiSupplier } from '../../hooks/useApiSupplier';
import { Context } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Create = () => {
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
    const { httpRequest, response } = useApiSupplier();

    const navigate = useNavigate();

    const {authenticated, userId} = useContext(Context);

    if(response)
    {
        document.querySelector('#message').innerHTML = response;
    }
    
    if(!authenticated)
    {
        navigate('/')
    }

    const clearField = () =>
    {   
        setName("")
        setFantasy("")
        setCnpj("");
        setKey("");
        setPix("");
        setEmail("")
        setEmailTwo("")
        setTel("")
        setTelTwo("")
        setCep("")
        setAddress("")
        setNumber("")
        setComplement("")
        setNeighborhood("")
        setCity("")
        setState("")
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
            cep, address, number, complement, neighborhood, city, state, fk_user_id: userId
        }

        await httpRequest("POST", supplier)
        
        clearField();

    }

  return (
    <div className={styles.supplier}>
        <p id='message'></p>
        <h1>Cadastrar fornecedor</h1>
        <form onSubmit={handleSubmit}>
            <div className={styles.form}>
            <label htmlFor="name">
                <span>Fornecedor</span> 

                <input type="text" placeholder='Digite o nome do fornecedor' 
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                />
            </label>
            

            <label htmlFor="fantasia">
                <span>Nome Fantasia</span> 
                <input type="text" placeholder='Digite o nome do fornecedor' 
                value={fantasy}
                onChange={(e)=>{setFantasy(e.target.value)}}
                />
            </label>

            <label htmlFor="cnpj">
                <span>CNPJ</span> 
                <input type="text" placeholder='Digite o cnpj do fornecedor'
                value={cnpj}
                onChange={(e)=>{setCnpj(e.target.value)}}
                />
            </label>


            <label htmlFor="chave">
                <span>Chave Pix</span> 
                <select  name="" id="">
                    <option value="cpf">CPF</option>
                    <option value="cnpj">CNPJ</option>
                    <option value="cel">Celular</option>
                    <option value="random">Aleatoria</option>
                </select>
            </label>

            <label htmlFor="pix">
                <span>Pix</span> 
                <input type="text" placeholder='Digite a chave pix do fornecedor' 
                value={pix}
                onChange={(e)=>{setPix(e.target.value)}}
                />
            </label>

            <label htmlFor="email">
                <span>Email</span> 
                <input type="email" placeholder='Digite o email do fornecedor' 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />
            </label>

            <label htmlFor="emailSecundario">
                <span>Email Secundario</span> 
                <input type="email" placeholder='Digite o email secundario do fornecedor' 
                value={emailTwo}
                onChange={(e)=>{setEmailTwo(e.target.value)}}
                />
            </label>

            <label htmlFor="tel">
                <span>Telefone Fixo</span> 
                <input type="tel" placeholder='Digite o telefone secundario do fornecedor' 
                value={tel}
                onChange={(e)=>{setTel(e.target.value)}}
                />
            </label>

            <label htmlFor="tel">
                <span>Telefone Celular</span> 
                <input type="tel" placeholder='Digite o telefone secundario do fornecedor' 
                value={telTwo}
                onChange={(e)=>{setTelTwo(e.target.value)}}
                />
            </label>

            <label htmlFor="cep">
                <span>Cep</span> 
                <input type="text" placeholder='Digite o cep do fornecedor' 
                value={cep}
                onBlur={()=>{handleCep()}}
                onChange={(e)=>{setCep(e.target.value)}}
                />
            </label>

            <label htmlFor="addresss">
                <span>Endereco</span> 
                <input type="text" placeholder='Digite o endereco do fornecedor' 
                value={address}
                onChange={(e)=>{setAddress(e.target.value)}}
                />
            </label>

            <label htmlFor="number">
                <span>Numero</span> 
                <input type="text" placeholder='Digite o numero do fornecedor' 
                value={number}
                id='number'
                onChange={(e)=>{setNumber(e.target.value)}}
                />
            </label>

            <label htmlFor="complement">
                <span>Complemento</span> 
                <input type="text" placeholder='Digite o complemento do fornecedor' 
                value={complement}
                onChange={(e)=>{setComplement(e.target.value)}}
                />
            </label>

            <label htmlFor="bairro">
                <span>Bairro</span> 
                <input type="text" placeholder='Digite o bairro do fornecedor' 
                value={neighborhood}
                onChange={(e)=>{setNeighborhood(e.target.value)}}
                />
            </label>

            <label htmlFor="city">
                <span>Cidade</span> 
                <input type="text" placeholder='Digite a cidade do fornecedor' 
                value={city}
                onChange={(e)=>{setCity(e.target.value)}}
                />
            </label>

            <label htmlFor="state">
                <span>Estado</span> 
                <input type="text" placeholder='Digite o estado do fornecedor' 
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

export default Create