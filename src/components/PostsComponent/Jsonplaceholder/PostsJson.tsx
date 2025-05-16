import {useEffect, useState} from "react";
import {IPostModel} from "../../../models/JsonModels/PostModel.ts";
import {loadPosts} from "../../../servise/api.servise.jsonplaceholder.tsx";
import {PostJson} from "./PostJson.tsx";

export const PostsJson = () => {
    const [post, setPost] = useState<IPostModel[]>([])
    useEffect(() => {
        loadPosts().then(value => setPost(value))
    })
    return (
        <div>
            {
                post.map(post=> <PostJson post={post} key={post.id}/>)
            }
        </div>
    )
}