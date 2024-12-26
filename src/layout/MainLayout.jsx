
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import useWidth from "../hooks/useWidth"
import HamburgerMenu from "../components/HamburgerMenu"


function MainLayout() {

  const { width, breakpoints } = useWidth()

  return (
    <div className="min-h-screen absolute w-full bg-fondo">
      {/*width < breakpoints.md && <HamburgerMenu />*/}
      {/*width >= breakpoints.md && <NavBar />*/}
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout