import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";
import { Link } from "react-router-dom";

const Popular = () => {
  const [random, setRandom] = useState([]);

  const getPopular = async () => {
    //store in localStorage
    const check = localStorage.getItem("popular");

    if (check) {
      setRandom(JSON.parse(check));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=d0e581a34a994e118b0a44f50b57dde5&number=9`
      );
      const data = await res.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setRandom(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <div className="px-[2rem]">
        <h1 className="font-bold text-[25px]">Popular Picks</h1>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {random.map((item) => {
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
export default Popular;
