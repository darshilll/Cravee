import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "@splidejs/splide/css/core";
import { Link } from "react-router-dom";

const Popular = () => {
  const [random, setRandom] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

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
        <Slider {...settings} className="slick-slider">
          {random.map((item) => {
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
export default Popular;
