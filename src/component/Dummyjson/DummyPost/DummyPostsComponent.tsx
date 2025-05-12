import {useState,useEffect} from "react";
import {PostModel} from "../../../model/PostModel.ts";
import {loadPostsDummy} from "../../../servise/api.servise.dummyjsom.ts";
import {DummyPostComponent} from "./DummyPostComponent.tsx";


export const DummyPostsComponent = () => {
    const [post, setPost] = useState<PostModel[]>([])
    useEffect(() => {
     loadPostsDummy().then(value => setPost(value))
    },[])


    return (
        <div>
            {
                post.map(post => <DummyPostComponent post={post} key={post.id}/>)
            }
        </div>
    )
}