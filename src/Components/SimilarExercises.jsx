import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css/navigation"

import ExerciseCard from "./ExerciseCard"
import Loader from "./Loader"
import { useRef } from "react"

import leftArrow from "../assets/icons/left-arrow.png"
import rightArrow from "../assets/icons/right-arrow.png"

const SimilarExercises = ({equipmentExercises, targetMuscle}) => {

  const muscleRef = useRef();
  const equipmentRef = useRef();

  return (
    <div className="mx-4 my-8 ">
      <h3 className="text-2xl font-medium mb-4 mt-16"> Similar <span className="text-red-600 font-bold"> Target Muscle </span> Exercises </h3>
      {targetMuscle.length ?
      <>
      <Swiper slidesPerView={"auto"} spaceBetween={30} onSwiper={(swiper => muscleRef.current = swiper)} >
      {targetMuscle.map( item =>
      <SwiperSlide className="w-fit flex flex-col items-center justify-center" key={item.id}>
        <ExerciseCard exercise={item} />
      </SwiperSlide> )}
      </Swiper>
      <div className="flex justify-center mt-4 gap-8">
        <button className="bg-white p-2 md:p-4 rounded-full" onClick={ () => muscleRef.current.slidePrev()}> <img src={leftArrow} /> </button>
        <button className="bg-white p-2 md:p-4 rounded-full" onClick={ () => muscleRef.current.slideNext()} > <img src={rightArrow} /> </button>
      </div>
      </>
      : <Loader /> }


      <h3 className="text-2xl font-medium mb-4 mt-16"> Similar <span className="text-red-600 font-bold"> Equipment </span> Exercises </h3>
      {equipmentExercises.length ?
      <>
      <Swiper slidesPerView={"auto"} spaceBetween={30} onSwiper={(swiper => equipmentRef.current = swiper)} >
      {equipmentExercises.map( item =>
      <SwiperSlide className="w-fit flex flex-col items-center justify-center" key={item.id}>
        <ExerciseCard exercise={item} />
      </SwiperSlide> )}
      </Swiper> 
      <div className="flex justify-center mt-4 gap-8">
        <button className="bg-white p-2 md:p-4 rounded-full" onClick={ () => equipmentRef.current.slidePrev()}> <img src={leftArrow} /> </button>
        <button className="bg-white p-2 md:p-4 rounded-full" onClick={ () => equipmentRef.current.slideNext()} > <img src={rightArrow} /> </button>
      </div>
      </>
      : <Loader /> }
    </div>
  )
}

export default SimilarExercises