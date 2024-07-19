import './index.scss'
import { Link } from 'react-router-dom';


export default function Eventos() {
 function Clicou (){
    alert('usuario clicou!!')
 }
 function Mexeumouse (){
    alert('usuario passou o mouse no paragrafo!!')
 }
 function Alterouvalor (e){
    let novoValor = e.target.value;
    alert('usuario Alterou O valor do input/select!! para ' + novoValor)
 }

 function Alteroucheck (e){
    let novoValor = e.target.checked;
    alert('usuario Alterou O valor do input{checkbox/radio]!! para ' + novoValor)
 }


    return (
        <div className='pagina-eventos pagina'>
            <header className='cabeçalho' >

                <Link to='/'>
                    <i className='fa fa-arrow-left voltar'></i>
                </Link>

                <h1>React-Js | Eventos </h1>
            </header>

            <section className='seçao' >
                <h1>Entendendo eventos</h1>

                <p onMouseMove={Mexeumouse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur in iure ea praesentium nesciunt rerum voluptate harum sequi, eum non eligendi optio omnis nostrum mollitia nemo magni quisquam nobis.</p>


                <input onChange={Alterouvalor} type="text" placeholder='digite algo' />


                <select onChange={Alterouvalor} >
                    <option>selecione</option>
                    <option>itemA</option>
                    <option>itemB</option>
                </select>
                

                <div className='grupo'>
                    <input type='checkbox' onChange={Alteroucheck}/> Opcão1
                    <input type='checkbox' /> Opcão2
                </div>

                <div className='grupo'>
                    <div>
                       <input type='radio' name='gpo' onChange={Alteroucheck} /> Opcão1 
                    </div>
                    <div>
                       <input type='radio' name='gpo' onChange={Alteroucheck} /> Opcão2  
                    </div>
                   
                </div>


                <button onClick={Clicou} >Click em mim</button>

            </section>


        </div>
    )
}