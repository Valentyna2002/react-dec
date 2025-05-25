import './App.css'
import {Outlet} from "react-router";
import {Link} from "react-router-dom";

function App() {
  return (<>
   <h1>MAIN PAGE</h1>
      <Link to={'/list/users'}>USERS</Link>
    <Outlet/>

  </>)
}

export default App
