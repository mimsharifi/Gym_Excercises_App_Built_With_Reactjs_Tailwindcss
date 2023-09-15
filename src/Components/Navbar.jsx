
import { Link } from "react-router-dom"
// import logo from "../assets/images/logo.png"
import logo from "../assets/images/oxygen-logo.png"

const Navbar = () => {

  return (
    <div className="flex justify-around items-center gap-6 sm:gap-12 py-1 sm:py-2 border-b-4 border-red-600">
      <Link to='/'>
        <img src={logo} className="w-12 h-12 sm:w-16 sm:h-16" alt="Oxygen Gym" />
      </Link>
      <div className="flex gap-6 sm:gap-8">
        <Link to='/' className="border-b-2 border-red-600 sm:text-lg font-medium"> Home </Link>
        <a href="#exercises" onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })} className="sm:text-lg font-medium"> Exercises </a>
      </div>
    </div>
  )
}

export default Navbar