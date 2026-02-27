import { Routes, Route } from "react-router-dom";

//importing pages we have under pages.
import Home from "./pages/home.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
