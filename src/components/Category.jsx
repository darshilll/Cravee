import { FaPizzaSlice } from "react-icons/fa6";
import { GiHamburger, GiChickenOven, GiNoodles } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useState } from "react";

const Category = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <NavLink className="Slink">
      <button
        className={activeButton === 1 ? "active" : ""}
        onClick={() => handleClick(1)}
      >
        <Link to="/" className="Links">
          <IoIosHome size={20} />
          <h3 className="h3">Home</h3>
        </Link>
      </button>
      <button
        className={activeButton === 2 ? "active" : ""}
        onClick={() => handleClick(2)}
      >
        <Link to="/cuisine/indian" className="Links">
          <GiChickenOven size={20} />
          <h3 className="h3">Indian</h3>
        </Link>
      </button>
      <button
        className={activeButton === 3 ? "active" : ""}
        onClick={() => handleClick(3)}
      >
        <Link to="/cuisine/italian" className="Links">
          <GiHamburger size={20} />
          <h3 className="h3">Italian</h3>
        </Link>
      </button>
      <button
        className={activeButton === 4 ? "active" : ""}
        onClick={() => handleClick(4)}
      >
        <Link to="/cuisine/american" className="Links">
          <FaPizzaSlice size={20} />
          <h3 className="h3">Amercian</h3>
        </Link>
      </button>
      <button
        className={activeButton === 5 ? "active" : ""}
        onClick={() => handleClick(5)}
      >
        <Link to="/cuisine/japanese" className="Links">
          <GiNoodles size={20} />
          <h3 className="h3">Japanese</h3>
        </Link>
      </button>
    </NavLink>
  );
};
export default Category;
