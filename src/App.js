import react, { useEffect, useState } from "react";
import './App.css';
import Recipe from "./recipe.js";

function App() {
  const { REACT_APP_API_ID: APP_ID, REACT_APP_API_KEY: APP_KEY } = process.env;

  // const exampleReq=
  const [recipe, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("banana");
  const [loading, setLoading] = useState(false);





  useEffect(() => {
    getRecipe()
  }, [query]);

  const getRecipe = async () => {
    setLoading(true);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(proxyurl + `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    setRecipes(data.hits);
    setLoading(false);
    console.log(data.hits);
  };



  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  };




  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>

      {
        loading ? (
          <div>
            Loading...
          </div>
        ) : (
            <div className="recip">
              {recipe.map(recipe => (
                <Recipe key={recipe.recipe.label} tittle={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
              ))}
            </div>
          )
      }
    </div>
  );
}

export default App;
