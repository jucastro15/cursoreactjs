import './index.scss'
import CartaoFilme from '../../components/cartaoFilme';
import Cabecalho from '../../components/cabeçalho'
import { useState } from 'react'

export default function RenderizacaoCondicional() {

    const [nome, setNome] = useState('')
    const [url, setUrl] = useState('')
    const [classificacao, setClassificacao] = useState('')
    const [listaFimes, setListaFimes] = useState([])
    const [datEstreiafilme, setDatEstreiafilme] = useState('')
    const [destaqueFilme, setDestaqueFilme] = useState(false)

    const [exibirBiscoitoSorte, setExibirBiscoitoSorte] = useState(false)


    function novoFilme() {

        if (nome === '' || classificacao === '' || url === '') {
            alert('Preencha todos oa campos !!');
            return;
        }

        let addfilme = {
            filme: nome,
            faixaetaria: classificacao,
            imagem: url, 
            dataEstreia: datEstreiafilme,
            destaque: destaqueFilme
           
        }

        setListaFimes([...listaFimes, addfilme])
        setNome('')
        setUrl('')
        setClassificacao('')
        setDatEstreiafilme('')
        setDestaqueFilme(false)
    }


    function abrirBiscoito() {
        setExibirBiscoitoSorte(!exibirBiscoitoSorte)
    }


    return (
        <div className='pagina-rende-cond pagina'>
            <Cabecalho titulo="ReactJS | Renderização Condicional" />
            <div className='seçao'>
                <h1>Biscoito da sorte</h1>
                <button onClick={abrirBiscoito}>{exibirBiscoitoSorte === true ? 'Fechar' : 'Abrir'}</button>

                {exibirBiscoitoSorte === true &&
                    <p className='msg'>"Sempre haverá um pessoa melhores e piores em habildades diferentes. Avance e ajude"</p>
                }
            </div>


            <div className='seçao '>
                <div className="filmes">
                    <h1>Catálogo de Filmes</h1>
                    <div className="entradas">
                        <input type='text' placeholder="Nome do filme" value={nome} onChange={e => setNome(e.target.value)} />
                        <input type='text' placeholder="Classificação" value={classificacao} onChange={e => setClassificacao(e.target.value)} />
                        <input type='text' placeholder="URL da capa do filme" value={url} onChange={e => setUrl(e.target.value)} />
                        <input type='text' placeholder="Estreia do filme" value={datEstreiafilme} onChange={e => setDatEstreiafilme(e.target.value)} />
                        <div>
                            <input type='checkbox' value={destaqueFilme === true} onChange={e => setDestaqueFilme(e.target.checked)} />
                            <label>Destaque</label>
                        </div>

                        <button onClick={novoFilme}>Adicionar</button>
                    </div>
                    <div className="lista">
                        {listaFimes.map((item, pos) =>

                            <CartaoFilme item={item} pos={pos} />

                        )}

                    </div>
                </div>
            </div>

        </div>

    )
}   