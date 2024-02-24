import { useEffect, useState } from "react";
import Category from "../components/Category";
import { Link, useParams } from "react-router-dom";
import Search from "../components/Search";
import { motion } from "framer-motion";
import { SiCodechef } from "react-icons/si";

const Cuisine = () => {
  const [typeRecipe, setTypeRecipe] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=d0e581a34a994e118b0a44f50b57dde5&cuisine=${name}`
    );
    const recipes = await data.json();
    setTypeRecipe(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <>
      <h1 className="mt-5 text-left text-[30px] font-serif font-bold tracking-wide max-w-fit">
        <Link to="/" className="flex gap-3">
          <SiCodechef size={55} className="text-[#e1c1b3]" />
          Cravee
        </Link>
      </h1>

      <Search />
      <Category />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-4 gap-[2rem]">
          {typeRecipe.map((item) => {
            return (
              <div key={item.id}>
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
            );
          })}
        </div>
      </motion.div>
    </>
  );
};
export default Cuisine;
