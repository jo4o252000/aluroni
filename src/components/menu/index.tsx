import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './menu.module.scss' 
import {Link} from 'react-router-dom'

export default function Menu(){
    const routes = [{
        label:'Inicio',
        to:'/'
    },{
        label:'Cardápio',
        to:'/Cardapio'
    },{
        label:'Sobre',
        to:'/sobre'
    }]
    return(
        <nav className={styles.menu}>
            <Logo />
            <ul className={styles.menu__list}>
                {routes.map((route, index) => (<li key={index} className={styles.menu__link}><Link to={route.to}>{route.label}</Link></li>))}
            </ul>
        </nav>
    )
}
//A tag <a></a> Faz com que ao clicar no link a tela sejadestruida e criad novamente do zero fazendo um novo carregamnto da pagina 
//Utilizando LINK a tela redenriza apenas o componente, entãio sempre utiliza a mesma tela 