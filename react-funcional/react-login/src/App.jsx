import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard';

function App() {
  const [isUserLogged, setisUserLogged] = useState(false);
  return (
    <div className="App">
      <Routes >
        <Route index element={<Navigate replace to= "login"/>}/>
        <Route path="/login" element={<h2>React app 📝</h2>}/>
        <Route path="/shopping-cart" element={<h2>Carrito de compras 📝</h2>}/>
        <Route path="*" element={<h1>Aquí va página bonita de 404</h1>}/>
      
      <div className="card">
        {!isUserLogged ? (
          <LoginForm userLogged={(value) => setisUserLogged(value)} />
        ) : (
          <Dashboard />
        )}
      </div>
      </Routes>
    </div>
  );
}

export default App
