import { useEffect, useRef, useState } from "react"
import Hero from "../components/Hero"
import useFetch from "../hooks/useFetch"
import {ReactLenis} from 'lenis/react'
import SectionLugarNew from "../components/SectionLugarNew"
import Horarios from "../components/Horarios"
import PlatosDestacadosNew from "../components/PlatosDestacadosNew"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function Home() {

  const [data, setData] = useState(null)

  const { fetch } = useFetch()
  const lenisRef = useRef()

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('/home?populate[0]=*&populate[hero][populate]=imagen_fondo&populate[quienes_somos][populate]=imagen&populate[section_platos_destacados][populate][platos][populate]=imagenes'
      )
      //console.log("Response : ", response)
      setData(response)
    }
    fetchData()


  }, [])

  if (data) {
    return (
      <ReactLenis root ref={lenisRef}>
        <main className="overflow-x-hidden">
          <Hero data={data["hero"][0]} />
          <SectionLugarNew data={data["quienes_somos"][0]} gsap={gsap} />
          {/*<Sponsors />*/}
          {/*<PlatosDestacados data={data["section_platos_destacados"][0]} />*/}
          {<PlatosDestacadosNew dishes={data['section_platos_destacados']["platos"]} descripcion={data['section_platos_destacados']["descripcion"]} gsap={gsap}/>}
          <Horarios gsap/>
        </main>
      </ReactLenis>
    )
  }

}

export default Home