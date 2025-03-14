import React from "react";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Categories from "./components/home/Categories";
import HowItWorks from "./components/home/HowItWorks";
import Prizes from "./components/home/Prizes";
import Sponsors from "./components/home/Sponsors";
import FAQ from "./components/home/FAQ";
import CTA from "./components/home/CTA";
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Hero />
        <About />
        <Categories />
        <HowItWorks />
        <Prizes />
        <CTA />
        <Sponsors />
        <FAQ />
      </div>
    </main>
  );
};

export default Home;