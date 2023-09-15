
import { useState } from "react"
import Exercises from "../Components/Exercises"
import HeroBanner from "../Components/HeroBanner"
import SearchExercise from "../Components/SearchExercise"

const Home = () => {

  const [bodyPart, setBodyPart] = useState("all")
  const [exercises, setExercises] = useState();

  return (
    <div className="h-full">
      <HeroBanner />
      <SearchExercise setExercises={setExercises} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </div>
  )
}

export default Home