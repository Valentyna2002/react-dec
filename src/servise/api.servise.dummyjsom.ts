import {PostModelDummy} from "../model/PostModel.ts";
import {CommentModelDummy} from "../model/CommentModel.ts";
import {TodosDummyModel} from "../model/TodoModel.ts";
import {ProductsModel} from "../model/ProductModel.ts";

const postsEndpoint =import.meta.env.VITE_API_DUMMY_URL +'/posts';
const commentEndpoint =import.meta.env.VITE_API_DUMMY_URL +'/comments';
const todosEndpoint =import.meta.env.VITE_API_DUMMY_URL +'/todos'
const productEndpoint =import.meta.env.VITE_API_DUMMY_URL +'/products'



export const loadPostsDummy = async () => {
    const responsePost:PostModelDummy =await fetch(postsEndpoint)
        .then(value => value.json())

    return responsePost.posts
}

export const loadCommentsDummy = async () => {
    const responseComment:CommentModelDummy =await fetch(commentEndpoint)
    .then(value => value.json())

    return responseComment.comments
}

export const loadTodosDummy = async () => {
    const responseTodos:TodosDummyModel = await fetch(todosEndpoint)
        .then(value => value.json())

    return responseTodos.todos
}

export const loadProductEndpoint = async () => {
    const responseProduct:ProductsModel = await fetch(productEndpoint)
        .then(value => value.json())
    return responseProduct.products
}

