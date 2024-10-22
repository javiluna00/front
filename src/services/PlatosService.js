import Axios from "axios"


const upload = async (plato, token) => {

  try {

    console.log("Plato : ", plato)
    const response = await Axios.post(`${import.meta.env.VITE_API_URL}/platos`, plato , {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      }
    })
    if(response.status === 200 && response.data.token){ 
      return {status : response.status, error: false, token: response.data.token}
    }

  } catch (error) {
    console.log("Error : ", error)
  }
}

export default upload