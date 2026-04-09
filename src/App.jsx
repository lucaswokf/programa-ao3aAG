import { useState } from 'react'
import './App.css'
import logo from './img/lg.svg'
import imgCachorro from './img/racho.png'
import imgPassaro from './img/racpasso.png'
import imgPeixe from './img/racpeixe.png'

function App() {

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(1.0);
  const [disponivel, setDisponivel] = useState(true);
  const [foto, setFoto] = useState("");

  const cachorro = () => {
    setNome("Ração Golden Special para Cães Adultos Sabor Frango e Carne");
    setValor(129.90);
    setDisponivel(true);
    setFoto(imgCachorro);
  };

  const peixe = () => {
    setNome("Alimento para Peixe TetraMin Flakes");
    setValor(89.90);
    setDisponivel(true);
    setFoto(imgPeixe);
  };

  const passaro = () => {
    setNome("Alimento Nutrópica para Calopsita");
    setValor(59.90);
    setDisponivel(true);
    setFoto(imgPassaro);
  };

  return (
    <>
      <main>
        <img src={logo} className='logo1'/>

        <button onClick={cachorro}>Cachorro</button>
        <button onClick={peixe}>Peixe</button>
        <button onClick={passaro}>Pássaro</button>

        {nome && (
          <div className='tudo'>  
            <img src={foto} alt=""/>
            <h2 id="inf1">{nome}</h2>
            <p id="inf2">Preço: R${valor.toFixed(2)}</p>
            <p>{disponivel ? "✅ Disponível" : "❌ Indisponível"}</p>
          </div>
        )}
      </main>
    </>
  )
}

export default App