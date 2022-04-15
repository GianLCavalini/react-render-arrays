import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home";
import MoviesPages from "./components/pages/MoviesPages";



function App() {

 


  return (
   <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieName" element={<MoviesPages />}/>
     </Routes>
   </BrowserRouter>

  );
}

export default App;
