import { useEffect, useState } from "react"
import Hero from "../components/Hero"
import SectionLugar from "../components/SectionLugar"
import useFetch from "../hooks/useFetch"
import Sponsors from "../components/Sponsors"
import PlatosDestacados from "../components/PlatosDestacados"


function Home() {

  const [data, setData] = useState(null)

  const { fetch } = useFetch()

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('/home?populate[0]=*&populate[hero][populate]=imagen_fondo&populate[quienes_somos][populate]=imagen')

      setData(response)
    }

    fetchData()
  }, [])

  if (data) {
    return (
      <main>
        <Hero data={data["hero"][0]} />
        <SectionLugar data={data["quienes_somos"][0]} />
        <Sponsors />
        <PlatosDestacados data={data["platos_destacados"] ? [0] : []} />
      </main>
    )
  }

}

export default Home