
function Horarios({data = []}) {

  const schedule = [
    { day: 'Lunes', hours: '9:00 AM - 9:00 PM' },
    { day: 'Martes', hours: '9:00 AM - 9:00 PM' },
    { day: 'Miércoles', hours: '9:00 AM - 9:00 PM' },
    { day: 'Jueves', hours: '9:00 AM - 9:00 PM' },
    { day: 'Viernes', hours: '9:00 AM - 11:00 PM' },
    { day: 'Sábado', hours: '10:00 AM - 11:00 PM' },
    { day: 'Domingo', hours: '10:00 AM - 8:00 PM' },
  ];

  return (
    <section 
      className="w-full flex justify-center items-center p-10 py-20 bg-white" 
      id="horarios"
    >
      <div className="container max-w-6xl mx-auto">
        {/* Título principal */}
        <h2 className="text-4xl font-platypi font-bold leading-tight tracking-[-0.033em] text-center">
          {data.titulo || "Horarios"}
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-10">
          {/* Columna izquierda: Ilustración */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/2">
            <img 
              src={'/horario.svg'} 
              alt="horario" 
              className="max-w-[400px] w-full md:max-w-[500px]" 
            />
          </div>

          {/* Columna derecha: Horarios */}
          <div className="flex flex-col justify-start items-center w-full md:w-1/2 text-center md:text-left">
          
            {/* Lista de horarios */}
            <ul className="divide-y divide-amber-300 w-full">
              {schedule.map((entry, index) => (
                <li 
                  key={index} 
                  className="flex justify-between items-center py-3 text-amber-800 text-lg"
                >
                  <span className="font-semibold">{entry.day}</span>
                  <span className="text-base">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Horarios