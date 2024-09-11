import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import Cabecalho from '../../components/cabeçalho';


export default function ChamadaApi() {

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');

    async function buscarCEP() {

        let url = `https://viacep.com.br/ws/${cep}/json/`;
        let resp = await axios.get(url)
        let dados = resp.data;
        let msg = dados.logradouro + ', ' + dados.bairro + ', ' + dados.localidade + '/ ' + dados.uf;

        setLogradouro(msg);
    }


    return (

        <div className="pagina-chamada-api pagina">

            <Cabecalho titulo="React | Chamada APIs" />

            <div className="seçao">
                <h1>API dos  Correios</h1>
                <div>
                    <input type="text" placeholder='Digite o CEP' value={cep} onChange={e => setCep(e.target.value)} />
                    <button onClick={buscarCEP}>Buscar</button>
                </div>

                <p>
                    {logradouro}
                </p>

            </div>


        </div>
    )
}
