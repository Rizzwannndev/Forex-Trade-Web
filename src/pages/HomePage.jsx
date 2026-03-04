import CtaSection from "../sections/CtaSection"
import FeaturesSection from "../sections/FeaturesSection"
import HeroSec from "../sections/HeroSec"
import LogoCarousel from "../sections/LogoCarousel"
import PricingSection from "../sections/PricingSection"
import TestimonialSection from "../sections/TestimonialSection"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="bg-black mx-auto">
        {/* Hero Section */}
            <HeroSec />
        {/* Logo Carousel Section */}
            <LogoCarousel />
        {/* Features Section */}
            <FeaturesSection />
        {/* Pricing Section */}
            <PricingSection />
        {/* Testimonial Section */}
            <TestimonialSection />
        {/* CTA Section */}
            <CtaSection />
        {/* Footer */}
            <Footer />
    </div>
  )
}

export default HomePage