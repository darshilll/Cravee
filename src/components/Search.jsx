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
        <IoSearchOutline className="text-white size-5 absolute top-[30%] left-[18px]" />
        <div className="">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" bg-black rounded-3xl w-full mt-5 h-[2.5rem] border-none outline-none px-[3rem] py-[1rem] text-white text-[18px] flex justify-center items-center"
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
};
export default Search;
