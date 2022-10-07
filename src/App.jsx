import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Componentes/Login/Login'

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <div className="contenedor">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
