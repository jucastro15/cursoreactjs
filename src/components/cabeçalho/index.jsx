import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho(props) {
    return (

        <header className='comp-cabeçalho' >
            <Link to='/'>
                 <h1 className='titulo'>
                {props.titulo ?? 'ReactJS'}
            </h1>
            </Link>
           
        </header>

    );
}