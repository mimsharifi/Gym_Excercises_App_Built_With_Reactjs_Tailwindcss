
import Loader from "./Loader"
// icons
import bodyIcon from "../assets/icons/body-part.png"
import equipmentIcon from "../assets/icons/equipment.png"
import targetIcon from "../assets/icons/target.png"

const Details = ({exerciseDetails}) => {
  const {gifUrl, name, id, bodyPart, equipment, target} = exerciseDetails;

  return (
    <div className="flex xl:flex-row flex-col items-center px-4 sm:px-24 xl:px-8 xl:gap-12 my-10">
      <img src={gifUrl} alt={name} className="h-72 w-72 xl:w-1/2 xl:h-[620px] rounded-md"/>
      <div className="xl:w-1/2 sm:w-96 w-64 pt-12">
        <h3 className="text-3xl font-bold"> {name} </h3>
        <p className="text-lg md:text-xl font-normal xl:font-medium text-zinc-600 my-8"> Exercises keep you strong. {name} bup is one of the best exercises to target your {target}. It will help you improve your mood and gain energy. </p>
        <div className="flex flex-col gap-8">
          <span className="flex items-center gap-8"> <img src={bodyIcon} className="bg-orange-100 hover:bg-violet-50 p-6 rounded-full cursor-pointer"/> <span className="text-2xl font-medium">{bodyPart}</span> </span>
          <span className="flex items-center gap-8"> <img src={targetIcon} className="bg-orange-100 hover:bg-violet-50 p-6 rounded-full cursor-pointer"/> <span className="text-2xl font-medium">{target}</span> </span>
          <span className="flex items-center gap-8"> <img src={equipmentIcon} className="bg-orange-100 hover:bg-violet-50 p-6 rounded-full cursor-pointer"/> <span className="text-2xl font-medium">{equipment}</span> </span>
        </div>
      </div>
    </div> 
  )
}

export default Details