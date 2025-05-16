import {useEffect, useState} from "react";
import {IComments} from "../../../models/DummyModels/CommentModel.ts";
import {loadCommentDummyJson} from "../../../servise/api.servise.dummyjson.tsx";
import {CommentDummy} from "./CommentDummy.tsx";

export const CommentsDummy = () => {
    const [comment, setComment] = useState<IComments[]>([])
    useEffect(()=>{
        loadCommentDummyJson().then((comments) => setComment(comments))
    },[])


    return (
        <div>
            {
                comment.map(comment=><CommentDummy comment={comment} key={comment.id}/>)
            }
        </div>
    )
}