import { useState } from 'react';
import { Video, Camera, Play } from 'lucide-react';

const categories = ['All', 'Videos', 'Photography', 'Commercial'];

const portfolioItems = [
  { id: 1, type: 'video', category: 'Videos', title: 'Cinematic Showreel', image: 'https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 2, type: 'photo', category: 'Photography', title: 'Urban Portraits', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 3, type: 'video', category: 'Commercial', title: 'Brand Campaign', image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 4, type: 'photo', category: 'Photography', title: 'Fashion Editorial', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 5, type: 'video', category: 'Videos', title: 'Documentary Short', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 6, type: 'photo', category: 'Commercial', title: 'Product Photography', image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 7, type: 'video', category: 'Videos', title: 'Music Video', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 8, type: 'photo', category: 'Photography', title: 'Street Photography', image: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1200' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="min-h-screen py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center reveal-on-scroll">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            PORTFOLIO
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16 reveal-on-scroll">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 uppercase tracking-widest text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'bg-transparent text-gray-400 border border-gray-600 hover:border-white hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="portfolio-item group relative aspect-square overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    {item.type === 'video' ? (
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <Camera className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
              </div>

              <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                hoveredItem === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                {item.type === 'video' ? (
                  <Video className="w-5 h-5 text-white" />
                ) : (
                  <Camera className="w-5 h-5 text-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
