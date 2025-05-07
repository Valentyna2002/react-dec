import './App.css'
import {CoursesComponent} from "./components/CoursesComponent/CoursesComponent.tsx";
import {FamilyComponent} from "./components/familyComponent/FamilyComponent.tsx";
import {coursesTitleArray} from "./array.ts";
import {MyCoursesComponent} from "./components/MyCoursesComponent/MyCoursesComponent.tsx";


const App=()=> {
  return (<>
    <ul>
      {
        coursesTitleArray.map((value,index)=><li key={index}>{value}</li>)
      }
    </ul>

   <CoursesComponent/>

    <FamilyComponent/>

    <MyCoursesComponent/>
  </>)
}
export default App
