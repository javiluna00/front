import useUserStore from "../stores/UserStore"
import login from "../services/LoginService"
import {toast} from 'sonner'
import { useNavigate } from "react-router-dom"
const useUser = () => {
  const {user, setUser} = useUserStore()
  const navigate = useNavigate()
  const logIn = async (email, password, reset) => {
    const response = await login(email, password)
    if(response.status === 401)
    {
      toast.error('Credenciales incorrectas')
      return
    }
    if (response.token) {
      setUser({ email, token: response.token })
      reset()
      toast.success('Sesión iniciada correctamente')
    }
    else{
      toast.error('Usuario no encontrado')
      return
    }
  }

  const logOut = () => {
    setUser(null)
    navigate('/')
    toast.success('Sesión cerrada correctamente')
    
  }

  const isLogged = () => {
    return !!user
  }

  return { user, logIn, logOut, isLogged }
}

export default useUser