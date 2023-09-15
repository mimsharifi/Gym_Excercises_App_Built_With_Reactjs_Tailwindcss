import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";

import { fetchApi } from "../Services/fetchApi";
import ExerciseCard from "./ExerciseCard"
import Loader from "./Loader";

import "./Pagination.css"

const Exercises = ({exercises, setExercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchApi('exercises');
      } else {
        exercisesData = await fetchApi(`exercises/bodyPart/${bodyPart}`);
      }
      setExercises(exercisesData);
      setTotalPages(Math.ceil(exercisesData.length / itemsPerPage));
    };
    fetchExercisesData();

  }, [bodyPart]);

//  Pagination
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = exercises?.slice(startIndex, endIndex);

  const handlePageChange = (e) => {
    setCurrentPage(e.selected);
    window.scrollTo({ top: 1100, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center px-8 h-full my-4">
      <h1 className="my-6 md:my-10 text-3xl md:text-5xl font-bold"> Results </h1>
      { exercises?.length ? 
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {subset?.map( item => (
        <ExerciseCard key={item.id} exercise={item} />
        ))}
      </div> : <Loader />  }
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        breakLabel="..."
        nextLabel=" >"
        previousLabel="< "
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        className="flex gap-1 sm:gap-4 md:gap-6"
        activeClassName="active-page"
        pageClassName="page"
        nextClassName="page"
        previousClassName="page"
    />
    </div>
  )
}

export default Exercises