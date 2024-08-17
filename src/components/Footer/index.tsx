import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/logo_facebook.png'
import instagram from '../../assets/images/logo_instagram.png'
import twitter from '../../assets/images/logo_twitter.png'

import { SocialMedia, SocialMediaItem, Texto, Imagem, Logo } from './style'

const Footer = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <Logo src={logo} alt="efood" />
    </div>
    <SocialMedia>
      <SocialMediaItem src={instagram} alt="Instagram" />
      <SocialMediaItem src={facebook} alt="Facebook" />
      <SocialMediaItem src={twitter} alt="Twitter" />
    </SocialMedia>
    <Texto>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </Texto>
  </Imagem>
)

export default Footer
