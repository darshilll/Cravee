import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Search from "../components/Search";
import { IoArrowBack } from "react-icons/io5";
import { motion } from "framer-motion";
import { SiCodechef } from "react-icons/si";

const Searched = () => {
  const [serached, setSearched] = useState([]);

  let params = useParams();

  const navigate = useNavigate();
  const handleSumbit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=d0e581a34a994e118b0a44f50b57dde5&query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  let SearchFound = serached;

  return (
    <div>
      <h1 className="mt-5 text-left text-[30px] font-serif font-bold tracking-wide max-w-fit">
        <Link to="/" className="flex gap-3">
          <SiCodechef size={55} className="text-[#e1c1b3]" />
          Cravee
        </Link>
      </h1>

      <Search />
      <button
        to="/"
        className="flex items-center justify-center gap-2 mt-3 color-white transform scale-80 max-w-fit bg-black text-white rounded-full p-2 w-15 h-10"
        onClick={handleSumbit}
      >
        <IoArrowBack />
        <h3 className="h3">back</h3>
      </button>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {SearchFound ? (
          <div className="grid grid-cols-4 gap-[2rem] mt-8">
            {serached.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <div className="flex items-center justify-center">
                      <div className="">
                        <Link to={"/recipe/" + item.id}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="rounded-2xl 
                    w-full"
                          />
                          <p className="text-center p-1 font-bold font-sans">
                            {item.title}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <p className="text-black">Not Found</p>
        )}
      </motion.div>
    </div>
  );
};
export default Searched;
