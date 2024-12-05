import Logo from '../Logo'
import Logom from '../../assets/images/logo.png'

import { FooterContainer, SocialIcons, Text } from './styles'
import { SocialLinks } from '../utils/list'

const Footer = () => (
  <FooterContainer>
    <Logo kind="image" cover={Logom} title="Logo eFood" to="/" />

    <SocialIcons>
      {SocialLinks.map((item) => (
        <img src={item.icon} alt={item.title} key={item.id} />
      ))}
    </SocialIcons>

    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </FooterContainer>
)

export default Footer
