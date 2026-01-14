import { Camera, Video, Film, Award } from 'lucide-react';

const skills = [
  { name: 'Videography', percentage: 95, icon: Video },
  { name: 'Photography', percentage: 90, icon: Camera },
  { name: 'Video Editing', percentage: 98, icon: Film },
  { name: 'Color Grading', percentage: 92, icon: Award },
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '10+', label: 'Years Experience' },
  { number: '50+', label: 'Happy Clients' },
  { number: '100+', label: 'Awards Won' },
];

export default function About() {
  return (
    <section className="min-h-screen py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="reveal-on-scroll">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
              ABOUT<br />ME
            </h2>
            <div className="w-24 h-1 bg-white mb-8"></div>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p className="text-lg">
                I'm Rick Silva, a visual storyteller with over a decade of experience crafting compelling narratives through the lens.
              </p>
              <p className="text-lg">
                My passion lies in capturing moments that resonate, creating visual experiences that transcend the ordinary. Whether it's through dynamic videography, striking photography, or meticulous editing, I bring stories to life with precision and artistry.
              </p>
              <p className="text-lg">
                Specializing in commercial, editorial, and documentary work, I've collaborated with brands and individuals worldwide to create content that not only looks stunning but also connects on a deeper level.
              </p>
            </div>
          </div>

          <div className="reveal-on-scroll delay-2">
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-5 h-5 text-white" />
                      <span className="uppercase tracking-wider text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-2xl font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-white to-gray-400 skill-bar"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal-on-scroll">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center stat-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-400 uppercase tracking-wider text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
