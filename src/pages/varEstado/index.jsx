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

    function aumentar() {

        if (contador < 10) {
            setContador(contador + 1)
        }

    } function diminuir() {

        if (contador > 0) {
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




    return (
        <div className='pagina-varestado pagina'>

            <header className='cabeçalho'>

                <Link to='/'>
                    <i className='fa fa-arrow-left voltar'></i>
                </Link>
                <h1>React-Js | Variavel de Estado </h1>

            </header>

            <div className='seçao'>
                <div className='metas'>
                    <h1>Metas par os proximos 5 anos</h1>

                    <div>
                        <input type="text" placeholder='Digite sua meta aqui' />
                        <button>Adicionar</button>
                    </div>

                    <ul>
                        <li>Se tornar pleno em uma empresa</li>
                        <li>Dar entrada no meu carro</li>
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
