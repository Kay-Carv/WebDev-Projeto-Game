import Produtos from "./Produtos"

// Dados vai chamar os nossos dados
// map percorre todos os itens para trazer para a gente
const Home = ({Dados}) => {
  return (
    <div>
      {Dados.map(produto =>{
        <Produtos
        key={produto.id}
        imagem={produto.imagem}
        titulo={produto.titulo}
        descricao={produto.descricao}
        preco={produto.preco}
        />
      })}
    </div>
  )
}

export default Home
