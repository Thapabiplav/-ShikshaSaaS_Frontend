import { Status } from "@/lib/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";
import  { APIToken } from "@/lib/http";
import { ICourseData, IInstituteCourseInitialData } from "./institute-course-type";

const initialState:IInstituteCourseInitialData = {
status:Status.LOADING,
courses:[]
}

 const instituteCourseSlice = createSlice({
  name:'institute-course-slice',
  initialState: initialState,
  reducers:{
    setStatus(state,action:PayloadAction<Status>){
      state.status = action.payload
    },
    setCourse(state, action:PayloadAction<any>){
      state.courses = action.payload
    },
    setDeleteCourse(state , action:PayloadAction<string>){
     const index = state.courses.findIndex(course=>course.id = action.payload)
     if(index !=1){
      state.courses.splice(index,1)
     }
    },
    setEditCourse(state,action:PayloadAction<any>){
      const {id,data} = action.payload
      const index = state.courses.findIndex(course =>course.id =id)
      if(index !=1){
        state.courses[index] = data
      } 
    }
  }
})

const {setStatus,setCourse,setDeleteCourse,setEditCourse} = instituteCourseSlice.actions
export default instituteCourseSlice.reducer

export function createInstituteCourse(data:ICourseData){
return async function createInstituteCourseThunk(dispatch:AppDispatch){
try {
  const response = await APIToken.post ('/course',data)
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

export function fetchInstituteCourse(){
return async function fetchInstituteCourseThunk(dispatch:AppDispatch){
try {
  const response = await APIToken.get ('/course')
  if(response.status === 200){
    dispatch(setStatus(Status.SUCCESS))
    response.data.data >0 && dispatch(setCourse(response.data.data))
  }
  else{
    dispatch(setStatus(Status.ERROR))
  }
} catch (error) {
  dispatch(setStatus(Status.ERROR))
}
}
}

export function deleteInstituteCourseById(id:any){
return async function deleteInstituteCourseByIdThunk(dispatch:AppDispatch){
try {
  const response = await APIToken.get ('/course' + id)
  if(response.status === 200){
    dispatch(setStatus(Status.SUCCESS))
    dispatch(setDeleteCourse(id))
   
  }
  else{
    dispatch(setStatus(Status.ERROR))
  }
} catch (error) {
  dispatch(setStatus(Status.ERROR))
}
}
}

export function editInstituteCourse(id:string, data:any){
return async function editInstituteCourseThunk(dispatch:AppDispatch){
try {
  const response = await APIToken.post ('/course'+id,data)
  if(response.status === 200){
    dispatch(setStatus(Status.SUCCESS))
    dispatch(setEditCourse({id,data}))
  }
  else{
    dispatch(setStatus(Status.ERROR))
  }
} catch (error) {
  dispatch(setStatus(Status.ERROR))
}
}
}