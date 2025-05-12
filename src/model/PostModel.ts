export interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export interface PostModelDummy {
  posts: PostModel[];
  total: number;
  skip: number;
  limit: number;
}