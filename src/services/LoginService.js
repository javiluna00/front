import Axios from 'axios'

const login = async (email, password) => {

  try {
    const response = await Axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password })
    if(response.status === 200 && response.data.token){ 
      return {status : response.status, error: false, token: response.data.token}
    }

  } catch (error) {
    return {status : error.status, error: true, message: error.response.data.message}
  }
}
export default login