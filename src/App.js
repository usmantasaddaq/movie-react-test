import "./App.css";
import { Route, Routes } from "react-router-dom";
import Movie from "./Components/MovieData/Movie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
