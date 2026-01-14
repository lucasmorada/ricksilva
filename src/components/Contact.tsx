import { Mail, Instagram, Linkedin, Youtube, Send } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: '@ricksilva', href: '#' },
  { icon: Linkedin, label: 'Rick Silva', href: '#' },
  { icon: Youtube, label: 'Rick Silva', href: '#' },
];

export default function Contact() {
  return (
    <section className="min-h-screen py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal-on-scroll">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            VAMOS TRABALHAR<br />JUNTOS
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="reveal-on-scroll">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Tem um projeto em mente? Vamos criar algo extraordinário juntos. Seja um ensaio comercial, um editorial ou uma colaboração criativa, estou pronto para transformar sua visão em algo real, marcante e memorável.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">Email</p>
                    <p className="text-lg font-medium">rick.silva@example.com</p>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                    Me siga por aqui :D
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll delay-2">
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full bg-white/5 border border-gray-700 px-6 py-4 focus:outline-none focus:border-white transition-colors duration-300 text-white placeholder-gray-500"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-gray-700 px-6 py-4 focus:outline-none focus:border-white transition-colors duration-300 text-white placeholder-gray-500"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full bg-white/5 border border-gray-700 px-6 py-4 focus:outline-none focus:border-white transition-colors duration-300 text-white placeholder-gray-500"
                />
              </div>

              <div className="relative">
                <textarea
                  placeholder="Qual a boa?"
                  rows={6}
                  className="w-full bg-white/5 border border-gray-700 px-6 py-4 focus:outline-none focus:border-white transition-colors duration-300 text-white placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative w-full bg-white text-black py-4 px-8 font-bold uppercase tracking-widest text-sm overflow-hidden transition-all duration-500 hover:bg-gray-200"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Encaminhar Mensagem</span>
                  <Send className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Rick Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  );
}
