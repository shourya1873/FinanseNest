import {HeroSection} from "@/components/landing/hero-section";
import {FeaturesSection} from "@/components/landing/features-section";
import {WhySection} from "@/components/landing/why-section";
// import {TestimonialsSection} from "@/components/landing/testimonials-section";
import {PricingSection} from "@/components/landing/pricing-section";
import {FaqSection} from "@/components/landing/faq-section";

export default function Home() {
    return (
        <div className="">
            <main className="flex-grow">
                <HeroSection/>
                <FeaturesSection/>
                <WhySection/>
                {/*<TestimonialsSection/>*/}
                <PricingSection/>
                <FaqSection/>
            </main>
        </div>
    );
}
