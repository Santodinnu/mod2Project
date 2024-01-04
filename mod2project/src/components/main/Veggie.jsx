import React, { useEffect, useState } from "react";
import RecipeCard from "../design/RecipeCard";
import { useFetch } from "../hook/useFetch";
import Loading from "../design/Loading";

function Veggie() {
  const { reqData, isLoading } = useFetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${
      import.meta.env.VITE_API_KEY
    }&number=10&tags=vegetarian`
  );

  return (
    <>
      {isLoading && <Loading message={`Loading recipes`} />}

      {!isLoading && (
        <section className="pt-8 pb-16">
          <h1 className="font-bold text-2xl mb-6">Vegetarian Items</h1>

          <div className="grid grid-cols-2 gap-4">
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
