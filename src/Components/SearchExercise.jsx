import { useEffect, useState } from "react"
import { fetchApi } from "../Services/fetchApi";
import Horizontal from "./Horizontal";

const SearchExercise = ({setExercises, setBodyPart, bodyPart}) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect( () => {
    const fetchBodyParts = async () => {
    const bodyPartsData =  await fetchApi(`exercises/bodyPartList`)
    setBodyParts(['all', ...bodyPartsData])
    }
    fetchBodyParts();
  }, [] )

  const handleSearch = async () => {
    if(search){
      const data =  await fetchApi(`exercises`)

      const searchedExercises = data.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <div className="w-full my-12 md:my-20 flex flex-col items-center">
      <span  className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-bold text-center mb-4"> Awesome Exercises You <br/> Should Know </span>
      <div className="flex items-center">
        <input value={search} onChange={(e) => setSearch(e.target.value)}
          type="text" className="h-8 sm:h-12 w-52 sm:w-96 md:w-[540px] px-2 rounded-sm border placeholder:text-xs placeholder:md:text-lg outline-1 outline-red-700" placeholder="Search Exercises"/>
        <button onClick={handleSearch} 
          className="bg-red-700 text-white h-8 sm:h-12 rounded-sm text-xs px-1 sm:px-2 md:text-sm border border-red-700
         hover:bg-white hover:text-red-700 ml-1"> Search </button>
      </div>
      <div className="w-full md:mt-12 mt-6">
        <Horizontal data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart}/> 
      </div>
    </div>
  )
}

export default SearchExercise