import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SearchOrder() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    if (!search) return;
    navigate(`/order/${search}`);
    setSearch("");
  }
  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for an order"
        />
      </form>
  );
}

export default SearchOrder;
