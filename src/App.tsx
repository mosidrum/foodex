import "./App.css";
import { Navabar, Footer, CTA, Hero, Foods } from "./components";

export const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="md:flex md:h-screen md:py-8 md:px-12">
        <Navabar />
        <div className="md:flex-1 md:overflow-y-auto">
          <Hero />
          <CTA />
          <Foods />
          <div className="h-1 w-full bg-line rounded-lg my-16" />
          <Footer />
        </div>
      </div>
    </div>
  );
};
