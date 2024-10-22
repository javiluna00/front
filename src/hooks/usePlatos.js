import upload from "../services/PlatosService"

const usePlatos = () => {

  const uploadPlato = async (plato, token) => {


    const response = upload(plato, token)
    
    return response
  }

  return { uploadPlato }

}

export default usePlatos