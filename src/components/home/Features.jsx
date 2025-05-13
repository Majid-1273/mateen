import { useEffect } from "react";
import { GiSewingMachine, GiClothes } from "react-icons/gi";
import { FaHandsHelping, FaShippingFast, FaGlobeEurope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const features = [
    {
      icon: <GiSewingMachine className="h-10 w-10 text-blue-800" />,
      title: "Expert Craftsmanship",
      description: "Our skilled artisans blend traditional Pakistani techniques with precise British tailoring standards."
    },
    {
      icon: <GiClothes className="h-10 w-10 text-emerald-600" />,
      title: "Custom Designs",
      description: "From bespoke suits to traditional attire, we create garments that reflect your unique style."
    },
    {
      icon: <FaHandsHelping className="h-10 w-10 text-blue-800" />,
      title: "Ethical Production",
      description: "We ensure fair wages and excellent working conditions across all our facilities."
    },
    {
      icon: <FaShippingFast className="h-10 w-10 text-emerald-600" />,
      title: "Global Shipping",
      description: "We deliver our products worldwide, bringing cross-cultural fashion to your doorstep."
    },
    {
      icon: <FaGlobeEurope className="h-10 w-10 text-blue-800" />,
      title: "Cultural Exchange",
      description: "Every piece tells a story of cultural fusion and celebrates our shared textile heritage."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-900">Why Choose Stitch Cultures</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our unique blend of British and Pakistani textile traditions creates exceptional products with cultural richness and technical excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center h-16">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-blue-900 text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
