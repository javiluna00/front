import { Card } from "flowbite-react"
function PlatosDestacados({ data = [] }) {
  return (
    <div className='h-screen w-full bg-amber-50 flex justify-center items-center'>
      <div className="container flex flex-col gap-10 justify-center items-center">
        <h2 className="text-6xl text-amber-500 font-semibold">Platos Destacados</h2>
        {data.map((plato, index) => (
          <Card key={index}>

          </Card>
        ))}
      </div>
    </div>
  )
}

export default PlatosDestacados