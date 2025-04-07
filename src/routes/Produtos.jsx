import React from 'react'

// Importando imagens via props
// props - Vai pegar dados de outro local 
const Produtos = (imagem, titulo, descricao, preco) => {
  return (
    <article className="produto">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p className="preco">{preco}</p>
      <button>Comprar</button>

    </article>
  )
}

export default Produtos
