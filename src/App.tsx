import './App.css'
import {Outlet} from "react-router";
import {Menu} from "./components/Menu/Menu.tsx";


function App() {
  return (<>
    <Menu/>
    This is App component
    <Outlet/>

  </>)
}

export default App
