import { useRef } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

import Icon from '../assets/images/oxygen-logo.png'
import leftArrow from "../assets/icons/left-arrow.png"
import rightArrow from "../assets/icons/right-arrow.png"


const Horizontal = ({data, setBodyPart}) => {

  const swiperRef = useRef();

  return (
    <>
    <div className="mt-4 flex justify-center items-center mx-4 md:mx-12">
      <Swiper slidesPerView={"auto"} spaceBetween={40} onSwiper={(swiper => swiperRef.current = swiper)}>
      {data.map( item => <SwiperSlide className="w-fit" key={item}>

        <button onClick={() => setBodyPart(item)} key={item} className="w-60 h-60 border-y-2 border-red-600 bg-white text-center rounded-md flex flex-col items-center justify-center gap-6"> <img src={Icon} alt="Gym icon" className="w-28"/> <span className="text-3xl font-medium">{item}</span> </button>
      </SwiperSlide> )}
      </Swiper>
    </div>
    <div className="flex justify-center mt-4 gap-8">
      <button className="bg-white p-2 md:p-4 rounded-full" onClick={ () => swiperRef.current.slidePrev()}> <img src={leftArrow} /> </button>
      <button className="bg-white p-2 md:p-4 rounded-full" onClick={ () => swiperRef.current.slideNext()} > <img src={rightArrow} /> </button>
    </div>
    </>
  )
}

export default Horizontal