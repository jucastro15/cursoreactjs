import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/apps';
import Contato from './pages/contato';
import NaoEncontrado from './naoEncontrado';
import Eventos from './pages/eventos';
import VarEstado from './pages/varEstado';
import Comps from './pages/comps';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/eventos' element={<Eventos />} />
                <Route path='/varestado' element={<VarEstado />} /> 
                <Route path='*' element={<NaoEncontrado />} />
                <Route path='/componentes' element={<Comps/>} />
            </Routes>
        </BrowserRouter>
    );
}
