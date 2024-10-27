import { Link } from "react-router-dom"
import InstagramIcon from "./icons/InstagramIcon"
import MailIcon from "./icons/MailIcon"

function Footer() {
  return (
    <footer className="bg-amber-100 dark:bg-gray-900 h-40 p-4 flex flex-col md:flex-row justify-center">
      <div className="flex flex-col justify-start items-center">
        <p>© 2024. All rights reserved.</p>
      </div>
      <div className="flex flex-col justify-start items-center">
        <h4 className="text-neutral-900 font-semibold">Contacto</h4>
        <div className="flex flex-col gap-4 pt-4 w-full justify-center items-center">
          <Link to="https://www.instagram.com/santasmiafamilia/"><InstagramIcon size={25} /></Link>
          <Link to={"mailto:Uqfjv@example.com"}><MailIcon size={25} /></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer