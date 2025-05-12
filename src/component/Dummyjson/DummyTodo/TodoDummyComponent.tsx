import {TodosDModel} from "../../../model/TodoModel.ts";
import {FC} from "react";

type TodosProps = {
    todo: TodosDModel
}

export const TodoDummyComponent:FC<TodosProps> = ({todo}) => {


    return (
        <div className='m-5 bg-fuchsia-200'>
            <p>ID:{todo.id}  user Id:{todo.userId} </p>
            <h3 className='text-2xl'>{todo.todo}</h3>
            <h2  className={todo.completed ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                Status:{todo.completed ? 'Completed' : 'Not completed'}</h2>
            <hr/>
        </div>
    )
}