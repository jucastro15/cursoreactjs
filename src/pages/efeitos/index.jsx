import './index.scss';
import Cabecalho from '../../components/cabeçalho';
import { useState, useEffect } from 'react';

export default function Efeitos() {

    const [mencao, setMencao] = useState("");
    const [situação, setSituação] = useState("--");

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)
    const [media, setMedia] = useState(0)

      useEffect(() => {
        AvaliarMencao();
    }, [mencao])

    useEffect(() => {
        Final();
    }, [n1,n2,n3])

    useEffect(() => {
        Situs();
    }, [media])



    function Situs(){
     let s = ''
     if(media >= 6){
        s = 'Aprovado'
     }else if(media <= 6){
        s = 'DP'
     }
     
     setSituação(s)

    }

    function Final() {

        const Meda = (( Number(n1) + Number(n2)+  Number(n3)) / 3).toFixed(1);
        setMedia(Meda);
      
    }

 

    function AvaliarMencao() {

        let men = mencao.toUpperCase();

        if (men === 'P') {
            setSituação("Plenamente Satisfatório");
        } else if (men === 'S') {
            setSituação("Satisfatório")
        } else if (men === 'NS') {
            setSituação("Não Satisfatório")
        }
        else if (men === '') {
            setSituação("--")
        }
        else {
            setSituação("invalido");
        }


    }



    return (
        <div className='pagina-efeitos pagina'>
            < Cabecalho titulo='ReactJS | Efeitos' />
            <div className='seçao'>
                <h1>Situacao aluno</h1>
                <div className='situ-aluno'>
                    <div>{situação}</div>
                    <div >
                        <label>Menção: </label>
                        <input type="text" value={mencao} onChange={e => setMencao(e.target.value)} />
                    </div>

                </div>
            </div>

            <div className='seçao'>
                <h1>Nota Aluno</h1>
                <div className='notas-aluno'>
                    <div className='entrada'>

                        <input type="text" value={n1} onChange={e => setN1(e.target.value)} />
                        <input type="text" value={n2} onChange={e => setN2(e.target.value)} />
                        <input type="text" value={n3} onChange={e => setN3(e.target.value)} />

                    </div>
                    <div className='media'>
                        <label>Média:</label>
                        <div>{media}</div>
                    </div>
                    <div className='situacao'>
                        <label>Situação:</label>
                        <div>{situação}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
