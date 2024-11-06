
function Horarios({data = []}) {
  return (
    <section className=' w-full flex justify-center items-start p-10'>
        <div className="container">
        <h2 className='text-3xl font-platypi font-bold leading-tight tracking-[-0.033em] text-center'>{data.titulo || 'Horarios'}</h2>
          <div className="flex justify-center items-center mt-4">
            <div className="flex flex-col gap-10 justify-center items-center w-full md:block hidden">
              <img src={'/horario.svg'} alt="horario" className="max-w-[400px]" />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center w-full">
              {/*<h4 className='text-xl font-platypi font-bold leading-tight tracking-[-0.033em]'>Lunes a viernes</h4>*/}
              <div className="p-4 bg-amber-100 shadow-md rounded-lg min-w-[300px] md:min-w-[300px] w-full">
                <p className="text-lg font-semibold flex justify-between items-center">Lunes : <span className="text-amber-500">10:00 - 23:00</span></p>
                <p className="text-lg font-semibold flex justify-between items-center">Martes : <span className="text-amber-500">10:00 - 23:00</span></p>
                <p className="text-lg font-semibold flex justify-between items-center">Miercoles : <span className="text-amber-500">10:00 - 23:00</span></p>
                <p className="text-lg font-semibold flex justify-between items-center">Jueves : <span className="text-amber-500">10:00 - 23:00</span></p>
                <p className="text-lg font-semibold flex justify-between items-center">Viernes : <span className="text-amber-500">10:00 - 23:00</span></p>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Horarios