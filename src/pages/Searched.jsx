import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Search from "../components/Search";
import { IoArrowBack } from "react-icons/io5";
import { motion } from "framer-motion";
import { SiCodechef } from "react-icons/si";
import Loader from "../components/Loader";

const Searched = () => {
  const [serached, setSearched] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, [params.search]);

  return (
    <div>
      <h1 className="mt-5 text-left text-[20px] xl:text-[30px] lg:text-[25px] md:text-[22px] font-serif font-bold tracking-wide max-w-fit">
        <Link to="/" className="flex gap-1 items-center">
          <SiCodechef size={40} className="md:size-16 xl:size-20 lg:size-16" />
          Cravee
        </Link>
      </h1>

      <Search />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <button
            to="/"
            className="flex items-center justify-center gap-2 mt-3 color-white transform scale-80 max-w-fit bg-black text-white rounded-full p-2 w-15 h-10 font-bold"
            onClick={handleSumbit}
          >
            <IoArrowBack />
            <h3 className="text-[14px]">back</h3>
          </button>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-[2rem] mt-8">
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
                              className="rounded-2xl w-full"
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
          </motion.div>
        </div>
      )}
    </div>
  );
};
export default Searched;
