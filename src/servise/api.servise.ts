import {TodoModel} from "../model/TodoModel.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL;

export const loadTodos = async () => {
    const response:TodoModel[] =await fetch(endpoint)
    .then(value => value.json())

    return response}

const endpoint2= import.meta.env.VITE_API_BASE_URL2;

export const loadPosts = async () => {
  return  await fetch(endpoint2).then(value => value.json())
}

