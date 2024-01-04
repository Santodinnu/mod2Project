import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchQuery, setSearchedQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery.trim().replaceAll(" ", "-")}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "2px",
        alignItems: "center",
        background: "#ffffff",
        borderRadius: "12px",
        padding: "8px",
      }}
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchedQuery(e.target.value)}
        style={{
          outline: "none",
          padding: "12px",
          background: "transparent",
          placeholder: "text-sm",
        }}
        placeholder="Search your recipe"
      />
      <div style={{ fontSize: "16px" }}>
        {/* Icon for search (You can replace it with any other icon or text if needed) */}
        &#128269;
      </div>
    </form>
  );
}

export default SearchBar;
