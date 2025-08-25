import { Status } from "@/lib/types/types"

export  interface IUserData{
  userName:string,
  token:string
}

export interface IInitialState{
user:IUserData,
status:Status
}