import { useEffect, useState} from "react";
import {TodoModel} from "../../../../model/TodoModel.ts";
import {loadTodos} from "../../../../servise/api.servise.ts";
import {Todo} from "../TodoComponent/Todo.tsx";

export const Todos = () => {
    const[todos,setTodos]=useState<TodoModel[]>([])
    useEffect(()=>{
       loadTodos().then(value => setTodos(value))
    },[])

    return (
        <div>
            {
                todos.map(todo=><Todo todo={todo} key={todo.id}/>)
            }
        </div>
    )
}