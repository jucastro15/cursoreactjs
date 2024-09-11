import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/apps';
import Contato from './pages/contato';
import NaoEncontrado from './naoEncontrado';
import Eventos from './pages/eventos';
import VarEstado from './pages/varEstado';
import Comps from './pages/comps';
import RenderizacaoCondicional from './pages/rendeCond';
import Efeitos from './pages/efeitos';
import ChamadaApi from './pages/chamadaApi';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/eventos' element={<Eventos />} />
                <Route path='/varestado' element={<VarEstado />} /> 
                <Route path='/componentes' element={<Comps/>} />
                <Route path='/rendecond' element={<RenderizacaoCondicional/>} />
                <Route path='/efeitos' element={<Efeitos/>} /> 
                <Route path='/chamadaapi' element={<ChamadaApi/>} />
                <Route path='*' element={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    );
}
