import logo from "../assets/images/oxygen-logo.png"

const Footer = () => {
  return (
    <div className="bg-rose-100 h-24 sm:h-32 flex flex-col justify-center items-center mt-8 gap-2 border-t-4 border-red-600">
      <div className="flex items-center gap-2">
      <img src={logo} alt="Oxygen Gym" className="w-12 sm:w-16"/>
      <h4 className="text-2xl font-bold text-rose-950"> Oxygen Gym </h4>
      </div>
      <h4 className="text-xl sm:text-2xl font-medium "> Made with ❤️ by Mim ! </h4>
    </div>
  )
}

export default Footer