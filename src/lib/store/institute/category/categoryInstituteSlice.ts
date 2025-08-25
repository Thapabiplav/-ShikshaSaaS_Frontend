import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryAddData, ICategoryData, ICategoryInitialData } from "./category.types";
import { Status } from "@/lib/types/types";
import { APIToken } from "@/lib/http";
import { AppDispatch } from "../../store";


const initialState:ICategoryInitialData= {
  data:[],
  status:Status.LOADING
}


const categorySlice = createSlice({
  name:'categorySlice',
  initialState:initialState,
  reducers:{
    setStatus(state:ICategoryInitialData,action:PayloadAction<Status>){
      state.status = action.payload
    },

    setFetchData(state:ICategoryInitialData,action:PayloadAction<ICategoryData[]>){
      state.data = action.payload
    },
   setAddData(state:ICategoryInitialData,action:PayloadAction<ICategoryData>){
      state.data.push (action.payload)
    },
    setCategoryDelete(state:ICategoryInitialData, action:PayloadAction<string>){
      const categoryId = action.payload
      const index = state.data.findIndex((category)=>category.id == categoryId)
      if(index !== -1){
        state.data.splice(index,1)
      }
    }
  }
})

const {setStatus,setFetchData, setAddData, setCategoryDelete} = categorySlice.actions

export default categorySlice.reducer

export function fetchCategories(){
  return async function fetchCategoriesThunk(dispatch:AppDispatch){
    try {
      const response = await APIToken.get('/category')
      if(response.status === 200){
       dispatch(setStatus(Status.SUCCESS)) 
       response.data.data.length >0 && dispatch(setFetchData(response.data.data))
      }
      else{
        dispatch(setStatus(Status.ERROR))
      }
    } catch (error) {
      console.log(error)
      dispatch(setStatus(Status.ERROR))
    }
  }
}

export function addCategories(data:ICategoryAddData){
  return async function addCategoriesThunk(dispatch:AppDispatch){
    try {
      const response = await APIToken.post('/category',data)
      if(response.status === 201){
       dispatch(setStatus(Status.SUCCESS)) 
       response.data.data && dispatch(setAddData(response.data.data))
      }
      else{
        dispatch(setStatus(Status.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR))
    }
  }
}

export function deleteCategories(id:string){
  return async function addCategoriesThunk(dispatch:AppDispatch){
    try {
      const response = await APIToken.delete('/category/'+id)
      if(response.status === 200){
        dispatch(setCategoryDelete(id))
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