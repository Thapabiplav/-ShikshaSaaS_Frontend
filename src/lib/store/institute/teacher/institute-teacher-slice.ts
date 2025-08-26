import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteTeacherInitialData, IInstituteTeacherInitialDataTeacher} from "./institute-teacher-type";
import { Status } from "@/lib/types/types";
import { AppDispatch } from "../../store";
import { APIToken } from "@/lib/http";
import { ITeacherPostData } from "../../teacher/teacherSlice.type";


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
    setTeacher(state:IInstituteTeacherInitialData,action:PayloadAction<IInstituteTeacherInitialDataTeacher[]>){
      state.teachers = action.payload
    },
    removeTeacherById(state:IInstituteTeacherInitialData,action:PayloadAction<string>){
    const index =  state.teachers.findIndex((teacher)=>teacher.id === action.payload)
      if(index  !== -1){
        state.teachers.splice(index , 1)
      }
    }
  },
});

export const {setStatus,setTeacher,removeTeacherById} = instituteTeacherSlice.actions

export default instituteTeacherSlice.reducer

export function createInstituteTeacher(data:ITeacherPostData){
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
       dispatch(removeTeacherById(id) )
      
      }
      else{
        dispatch(setStatus(Status.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR))
    }
   }
}