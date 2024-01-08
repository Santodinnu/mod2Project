import React, { useEffect, useState } from "react";
import RecipeCard from "../design/RecipeCard";
import Loading from "../design/Loading";

function Random() {
  const [popular, setPopular] = useState([]);
  

  const getPopular = async (url) => {
    
    const res = await fetch(url);
    const data = await res.json();


    localStorage.setItem("popular", JSON.stringify(data.recipes));
    setPopular(data.recipes);

};
  useEffect(() => {
    getPopular(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=8`
    );
  }, []);

  return (
    <section className="py-8">
      {/* {isLoading && <Loading message={`Loading recipes`} />} */}

      <h1 className="font-bold text-2xl mb-6">Popular Recipes</h1>

      <div className="grid grid-cols-4 gap-4">
        {popular.map((data) => (
          <RecipeCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
}

export default Random;
