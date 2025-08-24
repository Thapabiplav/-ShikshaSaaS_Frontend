import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteTeacherInitialData, IInstituteTeacherInitialDataTeacher, TeacherExpertise } from "./institute-teacher-type";
import { Status } from "@/lib/types/types";
import { AppDispatch } from "../../store";
import API from "@/lib/http";

const initialState: IInstituteTeacherInitialData = {
  teacher: {
    course: {
      courseName: "",
      coursePrice: "",
      courseThumbnail: "",
    },
    teacherEmail: "",
    teacherExpertise: TeacherExpertise.Beginner ,
    teacherPhoneNumber: "",
    teacherJoinedDate: "",
    teacherSalary: "",
    teacherName: "",
    teacherPhoto:''
  },
  status: Status.LOADING,
};

const instituteTeacherSlice = createSlice({
  name: "teacherSlice",
  initialState: initialState,
  reducers: {
    setStatus(state:IInstituteTeacherInitialData,action:PayloadAction<Status>){
      state.status = action.payload
    },
    setTeacher(state:IInstituteTeacherInitialData,action:PayloadAction<IInstituteTeacherInitialDataTeacher>){
      state.teacher=action.payload
    }
  },
});

const {setStatus,setTeacher} = instituteTeacherSlice.actions

export default instituteTeacherSlice.actions

export function createInstituteTeacher(data:IInstituteTeacherInitialDataTeacher){
   return async function createInstituteTeacherThunk(dispatch:AppDispatch){
    try {
      const response = await API.post ('/teacher',data)
      if(response.status === 200){
        dispatch(setStatus(Status.SUCCESS))
      }
      else{
        dispatch(setStatus(Status.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR))
    }
   }
}

export function fetchInstituteTeacher(){
   return async function createInstituteTeacherThunk(dispatch:AppDispatch){
    try {
      const response = await API.get ('/teacher')
      if(response.status === 200){
        dispatch(setStatus(Status.SUCCESS))
        response.data.data.length > 0 &&dispatch(setTeacher(response.data.data))
      
      }
      else{
        dispatch(setStatus(Status.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR))
    }
   }
}

export function deleteInstituteTeacherBYId(id:string){
   return async function deleteInstituteTeacherBYIdThunk(dispatch:AppDispatch){
    try {
      const response = await API.patch ('/teacher' +  id)
      if(response.status === 200){
        dispatch(setStatus(Status.SUCCESS))
       
      
      }
      else{
        dispatch(setStatus(Status.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR))
    }
   }
}