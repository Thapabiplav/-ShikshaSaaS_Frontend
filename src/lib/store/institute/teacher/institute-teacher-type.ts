import { Status } from "@/lib/types/types";

export enum TeacherExpertise{
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Pro = 'pro'
}

interface IInstituteTeacherInitialDataTeacherCourse{
  courseName:string,
  coursePrice:string,
  courseThumbnail:string
}

export interface IInstituteTeacherInitialDataTeacher{
  teacherName:string,
  teacherEmail:string,
  teacherExpertise:TeacherExpertise,
  teacherSalary:string,
  teacherJoinedDate:string,
  teacherPhoneNumber:string,
  teacherPhoto:string
}

 export interface IInitialTeacherDataWithCourse extends  IInstituteTeacherInitialDataTeacher{
course?:IInstituteTeacherInitialDataTeacherCourse
}

export interface IInstituteTeacherInitialData{
  teacher:IInitialTeacherDataWithCourse,
  status:Status
}