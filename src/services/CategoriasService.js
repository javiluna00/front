import Axios from "axios"

  const getCat = async (token) => {
    console.log("aqui si que no entra")
    try {

      const response = await Axios.get(`${import.meta.env.VITE_API_URL}/categorias`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        }
      })
      console.log("response _: ", response)
      if(response.status === 200 && response.data.token){ 
        return {status : response.status, data : response.data}
      }

    } catch (error) {
      console.log("Error : ", error)
    }
  }


export default getCat
