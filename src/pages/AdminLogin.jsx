import { useState } from "react"
import useUser from "../hooks/useUser"
import MenuComidaIcon from "../components/icons/MenuComidaIcon"
import { Link } from "react-router-dom"

function AdminLogin() {

  const [user, setUser] = useState({ email: "", password: "" })
  const { logIn, isLogged } = useUser()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("hola?")
    logIn(user.email, user.password, reset)
  }

  const reset = () => {
    setUser({ email: "", password: "" })
  }

  if (!isLogged()) {
    return (
      <div className='w-full h-[90vh] flex justify-center items-center'>
        <form className='flex flex-col justify-center items-center py-4 px-6 rounded bg-amber-500 ' id='loginForm' onSubmit={handleSubmit}>
          <div className='w-full flex flex-col justify-center items-end gap-3'>
            <label htmlFor="email" className="w-full text-white text-sm font-semibold">Email</label>
            <input className="px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-amber-700" type="email" name="email" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <label htmlFor="email" className="w-full text-white text-sm font-semibold">Password</label>
            <input className="px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-amber-700" type="password" name="password" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />

            <button type='submit' className="mt-2 text-sm px-4 py-2 rounded-md hover:shadow-md transition-all duration-200 hover:scale-105 bg-white text-amber-500 uppercase font-semibold">Login</button>
          </div>
        </form>
      </div>
    )
  }
  else {
    return (
      <>
        <h3 className="text-3xl font-bold text-amber-500 text-center font-bold my-10">Panel de administrador</h3>
        <div className="h-[90vh] grid grid-cols-2 p-4 gap-4">
          <Link to="/admin/carta">
            <div className="w-full flex justify-center gap-4 items-center bg-amber-500 rounded-md h-16 cursor-pointer text-white hover:shadow-md hover:scale-105 hover:text-amber-200 transition-all duration-100">
              <MenuComidaIcon />
              <h3 className="text-md font-bold">Administrar carta</h3>
            </div>
          </Link>
        </div>
      </>
    )
  }
}

export default AdminLogin