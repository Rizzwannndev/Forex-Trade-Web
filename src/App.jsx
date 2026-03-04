import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    return () => {
      smoother && smoother.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="bg-black text-zinc-100">
      <Navbar />
      <div id="smooth-content">
        <HomePage />
      </div>
    </div>
  );
};

export default App;