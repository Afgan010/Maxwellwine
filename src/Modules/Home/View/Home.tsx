import FamilyEstate from "./Sections/FamilyEstate";
import Hero from "./Sections/Hero";
import Products from "./Sections/Products";
import ShopNow from "./Sections/ShopNow";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <FamilyEstate />
      <ShopNow />
      <Products />
    </main>
  );
};

export default Home;
