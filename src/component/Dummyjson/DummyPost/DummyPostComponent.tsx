import {FC} from "react";
import {PostModel} from "../../../model/PostModel.ts";

type PostProps={
    post:PostModel
}
export const DummyPostComponent:FC<PostProps> = ({post:{id,title,body}}) => {

    return (
        <div className='m-5'>
            <h1 className='bg-blue-400'>ID: {id}___ {title}</h1>
            <p className='bg-blue-200'>{body}</p>
        </div>
    )
}