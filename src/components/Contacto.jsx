import { Link } from "react-router-dom"
import PhoneIcon from "./icons/PhoneIcon"


function Contacto() {
  return (
    <div className='flex h-40 justify-center items-center gap-4'>
      
      <a href="tel:+34957166347" className="p-4 rounded-full bg-amber-500 w-80 flex justify-center items-center gap-4"><PhoneIcon/> <span className="text-xl font-semibold">Llámanos</span></a> 
    </div>
  )
}

export default Contacto