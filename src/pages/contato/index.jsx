import './index.scss'
import Cabecalho from '../../components/cabeçalho';

export default function Contato() {


    return (
        <div className='pagina-contato pagina'>

         
         <Cabecalho titulo ='ReactJS | Contato '/>
            <section className='seçao' >
                <h1>Entrem em contato</h1>
                <img className='icone' src="/assets/image/contato.png" alt="contato" />
            </section>

        </div>
    )
}