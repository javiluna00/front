import { useEffect, useState } from "react";
import getCat from "../services/CategoriasService";



function useCategorias({token}) {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener las categorías del endpoint
    const fetchCategories = async (token) => {
      setLoading(true);
      try {
        
        console.log("response : ")
        const response = await getCat(token)
        if(response.status === 200){

          setCategorias(response.data)
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Llamamos a la función fetchCategories cuando el hook se monta
    fetchCategories(token);
  }, [token]); // El array vacío hace que useEffect solo se ejecute una vez al montar el componente

  return { categorias, loading, error };
}

export default useCategorias