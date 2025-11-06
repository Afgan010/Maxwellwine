import FamilyEstate from "./Sections/FamilyEstate";
import Hero from "./Sections/Hero";
import Products from "./Sections/Products";
import Restaurant from "./Sections/Restaurant";
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
      <Restaurant />
    </main>
  );
};

export default Home;
