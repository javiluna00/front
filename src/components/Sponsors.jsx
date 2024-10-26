
const sponsors = [
  'ESTRELLA-GALICIA-1.png', // Cambia a las rutas de tus imágenes o URLs
  'ESTRELLA-GALICIA-1.png',
  'ESTRELLA-GALICIA-1.png',
  'ESTRELLA-GALICIA-1.png',
];

function Sponsors() {
  return (

    <section className="bg-amber-100 dark:bg-gray-900">

      <div className="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-6 lg:px-6">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white p-4">Nuestros <span className="text-amber-500">patrocinadores</span></h2>

          <div className="flex flex-wrap justify-center mt-4">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex justify-center items-center w-24 h-24 mx-4">
                <img
                  src={sponsor}
                  alt="sponsor"
                  className="object-cover h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Sponsors