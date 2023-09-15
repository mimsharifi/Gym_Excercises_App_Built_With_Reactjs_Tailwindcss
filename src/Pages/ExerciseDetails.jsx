import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

// Api
import { fetchApi } from "../Services/fetchApi";

// Components
import Details from "../Components/Details"
import SimilarExercises from "../Components/SimilarExercises"

const ExerciseDetails = () => {

  const [exerciseDetails, setExerciseDetails] = useState({});
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams();

  useEffect( () => {
    const fetchDetails = async () =>  {
      const detailsData = await fetchApi(`exercises/exercise/${id}`)
      setExerciseDetails(detailsData);

      const targetMuscleData = await fetchApi(`exercises/target/${detailsData.target}`)
      setTargetMuscle(targetMuscleData);

      const equipmentExercisesData = await fetchApi(`exercises/equipment/${detailsData?.equipment}`)
      setEquipmentExercises(equipmentExercisesData);
    }
    fetchDetails();
  }, [id] )

  return (
    <div>
      <Details exerciseDetails={exerciseDetails} />
      <SimilarExercises targetMuscle={targetMuscle} equipmentExercises={equipmentExercises}/>
    </div>
  )
}

export default ExerciseDetails