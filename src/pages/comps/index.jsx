import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../components/cabeçalho';
import Contador from '../../components/contador';
import ItemMeta from '../../components/itemmeta';
import ItemPlano from '../../components/ItemPlano';

export default function Comps() {

    const [metas, setMetas] = useState('');
    const [listaMetas, setListametas] = useState([]);
    const [editando, setEditando] = useState(-1);

    const [plano, setPlano] = useState('')
    const [situação, setSituação] = useState('')
    const [cor, setCor] = useState('')
    const [listaPlanos, setListaPlanos] = useState([])



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


    return (
        <div className='pagina-comps pagina'>
            <Cabecalho titulo='React | Componentes' />

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
