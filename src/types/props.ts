import { ITarefa } from "./tarefa";

export interface Props extends ITarefa{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada:ITarefa) => void
}