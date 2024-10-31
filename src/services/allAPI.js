import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";


// AuthAPI

export const registerAPI = async(user)=>{
  return await commonAPI("POST" , `${server_url}/register` , user , "")
}

export const loginAPI = async(user)=> {
  return await commonAPI("POST",`${server_url}/login`,user,"")
}

// getUserAPIs

export const getUserDataAPI =async(reqBody,reqHeader)=>{
  return await commonAPI("GET",`${server_url}/getUserData`,reqBody,reqHeader)
}

// cityAPIs
export const addNewCityAPI = async(city) => {
  return await commonAPI("POST",`${server_url}/addNewCity`,city,"")
}

export const searchCitiesAPI = async(city) => {
  return await commonAPI("POST",`${server_url}/searchCities`,city,"")
}

export const searchCirclesAPI = async(circle) => {
  return await commonAPI("POST",`${server_url}/searchCircles`,circle,"")
}


// circleAPIs
export const addnewcircleAPI =async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${server_url}/addnewcircle`,reqBody,reqHeader)
}

export const getCircleDataAPI =async(circleId)=>{
  return await commonAPI("GET",`${server_url}/getCircleData/${circleId}`)
}

// notesAPIs
export const addNewNoteAPI =async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${server_url}/addNewNote`,reqBody,reqHeader)
}
