import "./App.css";
import { Navabar, Footer, CTA, Hero, Foods } from "./components";

export const App = () => {
  return (
    <div>
      <Navabar />
      <Hero />

      <CTA />
      <Foods />
      <Footer />
    </div>
  );
};
