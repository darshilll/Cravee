import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Veggies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

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
        <Slider {...settings} className="slick-slider">
          {veggies.map((item) => {
            return (
              <div className="card relative" key={item.id}>
                <Link to={"/recipe/" + item.id}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="recipe-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117]"></div>
                  <p className="title">{item.title}</p>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Veggies;
