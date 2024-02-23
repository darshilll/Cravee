import Category from "../components/Category";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Veggies from "../components/Veggies";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Search />
      <Category />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Veggies />
        <Popular />
      </motion.div>
    </>
  );
};
export default Home;
