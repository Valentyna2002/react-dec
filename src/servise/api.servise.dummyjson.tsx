import {UserModelDummy} from "../models/DummyModels/UserModel.ts";
import {IPostDummyModel} from "../models/DummyModels/PostModel.ts";
import {ICommentModelDummy} from "../models/DummyModels/CommentModel.ts";
import { ICartModelDummy} from "../models/DummyModels/CartModel.ts";

const userEndpoint =import.meta.env.VITE_API_DUMMY_URL +'/users'
const postsEndpoint = import.meta.env.VITE_API_DUMMY_URL +'/posts'
const commentsEndpoint = import.meta.env.VITE_API_DUMMY_URL +'/comments'
const cartEndpoint= (userId:string)=>import.meta.env.VITE_API_DUMMY_URL +'/carts/user/' + userId

export const loadUsersDummyJson =async () => {
    const resUser:UserModelDummy = await fetch(userEndpoint).then(res => res.json())

    return resUser.users
}
export const loadPostsDummyJson =async () => {
    const resPost:IPostDummyModel = await fetch(postsEndpoint).then(res => res.json())

    return resPost.posts
}

export const loadCommentDummyJson =async () => {
    const resComment:ICommentModelDummy = await fetch(commentsEndpoint).then(res => res.json())

    return resComment.comments
}
export const loadCartsDummyJson =async (userId: string) => {
   const resCart:ICartModelDummy = await fetch(cartEndpoint(userId)).then(res => res.json())
    console.log(resCart)
return resCart.carts
};
