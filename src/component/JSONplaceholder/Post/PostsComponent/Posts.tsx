import {Post} from "../PostComponenet/Post.tsx";
import {useEffect, useState} from "react";
import {PostModel} from "../../../../model/PostModel.ts";
import {loadPosts} from "../../../../servise/api.servise.ts";

export const Posts = () => {
    const [post, setPost] = useState<PostModel[]>([])
    useEffect(()=>{
        async function fetchPost(){
            const allPosts = await loadPosts()
            setPost(allPosts)
        }
      fetchPost()


    },[])

    return (
        <div>
            {
               post.map(post=> <Post post={post} key={post.id}/>)
            }
        </div>
    )
}