import './estilo.css'
import Logo from '../../componentes/Logo'
import OpcoesHeader from '../../componentes/OpcoesHeader';
import IconesHeader from '../../componentes/IconesHeader';

function header() {
  return(
    <header className='App-header'>
      <Logo/>
      <OpcoesHeader/>
      <IconesHeader/>
  </header>
  )
}
export default header