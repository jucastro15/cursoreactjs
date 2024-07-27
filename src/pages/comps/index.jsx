import './index.scss'
import Cabecalho from '../../components/cabeçalho';
import Contador from '../../components/contador';

export default function Comps() {

    
        return (
            <div className='pagina-comps pagina'>
                <Cabecalho titulo='React | Componentes' />

                <div className='seçao'>
                    <h1>Transformando Contador em Componente</h1>
                    <Contador titulo='Passos' inicio='0' fim='20' /> 
                    <Contador titulo='Erros'/>
                </div>
            </div>

        )
    };