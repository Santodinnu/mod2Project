import React, { useEffect, useState } from "react";
import RecipeCard from "../design/RecipeCard";
import { useFetch } from "../hook/useFetch";
import Loading from "../design/Loading";

function Veggie() {
  const [reqData, setReqData] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getVeggies = async (url) => {
    setLoading(true);

    const cachedData = localStorage.getItem("veggies");

    if (cachedData) {
      setReqData(JSON.parse(cachedData));
    } else {
      const res = await fetch(url);
      const data = await res.json();

      if (data.code === 402) {
        console.log(data.message);
        setApiError(true);
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
    <>
      {isLoading && <Loading message={`Loading recipes`} />}

      {!isLoading && apiError && ""}

      {!isLoading && !apiError && (
        <section className="pt-8 pb-16">
          <h1 className="font-bold text-2xl mb-6">Vegetarian Items</h1>

          <div className="grid grid-cols-4 gap-4">
            {reqData.map((data) => (
              <RecipeCard key={data.id} data={data} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Veggie;

