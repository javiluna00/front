import { useEffect, useState } from "react"


const useWidth = () => {

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536
  }

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {

    const handleResize = () => {
      console.log(window.innerWidth)
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)


  }, [])

  return {
    width,
    breakpoints
  }

}

export default useWidth