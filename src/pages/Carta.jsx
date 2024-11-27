import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

function Carta() {
  const [selectedCategoria, setSelectedCategoria] = useState("Desayunos");
  const [data, setData] = useState(null);

  const { fetch } = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "/carta?populate[carta][populate][platos][populate][categorias]=*&populate[carta][populate][categorias]=*&populate[carta][populate][platos][populate][imagenes]=*"
      );
      console.log("Response: ", response);
      setData(response.carta);
    };

    fetchData();
  }, []);

  if (!data) return null;

  // Función para procesar la descripción de los platos

  return (
    <div className="container mx-auto min-h-screen">
      {/* Título */}
      <h1 className="text-4xl text-amber-500 font-semibold mb-10 w-full text-center mt-[100px] font-platypi">
        Consulta nuestra <span className="text-amber-600">carta</span>
      </h1>

      {/* Categorías */}
      <div className="flex flex-wrap justify-center gap-4 px-4 mb-8">
        {data?.categorias.map((categoria) => (
          <button
            key={categoria.titulo}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 uppercase ${
              selectedCategoria === categoria.titulo
                ? "bg-amber-500 text-white scale-105 shadow-lg"
                : "bg-gray-100 text-amber-500 hover:bg-amber-100 hover:scale-105"
            }`}
            onClick={() => setSelectedCategoria(categoria.titulo)}
          >
            {categoria.titulo}
          </button>
        ))}
      </div>

      {/* Contenido de la Categoría Seleccionada */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-5 p-10">
        {selectedCategoria && (
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10">
            {data?.platos
              ?.filter((plato) =>
                plato.categorias.some(
                  (categoria) => categoria.titulo === selectedCategoria
                )
              )
              .map((plato) => (
                <div
                  key={plato.id}
                  className="flex flex-col md:flex-row gap-6 border rounded-lg p-5 shadow-md bg-white"
                >
                  {/* Imagen del Plato */}
                  {plato.imagenes.length > 0 ? (
                    <img
                      src={import.meta.env.VITE_STRAPI_URL + plato.imagenes[0].url}
                      alt={plato.nombre}
                      className="w-full md:w-1/3 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full md:w-1/3 flex justify-center items-center bg-gray-100 rounded-lg">
                      <span className="text-gray-400 text-sm italic">Sin imagen</span>
                    </div>
                  )}

                  {/* Información del Plato */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Nombre del Plato y Badge */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-800">
                          {plato.nombre}
                        </h3>
                        {plato.novedad && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            Nuevo
                          </span>
                        )}
                      </div>

                      {/* Descripción */}
                      <div className="text-sm text-gray-600 mt-2">
                        <BlocksRenderer content={plato.descripcion} />
                      </div>

                      {/* Precios */}
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Ración</span>
                          <div>
                            {plato.precio_racion_tachado && (
                              <span className="line-through text-red-500 mr-2">
                                €{plato.precio_racion_tachado}
                              </span>
                            )}
                            <span className="font-semibold text-gray-800">
                              €{plato.precio_racion}
                            </span>
                          </div>
                        </div>
                        {plato.media_racion_disponible && (
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500">Media Ración</span>
                            <div>
                              {plato.precio_media_racion_tachado && (
                                <span className="line-through text-red-500 mr-2">
                                  €{plato.precio_media_racion_tachado}
                                </span>
                              )}
                              <span className="font-semibold text-gray-800">
                                €{plato.precio_media_racion}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Carta;
