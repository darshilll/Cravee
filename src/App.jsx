import Cuisine from "./pages/Cuisine";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searched from "./pages/Searched";
import Recipe from "./components/Recipe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cuisine/:type" element={<Cuisine />}></Route>
        <Route path="/searched/:search" element={<Searched />}></Route>
        <Route path="/recipe/:name" element={<Recipe />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
