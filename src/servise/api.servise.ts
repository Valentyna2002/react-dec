import {TodoModel} from "../model/TodoModel.ts";
import {CommentModel} from "../model/CommentModel.ts";
import {PostModel} from "../model/PostModel.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL;

export const loadTodos = async () => {
    const response:TodoModel[] =await fetch(endpoint)
    .then(value => value.json())

    return response}

const endpointPost= import.meta.env.VITE_API_BASE_URL2;

export const loadPosts = async ():Promise<PostModel[]> => {
  return  await fetch(endpointPost).then(value => value.json())
}

const endpointComment= import.meta.env.VITE_API_BASE_URL3;

export const loadComment= async ():Promise<CommentModel[]> => {
    return await fetch(endpointComment).then(value => value.json())
}

