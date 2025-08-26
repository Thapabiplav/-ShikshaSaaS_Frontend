import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteTeacherInitialData, IInstituteTeacherInitialDataTeacher, TeacherExpertise } from "./institute-teacher-type";
import { Status } from "@/lib/types/types";
import { AppDispatch } from "../../store";
import { APIToken } from "@/lib/http";


const initialState: IInstituteTeacherInitialData = {
  teachers:[], 
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
      state.teachers.push(action.payload)
    }
  },
});

export const {setStatus,setTeacher} = instituteTeacherSlice.actions

export default instituteTeacherSlice.actions

export function createInstituteTeacher(data:IInstituteTeacherInitialDataTeacher){
   return async function createInstituteTeacherThunk(dispatch:AppDispatch){
    try {
      const response = await APIToken.post ('/teacher',data)
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
      const response = await APIToken.get ('/teacher')
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
      const response = await APIToken.delete ('/teacher/' +  id)
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