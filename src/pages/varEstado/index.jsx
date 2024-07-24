import './index.scss';
import { Link } from 'react-router-dom';
import { lerNumero } from '../../utils/converçao';
import { calcularTotalingresso } from '../../service/ingressos';
import { useState } from 'react';


export default function VarEstado() {

    const [contador, setContador] = useState(0);
    const [tituloS2, setTituloS2] = useState('Digite algo')
    const [tituloS3, setTituloS3] = useState('Escolha um')
    const [marcouopçaoS4, setMarcouopçaoS4] = useState(true)
    const [tituloS5, setTituloS5] = useState('Digite algo')
    const [descriçaoS5, setDescriçaoS5] = useState('Digite algo')


    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [res, setRes] = useState(0)

    const [qtdIng, setQtdIng] = useState(0)
    const [meioIng, setMeioIng] = useState(0)
    const [totalIng, setTotalIng] = useState(0)
    const [cupom, setCupom] = useState('')

    const [metas, setMetas] = useState('')
    const [listaMetas, setListametas] = useState([])
    const [editando, setEditando] = useState(-1)

    const [plano, setPlano] = useState('')
    const [situação, setSituação] = useState('')
    const [cor, setCor] = useState('')
    const [listaPlanos, setListaPlanos] = useState([])

  




    function aumentar() {

        if (contador <= 10) {
            setContador(contador + 1)
        }

    } function diminuir() {

        if (contador >= 0) {
            setContador(contador - 1)
        }

    }
    function somar() {
        let somar = lerNumero(num1) + lerNumero(num2)
        setRes(somar)
    }
    
    function calcularingresso() {

        let tot = calcularTotalingresso(meioIng, qtdIng, cupom)
        setTotalIng(tot)
    }

    function adicionarMeta() {

        if (metas !== '') {
            if (editando === -1) {
                setListametas([...listaMetas, metas])
                setMetas('')
            }
            else {
                listaMetas[editando] = metas
                setListametas([...listaMetas])
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
        alert(`Estou removendo o ${pos + 1}º item`)
    }
    function alterarMeta(pos) {
        setMetas(listaMetas[pos])
        setEditando(pos)

    }

    function adicionarPlano(){
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
        <div className='pagina-varestado pagina'>

            <header className='cabeçalho'>

                <Link to='/'>
                    <i className='fa fa-arrow-left voltar'></i>
                </Link>
                <h1>React-Js | Variavel de Estado </h1>

            </header>

            <div className='seçao'>
                <div className='planos'>
                    <h1>Meus Planos atuais</h1>
                    <div className='entrada'>
                        <input type="text" placeholder='Meu plano aqui' value={plano} onChange={e=>setPlano(e.target.value)}/>
                        <input type="text" placeholder='Situação do plano aqui' value={situação} onChange={e=>setSituação(e.target.value)}/>
                        <input type="text" placeholder='Cor da identificacao' value={cor} onChange={e=>setCor(e.target.value)}/>
                        <button onClick={adicionarPlano}>Adicionar plano</button>
                    </div>

                    <div className='lista'>
                        {
                            listaPlanos.map((item, pos) =>
                                <div className='plano' key={pos}>
                            <div className='cor' style={{backgroundColor: item.tema}}> &nbsp;</div>
                            <div>
                            <h1> {item.titulo} </h1>
                            <h2> {item.tempo} </h2>  
                            </div>
                            
                        </div>
                        )}
                        
                        
                    </div>

                </div>
            </div>

            <div className='seçao'>
                <div className='metas'>
                    <h1>Metas para os proximos 5 anos</h1>

                    <div className='entrada'>
                        <input type="text" placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={metas} onChange={e => setMetas(e.target.value)} />
                        <button onClick={adicionarMeta}>Adicionar</button>
                    </div>


                    <ul className='entrada'>
                        {listaMetas.map((item, pos) =>
                            <li key={pos}>
                                <i className="fa-regular fa-pen-to-square" onClick={() => alterarMeta(pos)}></i>&nbsp;
                                <i className="fa-solid fa-trash-can" onClick={() => removerMeta(pos)}></i> &nbsp;
                                {item}
                            </li>

                        )}

                    </ul>

                </div>

            </div>

            <div className='seçao'>

                <div className='ingressos'>
                    <h1>Venda de Ingressos</h1>
                    <div className='entrada'>
                        <div>
                            <label>Quantidade</label>
                            <input type="text" value={qtdIng} onChange={e => setQtdIng(e.target.value)} />
                        </div>
                        <div>
                            <label>Meia Entrada</label>
                            <input type="checkbox" checked={meioIng} onChange={e => setMeioIng(e.target.checked)} />
                        </div>
                        <div>
                            <label>Cupom</label>
                            <input type="text" value={cupom} onChange={e => setCupom(e.target.value)} />
                        </div>
                        <div>
                            <label>&nbsp;</label>
                            <button onClick={calcularingresso}>Calcular</button>
                        </div>
                        <hr />
                        <div>
                            o total é R$ {totalIng.toFixed(2)}
                        </div>

                    </div>
                </div>
            </div>

            <div className='seçao '>
                <div className='calculadora'>
                    <h1>Calculadora</h1>
                    <div className='entrada'>
                        <input type="text" value={num1} onChange={e => setNum1(e.target.value)} />
                        <input type="text" value={num2} onChange={e => setNum2(e.target.value)} />
                        <div>
                            =
                        </div>
                        <div className='res'>
                            {res}
                        </div>
                        <button onClick={somar}> Soma</button> 
                      
                    </div>
                </div>
            </div>

            <div className='seçao'>

                <h1>Contador</h1>
                <div className='cont'>
                    <button onClick={aumentar} >+</button>
                    {contador}
                    <button onClick={diminuir}  >-</button>
                </div>

            </div>

            <div className='seçao'>

                <h1>{tituloS2}</h1>
                <input type="text" value={tituloS2} onChange={e => setTituloS2(e.target.value)} />

            </div>

            <div className='seçao'>

                <h1>{tituloS3}</h1>
                <select onChange={e => setTituloS3(e.target.value)} >
                    <option>Selecione</option>
                    <option>JavaScript</option>
                    <option>Html/Css</option>
                    <option>React-JSX</option>
                </select>

            </div>

            <div className='seçao'>

                <h1>Programar é cansativo?{marcouopçaoS4 ? ' Sim' : ' Não'}</h1>
                <input type="checkbox" checked={marcouopçaoS4} onChange={e => setMarcouopçaoS4(e.target.checked)} /> Programar é cansativo

            </div>

            <div className='seçao'>

                <h1>{tituloS5}</h1>
                <input type="text" value={descriçaoS5} onChange={e => setDescriçaoS5(e.target.value)} />
                <button onClick={() => setTituloS5(descriçaoS5)}>Click para alterar</button>

            </div>
        </div>
    );
}
