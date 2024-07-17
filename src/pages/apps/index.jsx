
import './index.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className='App'>

     <h1>Estudos reactJS
     <i className='fa fa-heart'></i>
     </h1>
  
     <h2>Estudando jsx</h2>

     <ul>
      <li>
        <Link to= '/contato'>ir para contato</Link>
      </li>
     </ul>
    </div>
  );
}


