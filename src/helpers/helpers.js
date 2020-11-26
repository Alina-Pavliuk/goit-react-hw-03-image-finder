import axios from "axios";

export const getPictures = async (query, page = 1) => {

  try {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&key=${process.env.REACT_APP_API_KEY}&per_page=12`
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log(error.message.data);
  }
}

// export const withCredentials = (url) => {
//   return `${url}client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
// }

// export const request= async (method,url,body=null)=>{
//   const result =  await axios[method](url,body);
//   return result.data

// }