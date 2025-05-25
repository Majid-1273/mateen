import { useEffect, useState } from 'react';
import { MapPin, Clock, Users, Phone, Mail } from 'lucide-react';

const LocationsSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const locations = [
    {
      country: "Pakistan",
      city: "Lahore",
      address: "145 Craft Street, Gulberg III, Lahore",
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      flag: "🇵🇰",
      symbol: "🌙",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      specialties: ["Traditional Embroidery", "Hand Stitching", "Fabric Sourcing"],
      workingHours: "8:00 AM - 6:00 PM (PKT)",
      team: "25+ Master Artisans",
      phone: "+92 42 3587 4521",
      email: "lahore@samundarpaar.com"
    },
    {
      country: "England",
      city: "Manchester",
      address: "37 Textile Lane, Manchester M4 1HQ",
      color: "from-red-600 to-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      flag: "🇬🇧",
      symbol: "👑",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      specialties: ["Precision Tailoring", "Quality Control", "Design Innovation"],
      workingHours: "9:00 AM - 5:00 PM (GMT)",
      team: "15+ Expert Tailors",
      phone: "+44 161 234 5678",
      email: "manchester@samundarpaar.com"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-green-50" style={{ height: 'calc(100vh - 80px)' }}>
      <div className="container mx-auto px-4 lg:px-6 h-full py-4 flex flex-col">
        {/* Header */}
        <div className={`text-center mb-3 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            <span className="bg-gradient-to-r from-green-700 via-red-600 to-green-700 bg-clip-text text-transparent">
              Our Global Workshops
            </span>
          </h2>
          <div className="flex items-center justify-center space-x-3">
            <span className="text-green-700 font-medium text-sm">🌙 Pakistan</span>
            <span className="text-lg">✈️</span>
            <span className="text-red-700 font-medium text-sm">England 👑</span>
          </div>
        </div>

        {/* Locations Grid - Now takes remaining space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 flex-1 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${location.bgColor} border-2 ${location.borderColor} h-full flex flex-col transition-all duration-700 delay-${index * 200} ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Image Header */}
              <div className="relative h-32 lg:h-40 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={`${location.city} workshop`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${location.color} opacity-80`}></div>
                
                {/* Country Badge */}
                <div className={`absolute top-2 left-2 bg-gradient-to-r ${location.color} text-white py-1 px-2 rounded-full shadow-lg flex items-center space-x-2`}>
                  <span className="text-xs">{location.flag}</span>
                  <span className="font-semibold text-xs">{location.country}</span>
                </div>

                {/* Cultural Symbol */}
                <div className="absolute top-2 right-2 text-xl opacity-80">
                  {location.symbol}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 lg:p-6 flex-1 flex flex-col">
                {/* City Header */}
                <div className="mb-3 lg:mb-4">
                  <h3 className={`text-lg lg:text-xl font-bold mb-2 bg-gradient-to-r ${location.color} bg-clip-text text-transparent`}>
                    {location.city} Workshop
                  </h3>
                  <div className="flex items-start space-x-2">
                    <MapPin className="text-gray-500 mt-1 flex-shrink-0 w-4 h-4" />
                    <p className="text-gray-700 font-medium text-sm lg:text-base">{location.address}</p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4 lg:mb-5">
                  <h4 className="text-sm lg:text-base font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">⭐</span>
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {location.specialties.map((specialty, idx) => (
                      <span 
                        key={idx} 
                        className={`px-3 py-1 bg-gradient-to-r ${location.color} text-white text-xs lg:text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-300`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6 flex-1">
                  <div className="flex items-center space-x-3 p-2 lg:p-3 bg-white/50 rounded-lg">
                    <div className={`bg-gradient-to-r ${location.color} p-2 rounded-full shadow-sm`}>
                      <Clock className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs lg:text-sm text-gray-600 block">Working Hours</span>
                      <p className="font-medium text-gray-800 text-sm lg:text-base">{location.workingHours}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-2 lg:p-3 bg-white/50 rounded-lg">
                    <div className={`bg-gradient-to-r ${location.color} p-2 rounded-full shadow-sm`}>
                      <Users className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs lg:text-sm text-gray-600 block">Our Team</span>
                      <p className="font-medium text-gray-800 text-sm lg:text-base">{location.team}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-2 lg:p-3 bg-white/50 rounded-lg">
                    <div className={`bg-gradient-to-r ${location.color} p-2 rounded-full shadow-sm`}>
                      <Phone className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs lg:text-sm text-gray-600 block">Phone</span>
                      <p className="font-medium text-gray-800 text-sm lg:text-base">{location.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-2 lg:p-3 bg-white/50 rounded-lg">
                    <div className={`bg-gradient-to-r ${location.color} p-2 rounded-full shadow-sm`}>
                      <Mail className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs lg:text-sm text-gray-600 block">Email</span>
                      <p className="font-medium text-gray-800 text-sm lg:text-base">{location.email}</p>
                    </div>
                  </div>
                </div>

                {/* Visit Button */}
                <button className={`w-full bg-gradient-to-r ${location.color} hover:opacity-90 text-white py-3 lg:py-4 px-4 lg:px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm lg:text-base`}>
                  <span>Contact {location.city}</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;