import React from "react";
import Herosection from "../components/sections/LandingPageSections/Herosection";
import Stories from "../components/sections/LandingPageSections/Stories";
import Testimonials from "../components/sections/LandingPageSections/Testimonials";
import Features from "../components/sections/LandingPageSections/Features";
import ContactUs from "../components/sections/LandingPageSections/ContactUs";
import Footer from "../components/sections/LandingPageSections/Footer";

export default function LandingPage() {
  return (
    <>
      <Herosection />
      <Stories />
      <Testimonials />
      <Features />
      <ContactUs />
      <Footer />
    </>
  );
}
