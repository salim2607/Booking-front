import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import List from "./pages/list/List.jsx";
import Home from "./pages/home/Home.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>



      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
