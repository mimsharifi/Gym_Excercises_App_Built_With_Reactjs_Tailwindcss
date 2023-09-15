import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {

  return(
  <Link to={`/exercise/${exercise?.id}`} className={` h-[440px] w-72 lg:w-96 border-y-4 border-red-600 rounded-md bg-white hover:scale-110 transition-transform ease-in-out duration-500`}>
    <img src={exercise?.gifUrl} alt={exercise?.name} className="w-full h-[75%]"/>
    <div className="flex justify-center gap-8 mb-3">
      <button className="px-5 py-2 rounded-full bg-emerald-400 text-white">{exercise?.bodyPart}</button>
      <button className="px-5 py-2 rounded-full bg-purple-400 text-white">{exercise?.target}</button>
    </div>
    <h3 className="text-xl font-medium text-center">{exercise.name}</h3>
  </Link>
  )
};

export default ExerciseCard;