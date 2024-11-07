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
  return await commonAPI("POST",`${server_url}/getUserData`,reqBody,reqHeader)
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


export const getNoteDataAPI =async(circleId)=>{
  return await commonAPI("GET",`${server_url}/getNoteData/${circleId}`)
}

export const addNoteCommentAPI = async(id,reqBody,reqHeader)=>{
  return await commonAPI('PUT',`${server_url}/addNoteComment/${id}`,reqBody,reqHeader)
}

export const addNoteLikeAPI = async (id, reqHeader) => {
  return await commonAPI('PUT', `${server_url}/addNoteLike/${id}`, {}, reqHeader); // Pass `null` for reqBody
};

export const joinCircleAPI = async(id,reqHeader)=>{
  return await commonAPI('POST',`${server_url}/joinCircle/${id}`,{},reqHeader)
}

export const addNewEventAPI =async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${server_url}/addNewEvent`,reqBody,reqHeader)
}

export const getEventsDataAPI =async(cityId)=>{
  return await commonAPI("GET",`${server_url}/getEventsData/${cityId}`)
}

export const getEventDataAPI =async(eventId)=>{
  return await commonAPI("GET",`${server_url}/getEventData/${eventId}`)
}

export const addEventCommentAPI = async(id,reqBody,reqHeader)=>{
  return await commonAPI('PUT',`${server_url}/addEventComment/${id}`,reqBody,reqHeader)
}

export const addEventLikeAPI = async (id, reqHeader) => {
  return await commonAPI('PUT', `${server_url}/addEventLike/${id}`, {}, reqHeader); // Pass `null` for reqBody
};

export const editUserDataAPI = async(reqBody,reqHeader)=>{
  return await commonAPI('PUT',`${server_url}/editUserData`,reqBody,reqHeader)
}

export const editEventNoteAPI = async(id,reqBody,reqHeader)=>{
  return await commonAPI('PUT',`${server_url}/editEventNote/${id}`,reqBody,reqHeader)
}

export const editCircleNoteAPI = async(id,reqBody,reqHeader)=>{
  return await commonAPI('PUT',`${server_url}/editCircleNote/${id}`,reqBody,reqHeader)
}

export const followUserAPI =async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${server_url}/followUser`,reqBody,reqHeader)
}