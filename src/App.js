import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import MyFavorites from "./components/MyFavorites";
import Menu from "./components/Menu";
import RandomMeal from "./components/RandomMeal";
import AboutMe from "./components/AboutMe";
import Meals from "./components/Meals";
import { MealProvider } from "./context/MealProvider";

function App() {
  return (
    <div className="App">
      <MealProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/my-favorites" element={<MyFavorites />} />
          <Route path="/random-meal" element={<RandomMeal />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/meals/:strCategory" element={<Meals />} />
        </Routes>
      </Router>
      </MealProvider>
    </div>
  );
}

export default App;
