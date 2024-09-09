import './index.scss'
import Cabecalho from '../../components/cabeçalho'
import { useState } from 'react'

export default function RenderizacaoCondicional() {

    const [exibirBiscoitoSorte, setExibirBiscoitoSorte] = useState(false)

    function abrirBiscoito() {
        setExibirBiscoitoSorte(!exibirBiscoitoSorte)
    }


    return (
        <div className='pagina-rende-cond pagina'>
            <Cabecalho titulo="ReactJS | Renderização Condicional" />
            <div className='seçao'>
                <h1>Biscoito da sorte</h1>
                <button onClick={abrirBiscoito }>{exibirBiscoitoSorte == true ? 'Fechar' : 'Abrir'}</button>

                {exibirBiscoitoSorte === true &&
                <p className='msg'>"Sempre haverá um pessoa melhores e piores em habildades diferentes. Avance e ajude"</p>
                }
                </div>
        </div>
    )
}