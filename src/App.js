import react, { useEffect, useState } from "react";
import './App.css';
import Recipe from "./recipe.js";

function App() {
  const APP_ID ="e1618d03"
  const APP_KEY="8c7afa5c6245d4fe401c713903824dca"

  // const exampleReq=
  const [recipe, setRecipes] = useState([]);
  const [search, setSearch] =  useState('');
  const [query, setQuery] = useState("rice")





  useEffect( () => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {

    const response = await fetch(`https://api.edamam.com/search?q={query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };



  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  };




  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  }


  return (
    <div className="App">
    <form onSubmit={getSearch} className="search-form">
    <input className="search-bar" type="text" value ={search} onChange ={updateSearch}/>
    <button className="search-button" type="submit">Search</button>
    </form>
    {recipe.map(recipe =>(
      <Recipe key={recipe.recipe.label} tittle={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
    ))}
    </div>
  );
}

export default App;
