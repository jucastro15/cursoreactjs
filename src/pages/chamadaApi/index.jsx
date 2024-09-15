import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import Cabecalho from '../../components/cabeçalho';


export default function ChamadaApi() {

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');

    const [filmeBusca, setFilmeBusca] = useState('');
    const [listaFilmes, setListaFilmes] = useState([]);



    async function buscarCEP() {

        let url = `https://viacep.com.br/ws/${cep}/json/`;
        let resp = await axios.get(url)
        let dados = resp.data;
        let msg = dados.logradouro + ', ' + dados.bairro + ', ' + dados.localidade + '/ ' + dados.uf;

        setLogradouro(msg);
    }

    async function buscarFilme() {
        let url = `https://www.omdbapi.com?apikey=d43a5114&s=${filmeBusca}`;
        let resp = await axios.get(url)
        let dados = resp.data;


        if (dados.Response === 'False') {
            alert('Filme não encontrado');
        } else {
            let filmesencontrado = dados.Search;
            setListaFilmes(filmesencontrado);
        }

    }


    return (

        <div className="pagina-chamada-api pagina">

            <Cabecalho titulo="React | Chamada APIs" />

            <div className="seçao omdb">
                <h1>API Omdb</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Nome do filme' value={filmeBusca} onChange={e => setFilmeBusca(e.target.value)} />
                    <button onClick={buscarFilme} >Buscar</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Filme</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaFilmes.map(item => (
                            <tr className='color'>
                                <td>{item.imdbID}</td>
                                <td>{item.Title}</td>
                                <td>{item.Year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>

            <div className="seçao correios">
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
