import {useEffect, useState} from "react";
import {TodosDModel} from "../../../model/TodoModel.ts";
import {loadTodosDummy} from "../../../servise/api.servise.dummyjsom.ts";
import {TodoDummyComponent} from "./TodoDummyComponent.tsx";

export const TodosDummyComponent = () => {
    const [todo, setTodo] = useState<TodosDModel[]>([])
    useEffect(() => {
        loadTodosDummy().then(value => setTodo(value))
    }, []);

    return (
        <div>
            {
                todo.map(todo =><TodoDummyComponent todo={todo} key={todo.id}/>)
            }
        </div>
    )
}