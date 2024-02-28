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
      <h1 className="mt-5 text-left text-[20px] xl:text-[30px] lg:text-[25px] md:text-[22px] font-serif font-bold tracking-wide max-w-fit">
        <Link to="/" className="flex gap-1 items-center">
          <SiCodechef size={40} className="md:size-16 xl:size-20 lg:size-16" />
          Cravee
        </Link>
      </h1>

      <Search />
      <Category />

      <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-[2rem] mt-8">
        {typeRecipe.map((item) => {
          return (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={item.id}
            >
              <div>
                <div className="flex items-center justify-center">
                  <Link to={"/recipe/" + item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-2xl 
                    w-full"
                    />
                    <p className="text-center p-1 font-bold font-sans text-[14px] xl:text-[16px]">
                      {item.title}
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
export default Cuisine;
