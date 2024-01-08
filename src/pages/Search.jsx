import React from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/design/RecipeCard";
import { useFetch } from "../components/hook/useFetch";

function Search() {
  const { id } = useParams();
  const query = id.replaceAll("-", " ");

  const { reqData } = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_API_KEY
    }&query=${query}`,
    id
  );

  return (
    <section className="py-8">

      <div className="space-y-6">
        <h1 className="font-bold text-2xl">Searched result - {query}</h1>

        {reqData?.results.length > 0 ? (
          <div className="grid grid-cols-4 gap-4">
            {reqData?.results.map((data) => (
              <RecipeCard key={data.id} data={data} className="h-[260px]" />
            ))}
          </div>
        ) : (
          <h1 className="font-bold text-2xl">No result!</h1>
        )}
      </div>
    </section>
  );
}

export default Search;


