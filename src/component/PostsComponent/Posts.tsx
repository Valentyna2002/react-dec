import {Post} from "../PostComponenet/Post.tsx";
import {useEffect, useState} from "react";
import {PostModel} from "../../model/PostModel.ts";
import {loadPosts} from "../../servise/api.servise.ts";

export const Posts = () => {
    const [post, setPost] = useState<PostModel[]>([])
    useEffect(()=>{
loadPosts().then(value => setPost(value))
    },[])

    return (
        <div className='bg-amber-300'>
            {
               post.map(post=> <Post post={post} key={post.id}/>)
            }
        </div>
    )
}