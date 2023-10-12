import CustomersReview from "./components/CustomersReview";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";

function HomePage() {
  return (
    <main className="overflow-hidden w-full">
      <Hero />
      <ProductSection />
      <CustomersReview /> 
    </main>
  );
}

export default HomePage;
