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

 export interface ICourseData{
  courseName:string,
  courseDescription:string,
  courseDuration:string,
  coursePrice:string,
  courseThumbnail:File | null
  categoryId:string,
  courseLevel:string
}