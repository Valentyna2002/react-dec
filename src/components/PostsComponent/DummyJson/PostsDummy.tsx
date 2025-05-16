import {useEffect, useState} from "react";
import {IPosts} from "../../../models/DummyModels/PostModel.ts";
import {loadPostsDummyJson} from "../../../servise/api.servise.dummyjson.tsx";
import {PostDummy} from "./PostDummy.tsx";

export const PostsDummy = () => {

    const [post, setPost] = useState<IPosts[]>([])
    useEffect(() => {
        loadPostsDummyJson().then(value => setPost(value))
    },[])
    return (
        <div>
            { post.map(post => <PostDummy post={post} key={post.id}/>)}
        </div>
    )
}