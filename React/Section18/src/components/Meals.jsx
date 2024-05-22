import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const requestConfig = {};

const Meals = () => {
  // const [loadedMeals, setLoadedMeals] = useState([]);
  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     const response = await fetch("http://localhost:3000/meals");

  //     if (!response.ok) {
  //       //...
  //     }

  //     const resData = await response.json();
  //     setLoadedMeals(resData);
  //   };
  //   fetchMeals();
  // }, []);
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals</p>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
