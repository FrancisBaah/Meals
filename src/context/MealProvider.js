import { MealContext } from "./MealContext";
import { GET_API } from "../components/api/GET_API";
import { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

  // Load favorites from local storage on component mount
  const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

export const MealProvider = ({ children, strCategory }) => {
  const [meals, setMeals] = useState([]);
  const [favorites, setFavorites] = useState(initialFavorites);
  const [getMeals, setGetMeals] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(false);

  const toggleFavorite = (mealId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(mealId)
        ? prevFavorites.filter((id) => id !== mealId)
        : [...prevFavorites, mealId]
    );
  };

  const myFavorite = favorites.map((favoriteId) => {
    // Find the details of the favorite meal
    const favoriteMeal = getMeals.find((meal) => meal.idMeal === favoriteId);
    if (favoriteMeal) {
      return (
        <div className="meal" key={favoriteId}>
          <h3 style={{width:"200px"}}>{favoriteMeal.strMeal}</h3>
          <img style={{ width: "100px", height: "100px" }} alt="meal" src={favoriteMeal.strMealThumb} />
          <MdFavorite
                onClick={() => toggleFavorite(favoriteId)}
                style={{color: "red", marginRight: "-25px" }}
              />
        </div>
      );
    }

    return null;
  });

  const getMenuList = async (path) => {
    setLoading(true);
    const res = await GET_API(path);
    if (res && res.meals) {
      const mealData = res.meals.map(({ strMeal, idMeal, strMealThumb }) => (
        <div className="meal" key={idMeal}>
          <h3 style={{width:"200px"}}>{strMeal ? strMeal : ""}</h3>
          <img
            style={{ width: "100px", height: "100px", objectFit:"contain" }}
            alt="meal"
            src={strMealThumb}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            {favorites.includes(idMeal) ? (
              <MdFavorite
                onClick={() => toggleFavorite(idMeal)}
                style={{ position: "absolute", right: "-30px", color: "red" }}
              />
            ) : (
              <MdFavoriteBorder
                onClick={() => toggleFavorite(idMeal)}
                style={{ position: "absolute", right: "-30px" }}
              />
            )}
          </div>
        </div>
      ));
      setMeals(mealData);
      setGetMeals(res.meals);
      setLoading(false);
    }
  };

 useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <MealContext.Provider value={{ meals,favorites, loading, strCategory, getMenuList, myFavorite }}>
      {children}
    </MealContext.Provider>
  );
};
