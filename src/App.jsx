import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './routes/Error'
import Login from './routes/Login'
import Home from './routes/Home'
import Filtro from './routes/Filtro'
import Jogador from './routes/Jogador'
import Aside from './routes/Aside'
import Dados from './Data/dados.json'
import Produtos from './routes/Produtos'
import GlobalStyle from './styles/GlobalStyled'

function App() {

  return (
    <Router>
      <GlobalStyle/>
      <div id="container">
      <Header/>
      <div id="content-wraper">
      <Routes>
        {/* ATENÇÃO: path='' usando aspas simples não funciona */}
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Home Dados={Dados}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/filtro" element={<Filtro/>}/>
        <Route path="/jogador" element={<Jogador/>}/>
        <Route path="/produto" element={<Produtos/>}/>
      </Routes>
      <Aside/>
      </div>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
