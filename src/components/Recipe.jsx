import { useEffect, useState } from "react";
import Search from "./Search";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";
const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [active, setActive] = useState("instructions");
  let params = useParams();
  const navigate = useNavigate();

  const getRecipe = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=d0e581a34a994e118b0a44f50b57dde5`
    );
    const detailData = await data.json();
    setRecipe(detailData);
  };

  useEffect(() => {
    getRecipe();
  }, [params.name]);

  const handleClick = () => {
    // Navigate to a different route
    navigate(-1);
  };

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
        className="flex items-center justify-center gap-2 mt-3 color-white transform scale-80 max-w-fit bg-black text-white rounded-full p-2 border-none w-20 h-10 font-bold"
        onClick={handleClick}
      >
        <IoArrowBack />
        <h3 className="h3">back</h3>
      </button>
      <div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="xs:flex xs:flex-col xs:items-center gap-5 mt-[1rem] xl:flex  xl:justify-between xl:mt-[2rem]"
        >
          <div>
            <h2 className="text-left mb-4 font-bold text-[18px] xl:text-[25px] lg:text-[22px] md:text-[20px]">
              {recipe.title}
            </h2>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-2xl"
            />
          </div>

          <div className="xl:ml-[5rem] mt-5">
            <div className="flex gap-5 xl:gap-[4rem] ">
              <button
                className={active === "instructions" ? "actives" : ""}
                onClick={() => setActive("instructions")}
              >
                Instructions
              </button>
              <button
                className={active === "ingredients" ? "actives" : ""}
                onClick={() => setActive("ingredients")}
              >
                Ingredients
              </button>
            </div>
            <div className="text-[14px]  xl:w-[35rem] mt-4">
              {active === "instructions" && (
                <div>
                  <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                  <br />
                  <p
                    dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                  ></p>
                </div>
              )}
              {active === "ingredients" && (
                <div>
                  <ul>
                    {recipe.extendedIngredients.map((ingredient) => (
                      <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Recipe;
