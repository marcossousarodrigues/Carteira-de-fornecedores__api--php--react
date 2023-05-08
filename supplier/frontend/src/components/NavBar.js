import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Context } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { authenticated, logout } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () =>{
    logout();
    window.location.reload(true);
  }


  return (
    <>
      { authenticated && <header>
      <ul>
          <li>
            <Link to='/supplier'> <span><ion-icon name="add-circle-outline"></ion-icon></span> <span>Adicionar</span> </Link>
          </li>
          <li>
            <Link to="/list"><span><ion-icon name="bag-check-outline"></ion-icon></span> <span>Meus fornecedores</span> </Link>
          </li>
          <li>
            <button onClick={()=>{handleLogout()}} > <span><ion-icon name="exit-outline"></ion-icon></span> <span>Sair</span> </button>
          </li>
      </ul>
  </header> }
    </>
    
  )
}

export default NavBar