import "./App.css";
import { Navabar, Footer, CTA, Hero, Foods } from "./components";

export const App = () => {
  return (
    <div>
      <Navabar />
      <Hero />

      <CTA />
      <Foods />
      <div className="h-1 w-full bg-line rounded-lg my-16" />
      <Footer />
    </div>
  );
};
