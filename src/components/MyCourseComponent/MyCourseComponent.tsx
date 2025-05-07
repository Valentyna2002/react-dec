import {MyCoursesModel} from "../../models/MyCoursesModel.ts";
import {FC} from "react";

type MyCourseComponentProps = {
    course: MyCoursesModel
}

export const MyCourseComponent:FC<MyCourseComponentProps> = ({course}) => {
    return (<div className='my-10'>
            <h1 className='text-3xl bg-amber-300'>{course.title}</h1>
            <p className='bg-amber-300'>Month Duration:{course.monthDuration}  Hours Duration{course.hourDuration}</p>
            <ul className='bg-blue-200'> Modules:
                {course.modules.map((module,index)=><li key={index}>{module}</li>)}
            </ul>

        </div>
    )
}