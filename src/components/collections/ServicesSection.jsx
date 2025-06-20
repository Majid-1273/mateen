// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      title: "Stitched",
      description: "Ready-to-wear garments from premium Pakistani brands",
      icon: "👔",
      color: "from-red-400 to-red-600"
    },
    {
      title: "Unstitched",
      description: "Premium fabrics for custom tailoring",
      icon: "🧵",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Get Stitched",
      description: "We'll get your unstitched clothes tailored by expert Pakistani tailors",
      icon: "✂️",
      color: "from-red-500 to-green-500"
    },
    {
      title: "Live Shopping",
      description: "Personal shopping assistance via video call",
      icon: "📱",
      color: "from-green-500 to-red-500"
    }
  ];

  return (
    <div className=" min-h-[calc(100vh-80px)] bg-white py-8 sm:py-12 lg:py-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">Our Services</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            From ready-made to custom tailoring, we offer comprehensive fashion solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col justify-center`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;