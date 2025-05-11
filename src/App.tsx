import './App.css'
import {Todos} from "./component/TodosComponents/Todos.tsx";
import {Posts} from "./component/PostsComponent/Posts.tsx";
import {Comments} from "./component/CommentsComponent/Comments.tsx";

function App() {
  return (<>
        <Todos/>
          <hr/>
          <Posts/>
        <hr/>
        <Comments/>
  </>
  )}

export default App
