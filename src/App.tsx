import './App.css'
import {DummyPostsComponent} from "./component/Dummyjson/DummyPost/DummyPostsComponent.tsx";
import {CommentsComponentDummy} from "./component/Dummyjson/DummyComment/CommentsComponentDummy.tsx";
import {TodosDummyComponent} from "./component/Dummyjson/DummyTodo/TodosDummyComponent.tsx";
import {ProductsComponent} from "./component/Dummyjson/DummyProducts/ProductsComponent.tsx";

// import {Comments} from "./component/JSONplaceholder/Comment/CommentsComponent/Comments.tsx";
// import {Posts} from "./component/JSONplaceholder/Post/PostsComponent/Posts.tsx";
// import {Todos} from "./component/JSONplaceholder/Todo/TodosComponents/Todos.tsx";

function App() {
  return (<>
        {/*<Todos/>*/}
        {/*  <hr/>*/}
        {/*  <Posts/>*/}
        {/*<hr/>*/}
        {/*<Comments/>*/}
          <DummyPostsComponent/>
          <hr/>
          <CommentsComponentDummy/>
          <hr/>
          <TodosDummyComponent/>
          <hr/>
          <ProductsComponent/>

  </>
  )}

export default App
