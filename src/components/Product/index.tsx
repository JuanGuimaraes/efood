import Tag from '../Tag'
import { Botao, Card, Nota, Texto, Titulo } from './style'

type Props = {
  category: string
  description: string
  title: string
  image: string
  note: number
  estrela: string
}

const Product = ({
  category,
  description,
  title,
  image,
  note,
  estrela
}: Props) => (
  <Card>
    <img src={image} alt="" />
    <Tag>{category}</Tag>
    <div className="container">
      <Titulo>{title}</Titulo>
      <div className="nota">
        <Nota>{note}</Nota>
        <img src={estrela} alt="" />
      </div>
    </div>
    <Texto>{description}</Texto>
    <Botao>Saiba mais</Botao>
  </Card>
)

export default Product
