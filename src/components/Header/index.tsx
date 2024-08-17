import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { Imagem, Logo, Texto } from './style'

export const Header = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <Logo src={logo} alt="efood" />
    </div>
    <Texto>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Texto>
  </Imagem>
)
