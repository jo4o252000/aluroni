import style from './notFound.module.scss'
import styleThema from 'styles/theme.module.scss'
import {ReactComponent as NotFoundImage} from 'assets/not_found.svg'
import classNames from 'classnames'
import {useNavigate} from 'react-router-dom'


export default function NotFound(){
    const navigate = useNavigate()
    return(
        <div className={classNames({
            [style.container]:true,
            [styleThema.container]:true
        })}>
            <div className={style.voltar}>
                <button onClick={() => navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImage />
        </div>
    )
}