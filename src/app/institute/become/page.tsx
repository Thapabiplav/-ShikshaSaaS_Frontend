"use client"

import { useAppDispatch } from "@/lib/store/hooks"
import { createInstitute } from "@/lib/store/institute/instituteSlice"
import { IInstitute } from "@/lib/store/institute/instituteSlice.type"
import { ChangeEvent, FormEvent, useState } from "react"

function becomeInstitute(){
  const dispatch = useAppDispatch()
const [instituteData,setInstituteData] = useState<IInstitute>({
  instituteName:'',
  instituteEmail : '',
  institutePhoneNumber:'',
  instituteAddress:'',
  institutePanNumber: '',
  instituteVatNumber  :''

})

const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
  const {name,value} = e.target
  setInstituteData({
     ...instituteData,
    [name]:value
  })
}

const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  dispatch(createInstitute(instituteData))

}

  return(
    <>
 <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {/* Logo and Heading */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-blue-600 flex items-center justify-center">
            <span className="mr-1 text-3xl font-bold">ES</span>
            Create Institute
          </h1>
          <p className="text-gray-500 text-sm mt-1">
        Do you wanna be institute? Lest's do it
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300 relative">
          <span className="absolute -top-2.5 bg-white left-1/2 transform -translate-x-1/2 px-3 text-gray-500">
            Sign up
          </span>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <input
              onChange={handleChange}
              type="text"
              name='instituteName'
              placeholder="Institute Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <input
            onChange={handleChange}
              type="text"
              name='institutePhoneNumber'
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div>
            <input
            onChange={handleChange}
              type="email"
              name = 'instituteEmail'
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
            onChange={handleChange}
              type="text"
              name='instituteAddress'
              placeholder="Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            />
           
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
            onChange={handleChange}
              type="text"
              name='institutePanNumber'
              placeholder="Pan No"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            /> 
          </div>

             <div className="relative">
            <input
            onChange={handleChange}
            name= "instituteVatNumber"
              type="text"
              placeholder="Vat No"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            />
           
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition"
          >
            Create Institute
          </button>
        </form>
      </div>
    </div>
  </>
  )
}

export default becomeInstitute