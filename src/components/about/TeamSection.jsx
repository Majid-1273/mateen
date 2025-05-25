import { useEffect, useState } from 'react';
import { MapPin, Award, Users, Heart } from 'lucide-react';

const TeamSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const team = [
    {
      name: "Sarah Thompson",
      role: "Co-Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
      bio: "With 25 years in British textile design, Sarah brings a sharp eye for precision and contemporary aesthetics.",
      location: "Manchester, England",
      flag: "👑",
      specialty: "British Tailoring Excellence",
      experience: "25+ Years"
    },
    {
      name: "Adeel Khan",
      role: "Co-Founder & Master Craftsman",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      bio: "Adeel's family has been in the textile industry for generations, bringing authentic Pakistani artisanal methods to our work.",
      location: "Lahore, Pakistan",
      flag: "🌙",
      specialty: "Traditional Pakistani Craftsmanship",
      experience: "30+ Years"
    },
    {
      name: "Emma Wilson",
      role: "Head of UK Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      bio: "Emma ensures our British workshops maintain the highest standards of quality and efficiency.",
      location: "London, England",
      flag: "👑",
      specialty: "Operations & Quality Control",
      experience: "15+ Years"
    },
    {
      name: "Zainab Ahmed",
      role: "Lead Designer, Pakistan Studio",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
      bio: "Zainab's innovative designs blend traditional Pakistani patterns with contemporary fashion trends.",
      location: "Karachi, Pakistan",
      flag: "🌙",
      specialty: "Contemporary Pakistani Design",
      experience: "12+ Years"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-red-50" style={{ height: 'calc(200vh - 160px)' }}>
      <div className="container mx-auto px-4 lg:px-6 h-full py-6">
        {/* Header Section */}
        <div className={`text-center mb-8 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center mb-4">
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-green-700" />
              <div className="w-6 h-0.5 bg-gradient-to-r from-green-700 to-red-600"></div>
              <Heart className="w-5 h-5 text-red-600" />
              <div className="w-6 h-0.5 bg-gradient-to-r from-red-600 to-green-700"></div>
              <Award className="w-6 h-6 text-green-700" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-700 via-red-600 to-green-700 bg-clip-text text-transparent mb-3">
            Meet Our Team
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-red-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            The talented individuals who bring our vision to life across Pakistan and England, 
            weaving together cultures and craftsmanship with passion and precision
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`group relative transition-all duration-700 delay-${index * 200} ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Flag and Location Overlay */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <span className="text-sm">{member.flag}</span>
                    <MapPin className="w-3 h-3 text-gray-600" />
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-green-700 to-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {member.experience}
                  </div>
                  
                  {/* Hover Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-medium">{member.specialty}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-green-700 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className={`font-semibold text-xs mb-2 ${
                      member.flag === '🌙' ? 'text-green-700' : 'text-red-600'
                    }`}>
                      {member.role}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <MapPin className="w-3 h-3 mr-1" />
                      {member.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-1">
                    {member.bio}
                  </p>
                  
                  {/* Specialty Badge */}
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    member.flag === '🌙' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {member.specialty}
                  </div>
                </div>

                {/* Cultural Border */}
                <div className={`h-1 ${
                  member.flag === '🌙' 
                    ? 'bg-gradient-to-r from-green-700 to-green-500' 
                    : 'bg-gradient-to-r from-red-600 to-red-400'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats Section */}
        <div className={`mb-8 transition-all duration-1000 delay-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-green-700 to-red-600 rounded-2xl p-6 text-white">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Our Global Impact</h3>
              <p className="text-white/90 text-sm">United by passion, divided by continents, connected by craft</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">2</div>
                <div className="text-xs text-white/80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-xs text-white/80">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">75+</div>
                <div className="text-xs text-white/80">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">1000+</div>
                <div className="text-xs text-white/80">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Unity Message */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-3xl mx-auto border-t-4 border-gradient-to-r from-green-700 to-red-600">
            <div className="flex justify-center items-center mb-4 space-x-3">
              <span className="text-xl">🌙</span>
              <span className="text-lg text-gray-400">+</span>
              <span className="text-xl">👑</span>
              <span className="text-lg text-gray-400">=</span>
              <span className="text-xl">✨</span>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-700 to-red-600 bg-clip-text text-transparent mb-3">
              Where Cultures Unite
            </h3>
            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              Our team represents the beautiful harmony between Pakistani tradition and English innovation. 
              Together, we create not just textiles, but bridges between cultures, stories woven in fabric, 
              and dreams stitched with care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;