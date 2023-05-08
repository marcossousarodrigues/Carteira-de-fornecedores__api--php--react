import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import NavBar from './components/NavBar';
import Create from './pages/supplier/Create';
import List from './pages/list_supplier/List';
import { AuthProvider } from './context/AuthContext';
import Edit from './pages/supplier/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <AuthProvider>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/supplier' element={<Create/>} />
          <Route path='/supplier/:id' element={<Edit/>} />
          <Route path='/list' element={<List/>} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
