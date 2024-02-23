import { useEffect, useState } from "react";
import Search from "./Search";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

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
  console.log(recipe);

  useEffect(() => {
    getRecipe();
  }, [params.name]);

  const handleClick = () => {
    // Navigate to a different route
    navigate(-1);
  };

  return (
    <div>
      <Search />
      <button
        className="flex items-center justify-center gap-2 mt-3 color-white transform scale-80 max-w-fit bg-black text-white rounded-full p-2 border-none w-20 h-10"
        onClick={handleClick}
      >
        <IoArrowBack />
        <h3 className="h3">back</h3>
      </button>
      <div className="flex justify-between mt-[5rem]">
        <div>
          <h2 className="text-center mb-2 font-bold text-[18px]">
            {recipe.title}
          </h2>
          <img src={recipe.image} alt={recipe.title} className="rounded-2xl" />
        </div>

        <div className=" ml-[5rem]">
          <div className="flex gap-[4rem]">
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
          <div className="w-[35rem] mt-4 -ml-4">
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
      </div>
    </div>
  );
};
export default Recipe;