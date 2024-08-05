import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../components/cabeçalho';
import Contador from '../../components/contador';
import ItemMeta from '../../components/itemmeta';
import ItemPlano from '../../components/ItemPlano';
import CartaoFilme from '../../components/cartaoFilme';

export default function Comps() {

    const [metas, setMetas] = useState('');
    const [listaMetas, setListametas] = useState([]);
    const [editando, setEditando] = useState(-1);

    const [plano, setPlano] = useState('')
    const [situação, setSituação] = useState('')
    const [cor, setCor] = useState('')
    const [listaPlanos, setListaPlanos] = useState([])

    const [nome, setNome] = useState('')
    const [url, setUrl] = useState('')
    const [classificacao, setClassificacao] = useState('')
    const [listaFimes, setListaFimes] = useState([])






    function adicionarMeta() {
        if (metas !== '') {
            if (editando === -1) {
                setListametas([...listaMetas, metas]);
                setMetas('');
            } else {
                listaMetas[editando] = metas;
                setListametas([...listaMetas]);
                setMetas('');
                setEditando(-1);
            }
        }
    }

    function teclaApertada(e) {
        if (e.key === 'Enter') {
            adicionarMeta();
        }
    }

    function removerMeta(pos) {
        listaMetas.splice(pos, 1);
        setListametas([...listaMetas]);
        alert(`Estou removendo o ${pos + 1}º item`);
    }

    function alterarMeta(pos) {
        setMetas(listaMetas[pos]);
        setEditando(pos);
    }


    function adicionarPlano() {
        let novoPlano = {
            titulo: plano,
            tempo: situação,
            tema: cor
        }

        setListaPlanos([...listaPlanos, novoPlano])
        setCor('')
        setPlano('')
        setSituação('')
    }


    function novoFilme() {

        if(nome === '' || classificacao === '' || url === ''){
            alert ('Preencha todos oa campos !!');
            return;
        }
       
        let addfilme = {
            filme: nome,
            faixaetaria: classificacao,
            imagem: url
        }

        setListaFimes([...listaFimes, addfilme])
        setNome('')
        setUrl('')
        setClassificacao('')
    }


    return (
        <div className='pagina-comps pagina'>
            <Cabecalho titulo='React | Componentes' />


            <div className='seçao '>
                <div className="filmes">
                    <h1>Catálogo de Filmes</h1>
                    <div className="entradas">
                        <input placeholder="Nome do filme" value={nome} onChange={e => setNome(e.target.value)} />
                        <input placeholder="Classificação" value={classificacao} onChange={e => setClassificacao(e.target.value)} />
                        <input placeholder="URL da capa do filme" value={url} onChange={e => setUrl(e.target.value)} />
                        <button onClick={novoFilme}>Adicionar</button>
                    </div>
                    <div className="lista">
                        {listaFimes.map((item, pos) =>

                            <CartaoFilme item= {item}  pos = {pos}/>
                               
                        )}

                    </div>
                </div>
            </div>


            <div className='seçao'>
                <h1>Transformando Contador em Componente</h1>
                <Contador titulo='Passos' inicio='0' fim='20' />
                <Contador titulo='Erros' />
            </div>

            <div className='seçao'>
                <div className='metas'>
                    <h1>Transformando item de lista Metas em Componente</h1>

                    <div className='entrada'>
                        <input
                            type="text"
                            placeholder='Digite sua meta aqui'
                            onKeyUp={teclaApertada}
                            value={metas}
                            onChange={e => setMetas(e.target.value)}
                        />
                        <button onClick={adicionarMeta}>Adicionar</button>
                    </div>

                    <ul className='entrada'>
                        {listaMetas.map((item, pos) => (
                            <ItemMeta
                                item={item}
                                pos={pos}
                                alterarMeta={alterarMeta}
                                removerMeta={removerMeta}
                            />
                        ))}
                    </ul>
                </div>
            </div>


            <div className='seçao'>
                <div className='planos'>
                    <h1>Transformando Div objeto em Componente</h1>
                    <div className='entrada'>
                        <input type="text" placeholder='Meu plano aqui' value={plano} onChange={e => setPlano(e.target.value)} />
                        <input type="text" placeholder='Situação do plano aqui' value={situação} onChange={e => setSituação(e.target.value)} />
                        <input type="text" placeholder='Cor da identificacao' value={cor} onChange={e => setCor(e.target.value)} />
                        <button onClick={adicionarPlano}>Adicionar plano</button>
                    </div>

                    <div className='lista'>
                        {
                            listaPlanos.map((item, pos) =>

                                <ItemPlano
                                    item={{
                                        titulo: 'LEGAL',
                                        tempo: 'TRISTE',
                                        tema: 'red'
                                    }}
                                    pos={pos}
                                />

                            )}


                    </div>

                </div>
            </div>

        </div>
    );
}
