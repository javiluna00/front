import { useEffect, useState } from "react"
import Hero from "../components/Hero"
import SectionLugar from "../components/SectionLugar"
import useFetch from "../hooks/useFetch"
import Sponsors from "../components/Sponsors"
import PlatosDestacados from "../components/PlatosDestacados"
import SectionLugarNew from "../components/SectionLugarNew"
import Horarios from "../components/Horarios"


function Home() {

  const [data, setData] = useState(null)

  const { fetch } = useFetch()

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('/home?populate[0]=*&populate[hero][populate]=imagen_fondo&populate[quienes_somos][populate]=imagen&populate[section_platos_destacados][populate][platos][populate]=imagenes'
      )
      console.log("Response : ", response)
      setData(response)
    }

    fetchData()
  }, [])

  if (data) {
    return (
      <main className="w-full flex flex-col items-center justify-center">
        <Hero data={data["hero"][0]} />
        <SectionLugarNew data={data["quienes_somos"][0]} />
        {/*<Sponsors />*/}
        {/*<PlatosDestacados data={data["section_platos_destacados"][0]} />*/}
        <Horarios />
      </main>
    )
  }

}

export default Home