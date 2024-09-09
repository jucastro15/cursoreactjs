import './index.scss'

export default function CartaoFilme(props) {
    
    function identificacar() {
        const faixa = props.item.faixaetaria;
        let classe = '';
        props.item.faixaetaria = faixa.toUpperCase();
    
        if (faixa === 'L' || faixa ==='LIVRE' ) {
            classe = ' c-l';
            props.item.faixaetaria = 'L';

        } else if (faixa === '10') {
            classe = ' c-10';
        } else if (faixa === '12') {
            classe = ' c-12';
        } else if (faixa === '14') {
            classe = ' c-14';
        } else if (faixa === '16') {
            classe = ' c-16';
        } else if (faixa === '18') {
            classe = ' c-18';
        }
        
    
        return classe;
    }

    return (
        <div className="comp-cartao-filme">
            <div className="cartao" key={props.pos}>
                <img src={props.item.imagem} alt={props.item.filme} />

                {props.item.dataEstreia !== '' &&
                <div className="informacoes">

           {props.item.destaque === true &&
                        <i className="fa-solid fa-star"></i>
                    }
                    <i className="fa-solid fa-calendar-days  calendar"></i>
                    Estreia {props.item.dataEstreia}
                </div>}

                <p>{props.item.filme}</p>
                <div className={'classificacao' + identificacar()}>
                    {props.item.faixaetaria}
                </div>
            </div>
        </div>
    );
}
