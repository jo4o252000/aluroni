import classNames from 'classnames'
import style from './prato.module.scss'
import { useParams, useNavigate, Route, Routes } from 'react-router-dom'
import cardapio from 'data/cardapio.json'
import NotFound from 'pages/notFound'
import Header from 'components/header'

export default function Prato(){
    const {id} = useParams()
    const navigate = useNavigate()
    const prato = cardapio.find(item => item.id === Number(id))
    if(!prato){
        navigate('notFound')
        return <NotFound />
    }

    return(
      <Routes>
        <Route path='*' element={<Header />}>
            <Route index element={
                <>
                <button className={style.voltar} onClick={() => navigate(-1)}>
                    {'< Voltar'}
                </button>
                <section className={style.container}>
                    <h1 className={style.titulo}>
                        {prato.title}
                    </h1>
                    <div className={style.imagem}>
                        <img src={prato.photo} alt={prato.title} />
                    </div>
                    <div className={style.conteudo}>
                        <p>{prato.description}</p>
                        <div className={style.tags}>
                            <div className={classNames({
                                [style.tags__tipo]:true,
                                [style[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true
                            })}>
                                {prato.category.label}
                            </div>
                            <div className={style.tags___porcao}>
                                {prato.size}G
                            </div>
                            <div className={style.tags__qtdpessoas}>
                                Serve {prato.serving} pessoa{prato.serving === 1 ? '' : 's'}
                            </div>
                            <div className={style.tags__valor}>
                                R$ {prato.price.toFixed(2)}
                            </div>
        
                        </div>
                    </div>
        
                </section>
                </>
            }/>
        </Route>
      </Routes>
    )
}