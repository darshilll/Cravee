import { FaPizzaSlice } from "react-icons/fa6";
import { GiHamburger, GiChickenOven, GiNoodles } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

const Category = () => {
  return (
    <NavLink className="Slink ">
      <Link to="/" className="Links transform scale-80">
        <IoIosHome size={20} />
        <h3 className="h3">Home</h3>
      </Link>
      <Link to="/cuisine/indian" className="Links transform scale-80">
        <GiChickenOven size={20} />
        <h3 className="h3">Indian</h3>
      </Link>
      <Link to="/cuisine/american" className="Links transform scale-80 ">
        <FaPizzaSlice size={20} />
        <h3 className="h3">American</h3>
      </Link>
      <Link to="/cuisine/italian" className="Links transform scale-80">
        <GiHamburger size={20} />
        <h3 className="h3">Italian</h3>
      </Link>
      <Link to="/cuisine/japanese" className="Links transform scale-80">
        <GiNoodles size={20} />
        <h3 className="h3">Japanese</h3>
      </Link>
    </NavLink>
  );
};
export default Category;
