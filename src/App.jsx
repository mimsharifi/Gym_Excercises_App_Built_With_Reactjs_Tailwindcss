import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import ExerciseDetails from "./Pages/ExerciseDetails"
import Footer from "./Components/Footer"


function App() {

  return (
    <div className="min-h-screen bg-rose-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App