import React from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/design/RecipeCard";
import { useFetch } from "../components/hook/useFetch";

function Category() {
  const { id } = useParams();

  const {  reqData } = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_API_KEY
    }&cuisine=${id}`,
    id
  );

  return (
    <section className="py-8">
    
      {reqData?.results.length > 0 ? (
        <div className="space-y-6">
          <h1 className="font-bold text-2xl first-letter:uppercase">
            {id} foods
          </h1>

          <div className="grid grid-cols-4 gap-4">
            {reqData.results.map((data) => (
              <RecipeCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="font-bold text-2xl">No Food found!</h1>
      )}
    </section>
  );
}

export default Category;
