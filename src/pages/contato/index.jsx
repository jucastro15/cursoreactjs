import './index.scss'
import { Link } from 'react-router-dom';

export default function Contato() {


    return (
        <div className='pagina-contato pagina'>

            <header className='cabeçalho' >
                <Link to='/'>
                    <i className='fa fa-arrow-left voltar'></i>
                </Link>

                <h1>Contato</h1>

            </header>
            <section className='seçao' >
                <img className='icone' src="/assets/image/contato.png" alt="contato" />
            </section>

        </div>
    )
}