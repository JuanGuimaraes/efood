import Prato from '../../models/Prato'
import Product from '../Product'
import { List, ListItem } from './style'

export type Props = {
  title?: string
  pratos: Prato[]
}

const ProductsList = ({ pratos }: Props) => (
  <List>
    <ListItem>
      {pratos.map((pratos) => (
        <Product
          key={pratos.id}
          category={pratos.category}
          description={pratos.description}
          title={pratos.title}
          image={pratos.image}
          note={pratos.note}
          estrela={pratos.estrela}
        />
      ))}
    </ListItem>
  </List>
)

export default ProductsList
