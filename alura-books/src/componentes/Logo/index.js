import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo () {
  return (
    <div className='logo'>
        <img 
          src={logo} 
          alt= 'logo da Alura Books' 
          className='logo-img'>
        </img>
        <p><strong>Alura</strong>Books</p>
      </div>
  )
}

export default Logo