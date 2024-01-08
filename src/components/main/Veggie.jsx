import React, { useEffect, useState } from "react";
import RecipeCard from "../design/RecipeCard";


function Veggie() {
  const [reqData, setReqData] = useState([]);
  

  const getVeggies = async (url) => {
    
    const res = await fetch(url);
    const data = await res.json();

    
    localStorage.setItem("veggies", JSON.stringify(data.recipes));
    setReqData(data.recipes);
  
};

useEffect(() => {
  getVeggies(
    `https://api.spoonacular.com/recipes/random?apiKey=${
      import.meta.env.VITE_API_KEY
    }&number=8&tags=vegetarian`
  );
}, []);

  return (
    <section className="pt-8 pb-16">
      
      <h1 className="font-bold text-2xl mb-6">Vegetarian Items</h1>

      <div className="grid grid-cols-4 gap-4">
        {reqData.map((data) => (
          <RecipeCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
}

export default Veggie;


