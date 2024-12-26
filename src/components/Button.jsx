import { Link } from "react-router-dom"


function Button({link = null, leftIcon, rightIcon, title, dark=true, blank = false }) {
  return (
    <button className="mt-8 flex justify-center items-center">
      {dark ? 
      <Link to={link} target={blank && "_blank"} className="max-w-72 py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center text-neutral-800 hover:text-white bg-transparent hover:bg-neutral-800 hover:border-neutral-800 border border-neutral-800 rounded-md flex md:w-72 gap-2 w-full justify-center items-center">{leftIcon}{title}{rightIcon}</Link>
      :
      <Link to={link} target={blank && "_blank"} className="max-w-72 py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center text-neutral-200 hover:text-neutral-800 bg-transparent hover:bg-neutral-200 hover:border-neutral-200 border border-neutral-200 rounded-md flex md:w-72 gap-2 w-full justify-center items-center">{leftIcon}{title}{rightIcon}</Link>
      }
        
    </button>
  )
}

export default Button