import {TodoModel} from "../../model/TodoModel.ts";
import {FC} from "react";

type PropType={
    todo:TodoModel
}
export const Todo:FC<PropType> = ({todo:{title,id,completed}}) => {
    return (
        <div>
            ID:{id}___ TITLE:{title} ___ COMPLETED:{completed.toString()}
        </div>
    )
}