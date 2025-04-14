import Filtro from './Filtro'
import { AsideContainer } from '../styles/AsideStyled'

const Aside = () => {
  return (
    <AsideContainer>
      <h2>Filtro</h2>
      <input type="text" placeholder="Pesquisar" />
      <Filtro titulo="Categorias" opcoes={["Aventura", "Indie", "Plataforma"]}/>
      <Filtro titulo="Preco" type="range" min="0" max="2000" valor="1000"/>
      <Filtro titulo="Marcas" opcoes={["Marca 1", "Marca 2", "Marca 3"]}/>

    </AsideContainer>
  )
}

export default Aside
