import {IUser} from "../models/JsonModels/UserModelJ.ts";
import {IPostModel} from "../models/JsonModels/PostModel.ts";
import {ICommentModel} from "../models/JsonModels/CommentModel.ts";

const endpointUser = import.meta.env.VITE_API_BASE_URL + "/users";
const endpointPost = import.meta.env.VITE_API_BASE_URL + "/posts";
const endpointComment = import.meta.env.VITE_API_BASE_URL + "/comments";

export const loadUsers =async ():Promise<IUser[]> => {
    return await fetch(endpointUser).then(value => value.json())
}

export const loadPosts = async ():Promise<IPostModel[]>=>{
    return await fetch(endpointPost).then(value => value.json())
}

export const loadComments = async ():Promise<ICommentModel[]> => {
    return await fetch(endpointComment).then(value => value.json())
}