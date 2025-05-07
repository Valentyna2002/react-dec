import {FC} from "react";
import './CourseComponent.css'
import {CourseModel} from "../../models/CourseModel.ts";

type PropsType={
    course: CourseModel
}

export const CourseComponent:FC<PropsType>=({course})=>{
    return(
        <li>{course.title} {course.monthDuration}</li>
    )
}