export interface CommentModel {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// --------------------------------------
export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface Comments {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export interface CommentModelDummy{
  comments: Comments[];
  total: number;
  skip: number;
  limit: number;
}

