
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"


function MainLayout() {



  return (
    <div className="min-h-screen absolute w-full font-inter bg-amber-100">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default MainLayout