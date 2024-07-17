
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/apps';
import Contato from './pages/contato';
import NaoEncontrado from './naoEncontrado';

export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='*' element={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    )
}