import { useEffect, useState } from 'react';

const StorySection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50/20" style={{ height: 'calc(200vh - 160px)' }}>
      <div className="container mx-auto px-4 lg:px-6 h-full py-6">
        {/* Header Section with Images */}
        <div className={`text-center mb-8 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center mb-4 space-x-6">
            <img 
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=100&h=100&fit=crop&crop=center" 
              alt="Pakistan Heritage"
              className="w-12 h-12 rounded-full object-cover border-3 border-green-700 shadow-lg"
            />
            <div className="flex items-center">
              <div className="w-6 h-0.5 bg-gradient-to-r from-green-700 to-red-600"></div>
              <div className="mx-2 text-xl">✨</div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-red-600 to-green-700"></div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=100&h=100&fit=crop&crop=center" 
              alt="England Heritage"
              className="w-12 h-12 rounded-full object-cover border-3 border-red-600 shadow-lg"
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-700 via-red-600 to-green-700 bg-clip-text text-transparent mb-3">
            Our Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-red-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            The extraordinary story of how Pakistani craftsmanship and English elegance came together to create something truly magnificent
          </p>
        </div>

        {/* Timeline Section */}
        <div className="flex flex-col max-w-5xl mx-auto space-y-8">
          
          {/* 1995 - Beginning */}
          <div className={`flex flex-col lg:flex-row items-center transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="lg:w-1/3 mb-4 lg:mb-0 lg:pr-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center" 
                  alt="Manchester Workshop 1995"
                  className="w-full h-40 lg:h-48 object-cover rounded-xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold">1995</h3>
                  <p className="text-xs opacity-90">Manchester, England</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-green-700 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-700 to-green-800 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-green-800">The Beginning</h3>
                </div>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Founded in Manchester by Sarah Thompson and Adeel Khan, our journey began in a small workshop where British tailoring precision met Pakistani textile artistry. This unique combination quickly gained recognition.
                </p>
                <div className="mt-3 flex items-center text-xs text-green-700">
                  <span className="mr-2">🌟</span>
                  <span>First workshop established</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2003 - Expansion */}
          <div className={`flex flex-col lg:flex-row-reverse items-center transition-all duration-1000 delay-500 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="lg:w-1/3 mb-4 lg:mb-0 lg:pl-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center" 
                  alt="Lahore Workshop 2003"
                  className="w-full h-40 lg:h-48 object-cover rounded-xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold">2003</h3>
                  <p className="text-xs opacity-90">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-red-600">Expanding Our Roots</h3>
                </div>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  With our Lahore workshop opening, we began working directly with Pakistani artisans skilled in traditional embroidery and textile techniques, creating a true bridge between two rich cultural traditions.
                </p>
                <div className="mt-3 flex items-center text-xs text-red-600">
                  <span className="mr-2">🎨</span>
                  <span>Traditional craftsmanship integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Today - Present Excellence */}
          <div className={`flex flex-col lg:flex-row items-center transition-all duration-1000 delay-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="lg:w-1/3 mb-4 lg:mb-0 lg:pr-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&crop=center" 
                  alt="Modern Fashion Show"
                  className="w-full h-40 lg:h-48 object-cover rounded-xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold">Today</h3>
                  <p className="text-xs opacity-90">Global Recognition</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-gradient-to-br from-green-700 to-red-600 p-5 rounded-xl shadow-lg text-white hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-sm mr-3">
                    ✨
                  </div>
                  <h3 className="text-lg font-bold">Present Day Excellence</h3>
                </div>
                <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-3">
                  Today, we're proud pioneers in sustainable, culturally-rich textile production. Our designs grace international fashion shows worldwide.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-lg font-bold">25+</div>
                    <div className="text-xs opacity-90">Countries Served</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-lg font-bold">500+</div>
                    <div className="text-xs opacity-90">Artisan Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Bridge Section */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-1000 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-3xl mx-auto border-t-4 border-gradient-to-r from-green-700 to-red-600">
            <div className="flex justify-center items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=80&h=80&fit=crop&crop=center" 
                alt="Pakistan Symbol"
                className="w-10 h-10 rounded-full object-cover border-2 border-green-700"
              />
              <div className="mx-3 text-2xl">🤝</div>
              <img 
                src="https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=80&h=80&fit=crop&crop=center" 
                alt="England Symbol"
                className="w-10 h-10 rounded-full object-cover border-2 border-red-600"
              />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-700 to-red-600 bg-clip-text text-transparent mb-3">
              Bridging Two Worlds
            </h3>
            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              Our story is more than business—it's about creating harmony between two beautiful cultures, 
              celebrating the rich traditions of Pakistan and the refined elegance of England in every stitch, 
              every design, and every piece we create.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;