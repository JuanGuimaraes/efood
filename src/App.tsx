import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import { GlobalCss } from './style'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
