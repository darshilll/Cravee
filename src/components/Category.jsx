import { FaPizzaSlice } from "react-icons/fa6";
import { GiHamburger, GiChickenOven, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useState } from "react";

const Category = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonId, e) => {
    e.preventDefault();
    setActiveButton(buttonId);
  };
  console.log(activeButton);

  return (
    <div className="Slink">
      <button
        className={activeButton === 1 ? "active" : ""}
        onClick={(e) => handleClick(1, e)}
      >
        <NavLink to="/" className="Links">
          <IoIosHome size={20} />
          <h3 className="h3">Home</h3>
        </NavLink>
      </button>
      <button
        className={activeButton === 2 ? "active" : ""}
        onClick={(e) => handleClick(2, e)}
      >
        <NavLink to="/cuisine/indian" className="Links">
          <GiChickenOven size={20} />
          <h3 className="h3">Indian</h3>
        </NavLink>
      </button>
      <button
        className={activeButton === 3 ? "active" : ""}
        onClick={(e) => handleClick(3, e)}
      >
        <NavLink to="/cuisine/italian" className="Links">
          <GiHamburger size={20} />
          <h3 className="h3">Italian</h3>
        </NavLink>
      </button>
      <button
        className={activeButton === 4 ? "active" : ""}
        onClick={(e) => handleClick(4, e)}
      >
        <NavLink to="/cuisine/american" className="Links">
          <FaPizzaSlice size={20} />
          <h3 className="h3">Amercian</h3>
        </NavLink>
      </button>
      <button
        className={activeButton === 5 ? "active" : ""}
        onClick={(e) => handleClick(5, e)}
      >
        <NavLink to="/cuisine/japanese" className="Links">
          <GiNoodles size={20} />
          <h3 className="h3">Japanese</h3>
        </NavLink>
      </button>
    </div>
  );
};
export default Category;
