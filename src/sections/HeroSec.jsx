import { ArrowRight, Command } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSec = () => {
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          rotateX: 15,
          rotateY: -10,
          rotateZ: -6,
          y: 120,
          opacity: 0.8,
          transformPerspective: 1000,
        },
        {
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative container mx-auto px-4 pt-40 pb-20">
      
      {/* Decorative Subtitle */}
      <div className="flex w-fit py-2 mb-4 px-4 cursor-pointer rounded-full glass">
        <span className="text-sm font-md text-zinc-300">
          <Command className="w-4 h-4 inline-block mr-2" />
          Next-gen forex trading platform
        </span>
      </div>

      {/* Hero Text */}
      <div className="max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl mb-4 tracking-tight text-left">
          <span className="clash-display grad1">
            Trade forex with
          </span>
          <br />
          <span className="text-zinc-50 font-medium clash-display">
            confidence & security
          </span>
        </h1>

        <p className="text-lg text-zinc-300/80 mb-8 max-w-2xl text-left">
          Experience seamless forex trading with advanced features, real-time analytics, and institutional-grade security.
          <span className="text-zinc-200">
            {" "}Start trading in minutes.
          </span>
        </p>

        <div className="col sm:flex-row gap-4 items-start">
          <button className="bg-indigo-500 text-base clash-display px-4 py-3 rounded-full cursor-pointer hover:-translate-y-1 transition1 hover:bg-indigo-500/20">
            Start Trading Now
          </button>
          <button className="text-zinc-50 text-base clash-display glass px-4 py-3 centered-row gap-2 rounded-full cursor-pointer hover:-translate-y-1 transition1 hover:bg-indigo-500/20">
            View Markets <ArrowRight />
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative mx-auto max-w-5xl mt-20 perspective-[1000px]">
        <div
          ref={imageRef}
          className="glass rounded-xl overflow-hidden will-change-transform"
        >
          <img
            src="./chart2.png"
            alt="hero-image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSec;