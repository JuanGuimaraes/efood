import Prato from '../../models/Prato'
import ProductsList from '../../components/ProductsList'

import macarrao from '../../assets/images/image_macarrao.png'
import sushi from '../../assets/images/image_sushi.png'
import estrela from '../../assets/images/estrela.png'
import { Header } from '../../components/Header'

const pratos: Prato[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    category: 'Japonesa',
    note: 4.9,
    image: sushi,
    estrela: estrela
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Japonesa',
    note: 4.6,
    image: macarrao,
    estrela: estrela
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Japonesa',
    note: 4.6,
    image: macarrao,
    estrela: estrela
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Japonesa',
    note: 4.6,
    image: macarrao,
    estrela: estrela
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Japonesa',
    note: 4.6,
    image: macarrao,
    estrela: estrela
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Japonesa',
    note: 4.6,
    image: macarrao,
    estrela: estrela
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList pratos={pratos} title={''} />
  </>
)

export default Home
