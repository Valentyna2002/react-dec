import './App.css'
import {Link} from "react-router-dom";
import {Outlet} from "react-router";


 function App() {
  return (<ul>
   <li> <Link to={'/cars'}>CARS</Link></li>
   <li> <Link to={'/create'}>Create Car</Link></li>

      <Outlet/>

  </ul>)
}
export default App;

