import React from 'react'
import { FooterContainer } from '../styles/FooterStyled'

const Footer = () => {
  return (
    <FooterContainer>
      <div className='contato'>
        <h3>Contato</h3>
        <p>Email: contato@email.com</p>
        <p>Telefone: (11) 94444-3333</p>
      </div>

      <div className='direitos'>
        <p>&copy; 2025 - Game - Todos os direitos reservados</p>
      </div>

      <div className="redes-sociais">
        <h3>Redes sociais</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Git Hub</a></li>
        </ul>

      </div>


    </FooterContainer>
  )
}

export default Footer
