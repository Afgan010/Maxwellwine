import FamilyEstate from "./Sections/FamilyEstate";
import Hero from "./Sections/Hero";
import Products from "./Sections/Products";
import ShopNow from "./Sections/ShopNow";
import WineClub from "./Sections/WineClub";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <FamilyEstate />
      <ShopNow />
      <Products />
      <WineClub />
    </main>
  );
};

export default Home;
