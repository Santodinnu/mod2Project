import React, { useEffect, useState } from "react";
import RecipeCard from "../design/RecipeCard";
import Loading from "../design/Loading";

function Veggie() {
  const [reqData, setReqData] = useState([]);
  const [isLoading, setLoading] = useState(true); // Assuming initial loading state

  const getVeggies = async (url) => {
    const cachedData = localStorage.getItem("veggies");

    if (cachedData) {
      setReqData(JSON.parse(cachedData));
    } else {
      const res = await fetch(url);
      const data = await res.json();

      if (data.code === 402) {
        console.log(data.message);
        // No need to set apiError state in this version
      }

      localStorage.setItem("veggies", JSON.stringify(data.recipes));
      setReqData(data.recipes);
    }

    setLoading(false);
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
      {isLoading && <Loading message={`Loading recipes`} />}

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


