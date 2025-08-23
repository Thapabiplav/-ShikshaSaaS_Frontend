import { Status } from "@/lib/types/types"

export  interface IUserData{
  username:string,
  password:string,
  email:string
}

export interface IInitialState{
user:IUserData,
status:Status
}