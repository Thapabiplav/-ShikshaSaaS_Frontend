import { Status } from "@/lib/types/types"

interface IInstituteCourseInitialDataCourse{
  courseName:string,
  coursePrice:string,
  id:string
}

export interface IInstituteCourseInitialData{
  status:Status,
  courses:IInstituteCourseInitialDataCourse[]
}