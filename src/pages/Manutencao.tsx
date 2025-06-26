import { Link } from "react-router-dom";
import { ArrowLeft, Settings, Clock, Mail, Users, BadgeCheck, Flame, Share2 } from "lucide-react";
const Manutencao = () => {
  const triangles = Array.from({ length: 100 }, (_, i) => {
    const size = Math.random() * 50 + 10;
    const rotate = Math.random() * 360;
    const x = Math.random() * 1000;
    const y = Math.random() * 1000;
    const hue = Math.random() * 360;
    const delay = i * -0.1;
    
    return {
      id: i,
      size,
      rotate,
      x,
      y,
      hue,
      delay,
      duration: 10 + Math.random() * 5
    };
  });

  return (
    <>
      <style>{`
        .triangle-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          background-image: radial-gradient(circle at center, white 0%, #222 10%, black 60%);
          overflow: hidden;
          transform-style: preserve-3d;
          perspective: 800px;
        }
        
        .triangle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          filter: grayscale(1);
          opacity: 0;
        }
        
        ${triangles.map(tri => `
          .triangle-${tri.id} {
            border-top: ${tri.size}px solid hsl(${tri.hue}, 100%, 50%);
            border-right: ${tri.size}px solid transparent;
            border-left: ${tri.size}px solid transparent;
            margin-left: -${tri.size/2}px;
            margin-top: -${tri.size/2}px;
            animation: float${tri.id} ${tri.duration}s infinite linear;
            animation-delay: ${tri.delay}s;
          }
          
          @keyframes float${tri.id} {
            0% {
              opacity: 1;
              transform: rotate(${tri.rotate * 1.5}deg) translate3d(${tri.x}px, ${tri.y}px, 1000px) scale(1);
            }
            100% {
              opacity: 0;
              transform: rotate(${tri.rotate}deg) translate3d(0, 0, -1500px) scale(0);
            }
          }
        `).join('')}
      `}</style>
      
      <div className="min-h-screen relative flex flex-col">
        <div className="triangle-bg">
          {triangles.map(tri => (
            <div key={tri.id} className={`triangle triangle-${tri.id}`}></div>
          ))}
        </div>
        
        <header className="bg-white/10 backdrop-blur-md text-white py-6 relative z-10 border-b border-white/20">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-6 h-6" />
                <span className="hidden md:block">Voltar</span>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold">Clube Exclusivo</h1>
              <div className="w-20"></div>
            </div>
          </div>
        </header>
        <section className="py-20 flex-1 relative z-10">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto bg-transparent p-12">
              <Settings className="w-16 h-16 mx-auto mb-6 text-orange-500" />
              <h2 className="text-3xl font-bold text-white mb-4">Prepare-se para o Inesperado...</h2>
              <p className="text-lg text-white mb-8">
                Estamos preparando algo especial para você. Esta seção estará disponível em breve com novidades incríveis para a comunidade Peregrinos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pl-8">

              {[
                { icon: Users, title: "Clube Peregrinos", desc: "Comunidade Exclusiva.", color: "text-blue-500" },
                { icon: Flame, title: "Peregrinos EXTREME", desc: "Desafios Extremos e Aventuras Radicais.", color: "text-green-500" },
                { icon: Share2, title: "Explore Outdoor", desc: "Compartilhe Momentos Com sua Rede.", color: "text-purple-500" },
                { icon: BadgeCheck, title: "Adventure X Club", desc: "Descontos Imperdíveis e Sorteio de Viagem Custeado pela Peregrinos.Inc®", color: "text-red-500" }
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="flex items-center gap-3 text-left">
                  <Icon className={`w-6 h-6 ${color} flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-white">{title}</h4>
                    <p className="text-sm text-white">{desc}</p>
                  </div>
                </div>
              ))}
              </div>
              <div className="border-t pt-6">
                <p className="text-sm text-white mb-4">Enquanto isso, continue explorando nossos destinos e playlists.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {[
                    { to: "/brasil", label: "Destinos Brasil", color: "bg-green-500 hover:bg-green-600" },
                    { to: "/internacional", label: "Destinos Internacionais", color: "bg-blue-500 hover:bg-blue-600" },
                    { to: "/playlist", label: "Playlists", color: "bg-purple-500 hover:bg-purple-600" }
                  ].map(({ to, label, color }) => (
                    <Link key={to} to={to} className={`${color} text-white px-6 py-2 rounded-lg transition-colors shadow-lg hover:shadow-xl`}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-white/10 backdrop-blur-md text-center py-3 sm:py-4 mt-auto relative z-10 border-t border-white/20">
          <p className="text-white/90 text-xs sm:text-sm px-4">©2025 Peregrinos.Inc | Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
};

export default Manutencao;