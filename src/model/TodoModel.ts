export interface TodoModel  {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosDModel {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TodosDummyModel {
  todos: TodosDModel[];
  total: number;
  skip: number;
  limit: number;
}