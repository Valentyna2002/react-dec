import {coursesArray} from "../../array.ts";
import {MyCoursesModel} from "../../models/MyCoursesModel.ts";
import {MyCourseComponent} from "../MyCourseComponent/MyCourseComponent.tsx";

export const MyCoursesComponent = () => {
    return (
        <div>{
            coursesArray.map((course:MyCoursesModel, index:number )=>{
                return<MyCourseComponent course={course} key={index}/>
            })
        }
        </div>
    )
}