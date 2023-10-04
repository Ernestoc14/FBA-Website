import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";

function HomePage() {
  return (
    <main className="overflow-hidden w-full">
      <Hero />
      <h1 className="font-bold text-3xl flex text-center justify-center mt-12">Next Section</h1>
      <ProductSection />
    </main>
  );
}

export default HomePage;
