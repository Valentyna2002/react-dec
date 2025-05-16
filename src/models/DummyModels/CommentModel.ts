export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface IComments {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export interface ICommentModelDummy {
  comments: IComments[];
  total: number;
  skip: number;
  limit: number;
}