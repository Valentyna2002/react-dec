import {coursesAndDurationArray} from "../../array.ts";
import {CourseModel} from "../../models/CourseModel.ts";
import {CourseComponent} from "../CouseComponent/CourseComponent.tsx";
import './CoursesComponent.css'


export const CoursesComponent=()=>{

    return(
        <ul>
            {
                coursesAndDurationArray.map((course:CourseModel, index:number )=>{
                    return<CourseComponent course={course} key={index}/>
                })
            }
        </ul>
    )
}