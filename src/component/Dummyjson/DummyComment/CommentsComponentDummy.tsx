import {useState,useEffect} from "react";
import {Comments} from "../../../model/CommentModel.ts";
import {loadCommentsDummy} from "../../../servise/api.servise.dummyjsom.ts";
import {CommentComponentDummy} from "./CommentComponentDummy.tsx";

export const CommentsComponentDummy = () => {
    const [comment, setComment] = useState<Comments[]>([])
    useEffect(()=>{
        loadCommentsDummy().then((comments) => setComment(comments))
    },[])


    return (
        <div>
            {
                comment.map(comment=><CommentComponentDummy comment={comment} key={comment.id}/>)
            }
        </div>
    )
}