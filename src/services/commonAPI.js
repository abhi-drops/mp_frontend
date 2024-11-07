// import axios from 'axios'

// export const commonAPI = async(httpRequest,url,reqBody,reqHeader)=>{
//   const reqConfig={
//     method:httpRequest,
//     url,
//     data:reqBody,
//     headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
//   }

//   return await axios(reqConfig).then((res)=>{
//     return res
//   }).catch(err=>{
//     return err
//   })
// }

// Common API function
import axios from 'axios';

export const commonAPI = async (httpRequest, url, reqBody, reqHeader) => {
  const reqConfig = {
    method: httpRequest,
    url,
    data: reqBody ? reqBody : null,  // Only add data if reqBody is provided
    headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
  };

  return await axios(reqConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};