import axios from "axios"
const useFetch = () => {

  const fetch = async (query) => {

    const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/api${query}`, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_KEY}`,
      }}
    )

    if(response.status === 200) {
      return response.data.data
    }
    else{
      return {error:true, message:"Error obteniendo datos"}
    }
  }

  return {fetch}


}

export default useFetch