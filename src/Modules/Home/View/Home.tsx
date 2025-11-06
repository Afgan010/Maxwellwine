import FamilyEstate from "./Sections/FamilyEstate";
import Hero from "./Sections/Hero";
import Products from "./Sections/Products";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <FamilyEstate />
      <Products />
    </main>
  );
};

export default Home;
