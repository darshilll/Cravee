import { Link } from "react-router-dom";
import Category from "../components/Category";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Veggies from "../components/Veggies";
import { motion } from "framer-motion";
import { SiCodechef } from "react-icons/si";

const Home = () => {
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
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Veggies />
        <br />
        <Popular />
      </motion.div>
    </>
  );
};
export default Home;
