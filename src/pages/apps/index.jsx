
import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabeçalho';

export default function App() {
  return (
    <div className='pagina-app pagina'>

      <Cabecalho titulo ='Estudando ReactJS'/>

      <section className='seçao' >
        <h1>Temas</h1>
      
        <ul>
          <li>
            <Link to='/contato'>ir para Contato</Link>
          </li>
          <li>
          <Link to='/eventos'>ir para Eventos</Link>
          </li>
          <li>
            <Link to='/varestado'>Ir para Variaveis de Estado</Link>
          </li>
          <li>
            <Link to='/componentes'>Ir para Componentes</Link>
          </li>
        </ul>
      
      </section>


    </div>
  );
}


