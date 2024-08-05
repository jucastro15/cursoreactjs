import './index.scss'

export default function CartaoFilme(props) {
    
    function identificacar() {
        const faixa = props.item.faixaetaria;
        let classe = '';
    
        if (faixa === 'livre') {
            classe = ' c-l';
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
                <div className="informacoes">
                    <p>{props.item.filme}</p>
                </div>
                <div className={'classificacao' + identificacar()}>
                    {props.item.faixaetaria}
                </div>
            </div>
        </div>
    );
}
