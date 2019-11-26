import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// import Recipe from "./Recipe";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import "./index.css";
import RecipeMaintenance from './RecipeMaintenance';
// import recipeControllers from './RecipeControllers';
// app.get('/api/import', recipeControllers.import);

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`/api/recipes`)
      .then(response => response.json())
      .then(json => {
        setRecipes(json);
      });
  }, []);
const addRecipe = ({title,image,desc}) => {
  setRecipes([...recipes],{
    title: title,
    image: image,
    desc: desc
  })
}
  return (
    <div>
      <h1>Recipes!</h1>
      <Router>
      <Recipes path='/' recipes={recipes} />
  <RecipeDetail path='/recipe/:recipeId' />
  <RecipeMaintenance path='/maintenance' />
      </Router>
    </div>
  );
}

export default App;