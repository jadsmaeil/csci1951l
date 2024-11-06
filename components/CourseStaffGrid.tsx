import {FC} from "react";
import CourseStaff from "../data/course_staff.json";

interface CourseStaffGridProps {}

const CourseStaffGrid: FC<CourseStaffGridProps> = () => {
    return <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {CourseStaff.map(staff => <div key={staff.name} className="text-center">
            <div className="aspect-w-1 aspect-h-1 bg-gray-900 rounded-xl overflow-hidden">
                {staff.image && <img src={staff.image} alt="" className="object-cover"/>}
            </div>

            <div className="text-white font-display text-xs md:text-sm font-bold mt-4">
                {staff.name}
            </div>
            <div className="text-white text-xs md:text-sm mt-1 font-bold">
                {staff.position} <span className="opacity-50 mx-1">|</span> {staff.pronouns} <span
                className="opacity-50 mx-1">|</span> {staff.csLogin}
            </div>
            <p className="text-sm mt-1 md:mt-2">
                {staff.desc}
            </p>
        </div>)}
    </div>
}

export default CourseStaffGrid;