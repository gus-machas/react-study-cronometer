import style from './Lista.module.scss';
import Item from "./Item";
import { ITarefa } from '../../types/tarefa';
import { Props } from '../../types/props';

function Lista({tarefas, selecionaTarefa}:Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tarefas.map(
                        (item)=>( 
                            <Item tarefas={[]} selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
                        )
                    )
                }
            </ul>
        </aside>
    )
}

export default Lista