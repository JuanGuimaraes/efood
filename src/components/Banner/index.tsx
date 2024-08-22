import banner from '../../assets/images/banner.png'
import { Descricao, Imagem, Titulo } from './styles'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Titulo>Italiana</Titulo>
      <Descricao>La Dolce Vita Trattoria</Descricao>
    </div>
  </Imagem>
)

export default Banner
