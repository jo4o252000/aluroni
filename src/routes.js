import Footer from 'components/footer'
import Header from 'components/header'
import Menu from 'components/menu'
import Cardapio from 'pages/Cardapio'
import Prato from 'pages/Prato'
import Sobre from 'pages/Sobre'
import Inicio from 'pages/inicio'
import NotFound from 'pages/notFound'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function AppRouter(){
    return(
    <main className='container'>
        <Router>
            <Menu />
            <Routes>
                <Route path='/' element={<Header />}> 
                    {/* o /CARDAPIO está relativo a rota especificada acima, sempre será assim . dessa forma estamos especificando o compnente header como padrão para todas as rotas  */}
                    <Route index element={<Inicio />}/> 
                    <Route path='/cardapio' element={<Cardapio />}/>    
                    <Route path='/sobre' element={<Sobre />} />
                </Route>
                <Route path='prato/:id' element={<Prato />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            
            <Footer/>
        </Router>
    </main>   
    )
}