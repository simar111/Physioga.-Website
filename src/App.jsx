import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
   <>
   <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
   <Footer />
   </>
  )
}
