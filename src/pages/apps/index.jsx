
import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className='pagina-app pagina'>

      <header className='cabeçalho' >
        <h1 className='titulo'>
          Estudos de ReactJS
          <i className='fa fa-heart'></i>
        </h1>

      </header>

      <section className='seçao' >
        <h1>Estudando ReactJS</h1>

        <input type="text" placeholder='Digite aqui '/>
        <br /><br />
        <select>
          <option >item1</option>
          <option >item2</option>
          <option >item3</option>
        </select>
        <br /><br />
        <button>Click aqui</button>

        <ul>
          <li>
            <Link to='/contato'>ir para contato</Link>
          </li>
        </ul>
      </section>


    </div>
  );
}


