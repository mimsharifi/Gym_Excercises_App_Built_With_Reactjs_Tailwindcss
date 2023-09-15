
import landingImage from "../assets/images/confident-sportswoman.jpg"

const HeroBanner = () => {
  return (
    <div className="flex flex-col justify-center items-end lg:px-72 md:px-48 sm:px-20 px-8 bg-cover bg-fixed h-screen " style={{backgroundImage: `url(${landingImage})` }}>
      <div className="flex flex-col justify-center items-center">
        <span className="text-transparent text-6xl font-extrabold text-center" style={{ WebkitTextStrokeColor: "#fff", WebkitTextStrokeWidth: "1px"}}> Fitness Club </span>
        <span className="text-2xl md:text-4xl font-bold my-2 text-white text-center"> Eat, Sleep, Train <br/> and Repeat </span>
        <button href="#exercises" className="bg-red-700 text-white w-fit px-4 py-1 rounded-md" onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}> Explore Exercises </button>
      </div>
    </div>
  )
}

export default HeroBanner