import Button from '../Button'
import Tag from '../Tag'
import { Card, Nota, Texto, Titulo } from './style'

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
    <Button type="button" to="/cardapio" title="">
      Saiba mais
    </Button>
  </Card>
)

export default Product
