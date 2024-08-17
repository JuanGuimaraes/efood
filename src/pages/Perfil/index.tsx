import ProductsList from '../../components/ProductsList'
import Prato from '../../models/Prato'

import pizza from '../../assets/images/pizza.png'
import estrela from '../../assets/images/estrela.png'

const pratos: Prato[] = [
  {
    id: 1,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Japonesa',
    note: 4.9,
    image: pizza,
    estrela: estrela
  },
  {
    id: 2,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Japonesa',
    note: 4.9,
    image: pizza,
    estrela: estrela
  },
  {
    id: 3,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Japonesa',
    note: 4.9,
    image: pizza,
    estrela: estrela
  },
  {
    id: 4,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Japonesa',
    note: 4.9,
    image: pizza,
    estrela: estrela
  },
  {
    id: 5,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Japonesa',
    note: 4.9,
    image: pizza,
    estrela: estrela
  },
  {
    id: 6,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Japonesa',
    note: 4.9,
    image: pizza,
    estrela: estrela
  }
]

const Cardapio = () => <ProductsList pratos={pratos} title="" />

export default Cardapio
