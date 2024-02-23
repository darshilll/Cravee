import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Veggies = () => {
  const [veggies, setVeggies] = useState([]);

  const getVeggies = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggies(JSON.parse(check));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=d0e581a34a994e118b0a44f50b57dde5&number=9&tags=vegetarian`
      );

      const data = await res.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggies(data.recipes);
    }
  };

  useEffect(() => {
    getVeggies();
  }, []);

  return (
    <div>
      <div className="px-[2rem]">
        <h1 className="font-bold text-[25px]">Our Vegetarian Picks</h1>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {veggies.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="card relative">
                  <Link to={"/recipe/" + item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="recipe-img"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#443b30]"></div>
                    <p className="title">{item.title}</p>
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};
export default Veggies;
