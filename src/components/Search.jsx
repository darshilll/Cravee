import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSumbit = (e) => {
    e.preventDefault();

    navigate("/searched/" + search);
  };

  return (
    <div className="w-full relative">
      <form onSubmit={handleSumbit}>
        <IoSearchOutline className="seacrchSvg absolute top-[55%] left-[18px]" />
        <div className="">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
};
export default Search;
