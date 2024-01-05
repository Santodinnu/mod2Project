// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SearchBar() {
//   const [searchQuery, setSearchedQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search/${searchQuery.trim().replaceAll(" ", "-")}`);
//   };

//   return (
//     <form
//       className="flex gap-2 items-center bg-white rounded-xl px-4"
//       onSubmit={handleSubmit}
//     >
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchedQuery(e.target.value)}
//         className="outline-none py-3 px-3 bg-transparent placeholder:text-sm"
//         placeholder="Search your recipe"
//       />
//       <div style={{ fontSize: "16px" }}>
//         &#128269;
//       </div>
//     </form>
//   );
// }

// export default SearchBar;
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchQuery, SetSearchedQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery.trim().replaceAll(" ", "-")}`);
    // navigate(`/search/${searchQuery}`);
  };
  return (
    <form
      className="flex gap-2 items-center bg-white rounded-xl px-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => SetSearchedQuery(e.target.value)}
        className="outline-none py-3 px-3 bg-transparent placeholder:text-sm"
        placeholder="Search your recipe"
      />
      <div className="text-xl">
        <BiSearch />
      </div>
    </form>
  );
}

export default SearchBar;
