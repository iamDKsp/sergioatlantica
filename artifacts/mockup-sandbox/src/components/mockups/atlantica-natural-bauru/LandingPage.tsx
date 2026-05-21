import React, { useState, useEffect } from 'react';
import { 
  Leaf, Phone, Instagram, Facebook, Youtube, ChevronDown, Star, 
  ArrowRight, CheckCircle, Menu, X, Search, MapPin, Mail, ShieldCheck, 
  Award, TrendingUp, HeartPulse, Droplets, Sparkles, Gift, Check, Clock
} from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const WHATSAPP_LINK = "https://wa.me/5514999999999";

const fadeInObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

function useFadeIn() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, fadeInObserverOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

const FadeInSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const { ref, isVisible } = useFadeIn();
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
      <style>{`
        :root {
          --an-dark-green: #00482B;
          --an-medium-green: #518D3D;
          --an-gold: #C79F52;
          --an-beige: #F2E8D0;
          --an-white: #FFFFFF;
        }
        .bg-an-dark-green { background-color: var(--an-dark-green); }
        .text-an-dark-green { color: var(--an-dark-green); }
        .border-an-dark-green { border-color: var(--an-dark-green); }
        
        .bg-an-medium-green { background-color: var(--an-medium-green); }
        .text-an-medium-green { color: var(--an-medium-green); }
        .border-an-medium-green { border-color: var(--an-medium-green); }
        
        .bg-an-gold { background-color: var(--an-gold); }
        .text-an-gold { color: var(--an-gold); }
        .border-an-gold { border-color: var(--an-gold); }
        
        .bg-an-beige { background-color: var(--an-beige); }
        
        @keyframes pulse-whatsapp {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .animate-pulse-whatsapp {
          animation: pulse-whatsapp 2s infinite;
        }
        
        .gradient-hero {
          background: linear-gradient(135deg, var(--an-beige) 0%, var(--an-white) 100%);
        }
      `}</style>

      {/* 1. Barra superior discreta */}
      <div className="bg-an-dark-green text-white text-xs py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center z-50 relative">
        <div className="flex gap-4 mb-2 md:mb-0">
          <a href="#" className="hover:text-an-gold transition-colors"><Instagram size={14} /></a>
          <a href="#" className="hover:text-an-gold transition-colors"><Facebook size={14} /></a>
          <a href="#" className="hover:text-an-gold transition-colors"><Youtube size={14} /></a>
        </div>
        <div className="text-center font-medium opacity-90 hidden sm:block">
          Sinta o frescor da natureza e o poder do ozônio em cada gota.
        </div>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-an-gold transition-colors font-semibold">
          <Phone size={14} /> Atendimento pelo WhatsApp
        </a>
      </div>

      {/* 2. Header/Menu sticky */}
      <header className={`sticky top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="text-an-medium-green" size={28} />
            <span className="text-xl md:text-2xl font-bold text-an-dark-green tracking-tight">Atlântica Natural</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm text-slate-700">
            <a href="#inicio" className="hover:text-an-medium-green transition-colors">Início</a>
            <a href="#negocio" className="hover:text-an-medium-green transition-colors">Monte seu Negócio</a>
            <a href="#produtos" className="hover:text-an-medium-green transition-colors">Produtos</a>
            <a href="#lancamentos" className="hover:text-an-medium-green transition-colors">Lançamentos</a>
            <a href="#sobre" className="hover:text-an-medium-green transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-an-medium-green transition-colors">Contato</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="text-slate-500 hover:text-an-dark-green transition-colors">
              <Search size={20} />
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-an-gold hover:bg-yellow-600 text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all shadow-sm flex items-center gap-2">
              Quero ser consultor
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-an-dark-green" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 border-t border-slate-100">
            <a href="#inicio" className="text-slate-700 font-medium py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
            <a href="#negocio" className="text-slate-700 font-medium py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Monte seu Negócio</a>
            <a href="#produtos" className="text-slate-700 font-medium py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Produtos</a>
            <a href="#lancamentos" className="text-slate-700 font-medium py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Lançamentos</a>
            <a href="#sobre" className="text-slate-700 font-medium py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
            <a href="#contato" className="text-slate-700 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-an-gold text-white text-center px-4 py-3 rounded-md font-bold mt-2">
              Quero ser consultor
            </a>
          </div>
        )}
      </header>

      {/* 3. Hero Principal */}
      <section id="inicio" className="gradient-hero py-16 md:py-24 relative overflow-hidden">
        {/* Decorative leaves */}
        <div className="absolute top-10 left-10 opacity-10 text-an-medium-green rotate-45"><Leaf size={120} /></div>
        <div className="absolute bottom-10 right-10 opacity-10 text-an-medium-green -rotate-45"><Leaf size={150} /></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-2xl z-10">
              <FadeInSection>
                <div className="inline-block bg-white/80 backdrop-blur text-an-gold font-bold text-xs uppercase tracking-widest py-1.5 px-3 rounded-full mb-6 border border-an-gold/30">
                  Oportunidade Bauru e Região
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-an-dark-green leading-tight mb-6">
                  Monte seu negócio com produtos naturais, perfumaria e bem-estar
                </h1>
                <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
                  Tenha acesso a uma linha completa de produtos da Atlântica Natural e comece a vender com uma marca consolidada, catálogo diversificado e alto potencial de recompra.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-an-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2 group">
                    Quero montar meu negócio <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                  <a href="#produtos" className="bg-transparent hover:bg-an-dark-green/5 text-an-dark-green border-2 border-an-dark-green px-8 py-4 rounded-md font-bold text-lg transition-all text-center flex items-center justify-center">
                    Conhecer produtos
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-an-gold flex-shrink-0" size={20} />
                    <span className="text-sm font-medium text-slate-700">+ de 300 franquias pelo Brasil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-an-gold flex-shrink-0" size={20} />
                    <span className="text-sm font-medium text-slate-700">Alta recorrência de compra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-an-gold flex-shrink-0" size={20} />
                    <span className="text-sm font-medium text-slate-700">Venda online e presencial</span>
                  </div>
                </div>
              </FadeInSection>
            </div>
            
            <div className="flex-1 relative z-10 w-full">
              <FadeInSection delay={200}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-an-dark-green/10 border-4 border-white aspect-[4/3] lg:aspect-square flex items-center justify-center bg-white">
                  <img src="/__mockup/images/hero-products.png" alt="Produtos Atlântica Natural" className="w-full h-full object-cover" onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1615397323287-2121e7bce6d0?auto=format&fit=crop&q=80&w=1200";
                  }} />
                  {/* Fallback pattern just in case */}
                  <div className="absolute inset-0 bg-an-dark-green/5 mix-blend-multiply pointer-events-none"></div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Por que ser revendedor? */}
      <section id="negocio" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-an-dark-green mb-4">Uma oportunidade para vender produtos que as pessoas já procuram</h2>
              <p className="text-slate-600 text-lg">Descubra as vantagens de empreender em um dos mercados que mais crescem no Brasil com a Atlântica Natural.</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp size={32} />, title: "Saúde e bem-estar em alta", desc: "Mercado bilionário em crescimento acelerado. As pessoas buscam cada vez mais qualidade de vida." },
              { icon: <Sparkles size={32} />, title: "Perfumaria com grande potencial", desc: "O Brasil é o 4º maior mercado de beleza do mundo. Nossa perfumaria tem altíssima aceitação." },
              { icon: <HeartPulse size={32} />, title: "Produtos naturais e ozonizados", desc: "Diferencial único de saúde e bem-estar. A linha NatuOz com tecnologia de ozonioterapia é exclusiva." },
              { icon: <Phone size={32} />, title: "Venda pelo WhatsApp e redes", desc: "Sem necessidade de loja física. Opere seu negócio 100% pelo celular e alcance mais clientes." },
              { icon: <Gift size={32} />, title: "Catálogo variado", desc: "Atende diferentes públicos e necessidades, desde suplementação até cuidados pessoais e beleza." },
              { icon: <ShieldCheck size={32} />, title: "Baixo atrito para começar", desc: "Sistema de venda com alto potencial de lucro, suporte da marca e facilidade logística." }
            ].map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 100} className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-an-medium-green shadow-sm mb-6 group-hover:text-an-gold transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-an-dark-green mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Como funciona */}
      <section className="py-20 bg-an-beige/40 border-y border-an-beige">
        <div className="container mx-auto px-4 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-an-dark-green">Como funciona para começar</h2>
              <div className="w-20 h-1 bg-an-gold mx-auto mt-6 rounded-full"></div>
            </div>
          </FadeInSection>

          <div className="flex flex-col lg:flex-row justify-between relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-an-gold/30 -z-10"></div>
            
            {[
              { num: "1", title: "Fale com um consultor", desc: "Entenda os produtos, margens de lucro e as melhores formas de venda para o seu perfil." },
              { num: "2", title: "Escolha seus produtos", desc: "Monte seu mix inicial estratégico: perfumaria, nutracêuticos e óleos ozonizados." },
              { num: "3", title: "Divulgue e venda", desc: "Use WhatsApp, Instagram, grupos de ofertas e faça atendimento direto aos seus contatos." },
              { num: "4", title: "Cresça com recorrência", desc: "Construa uma carteira de clientes fiéis com produtos de uso contínuo e alta qualidade." }
            ].map((step, idx) => (
              <FadeInSection key={idx} delay={idx * 150} className="flex-1 px-4 relative mb-12 lg:mb-0 text-center">
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-4xl font-black text-an-gold shadow-md border-4 border-an-beige/50 mb-6 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-an-dark-green mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={600} className="text-center mt-12">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-an-dark-green hover:bg-green-900 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-xl">
              Quero começar agora pelo WhatsApp <Phone size={20} />
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* 6. Números e autoridade */}
      <section className="py-16 bg-an-dark-green text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center divide-x divide-white/10">
            <FadeInSection delay={0} className="px-2">
              <div className="text-4xl md:text-5xl font-black text-an-gold mb-2">+300</div>
              <div className="text-sm uppercase tracking-wider opacity-90 font-medium">Franquias pelo Brasil</div>
            </FadeInSection>
            <FadeInSection delay={100} className="px-2">
              <div className="text-4xl md:text-5xl font-black text-an-gold mb-2">+4</div>
              <div className="text-sm uppercase tracking-wider opacity-90 font-medium">Anos no mercado</div>
            </FadeInSection>
            <FadeInSection delay={200} className="px-2">
              <div className="text-4xl md:text-5xl font-black text-an-gold mb-2">+20</div>
              <div className="text-sm uppercase tracking-wider opacity-90 font-medium">Carros pagos</div>
            </FadeInSection>
            <FadeInSection delay={300} className="px-2">
              <div className="text-4xl md:text-5xl font-black text-an-gold mb-2">+15</div>
              <div className="text-sm uppercase tracking-wider opacity-90 font-medium">Viagens realizadas</div>
            </FadeInSection>
            <FadeInSection delay={400} className="px-2 col-span-2 lg:col-span-1 border-x-0 lg:border-l border-white/10">
              <div className="text-4xl md:text-5xl font-black text-an-gold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider opacity-90 font-medium">Lucro no sistema online</div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 7. Categorias de produtos */}
      <section id="categorias" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-an-dark-green mb-2">Conheça nossas linhas</h2>
                <p className="text-slate-600">Catálogo completo para saúde, beleza e bem-estar.</p>
              </div>
              <a href={WHATSAPP_LINK} className="text-an-gold font-bold hover:underline flex items-center gap-1">
                Solicitar catálogo completo <ArrowRight size={16} />
              </a>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <HeartPulse />, name: "Nutracêuticos", desc: "Suplementos para saúde e bem-estar diário" },
              { icon: <Droplets />, name: "Óleos Ozonizados", desc: "Linha NatuOz com tecnologia de ozonioterapia" },
              { icon: <Sparkles />, name: "Perfumaria", desc: "Fragrâncias femininas e masculinas de 15ml e 100ml" },
              { icon: <Leaf />, name: "Cosméticos", desc: "Cuidados com pele e cabelo com ativos naturais" },
              { icon: <Star />, name: "Lançamentos", desc: "Produtos mais recentes da Atlântica Natural" },
              { icon: <Award />, name: "Kits para Revenda", desc: "Kits especiais para consultores iniciantes" }
            ].map((cat, idx) => (
              <FadeInSection key={idx} delay={idx * 50}>
                <div className="group border border-slate-200 rounded-xl p-6 hover:border-an-medium-green transition-all hover:shadow-md bg-white cursor-pointer h-full flex flex-col">
                  <div className="text-an-medium-green mb-4 bg-an-medium-green/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-an-dark-green mb-2">{cat.name}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{cat.desc}</p>
                  <div className="text-sm font-bold text-an-medium-green flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver produtos <ArrowRight size={16} />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Produtos em destaque */}
      <section id="produtos" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-an-dark-green">Produtos em destaque</h2>
              <p className="text-slate-600 mt-4">Os itens mais buscados pelos nossos clientes e consultores.</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Vital Life", cat: "Nutracêutico", price: "R$ 153,98", desc: "Suplemento completo para vitalidade e bem-estar" },
              { name: "Aloe Vera Gotas", cat: "Nutracêutico", price: "R$ 119,98", desc: "Extrato natural de Aloe Vera para imunidade" },
              { name: "VisionMax", cat: "Nutracêutico", price: "R$ 119,98", desc: "Complexo para saúde ocular e visão nítida" },
              { name: "Spray de Própolis e Mel", cat: "Nutracêutico", price: "R$ 79,98", desc: "Antibacteriano natural para garganta" },
              { name: "Magnésio Dimalato", cat: "Lançamento", price: "R$ 89,98", desc: "Novo! Magnésio de alta absorção para músculos", isNew: true },
              { name: "Vitamina B12", cat: "Lançamento", price: "R$ 79,98", desc: "Novo! Metilcobalamina 9,94µg mastigável", isNew: true },
              { name: "Vitamina C", cat: "Lançamento", price: "R$ 84,98", desc: "Novo! Ácido ascórbico 600mg encapsulado", isNew: true },
              { name: "Óleo de Girassol Ozonizado", cat: "Óleo Ozonizado", price: "R$ 99,98", desc: "Óleo ozonizado NatuOz multipropósito" }
            ].map((prod, idx) => (
              <FadeInSection key={idx} delay={idx * 50}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow flex flex-col h-full relative group">
                  {prod.isNew && (
                    <div className="absolute top-3 left-3 bg-an-gold text-white text-[10px] font-bold px-2 py-1 rounded uppercase z-10">
                      Novo
                    </div>
                  )}
                  <div className="aspect-square bg-slate-100 p-6 flex items-center justify-center overflow-hidden">
                    <img src="/__mockup/images/product-placeholder.png" alt={prod.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400";
                    }} />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-an-medium-green mb-1 uppercase tracking-wider">{prod.cat}</div>
                    <h3 className="font-bold text-an-dark-green text-lg mb-1 leading-tight">{prod.name}</h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">{prod.desc}</p>
                    <div className="mt-auto">
                      <div className="text-xl font-black text-an-gold mb-4">{prod.price}</div>
                      <div className="flex flex-col gap-2">
                        <a href={WHATSAPP_LINK} className="w-full bg-an-gold hover:bg-yellow-600 text-white py-2 rounded text-sm font-bold flex items-center justify-center gap-1 transition-colors">
                          <Phone size={14} /> Comprar pelo WhatsApp
                        </a>
                        <button className="w-full border border-slate-300 hover:border-an-dark-green hover:text-an-dark-green text-slate-600 py-2 rounded text-sm font-bold transition-colors">
                          Ver detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-an-dark-green font-bold hover:underline">
              Ver catálogo completo com todos os preços <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 9. Lançamentos — seção premium */}
      <section id="lancamentos" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-an-beige/30 -skew-x-12 transform origin-top hidden lg:block"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-an-gold text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Novo</span>
              <div className="h-px bg-an-gold/30 flex-grow max-w-[100px]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-an-dark-green mb-12">Lançamentos Atlântica Natural</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Magnésio Dimalato", desc: "Magnésio de alta absorção para suporte muscular e energia.", price: "R$ 89,98", bg: "bg-amber-50" },
              { name: "Vitamina B12", desc: "Metilcobalamina 9,94µg mastigável. Essencial para o sistema nervoso.", price: "R$ 79,98", bg: "bg-rose-50" },
              { name: "Vitamina C", desc: "Ácido ascórbico 600mg encapsulado para imunidade reforçada.", price: "R$ 84,98", bg: "bg-orange-50" }
            ].map((prod, idx) => (
              <FadeInSection key={idx} delay={idx * 150}>
                <div className="bg-white border border-an-gold/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-an-gold/10 transition-all group">
                  <div className={`aspect-square ${prod.bg} rounded-xl mb-6 p-6 flex items-center justify-center relative`}>
                    <div className="absolute inset-0 border-2 border-dashed border-an-gold/20 rounded-xl m-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img src="/__mockup/images/product-placeholder.png" alt={prod.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550246140-5119ae4790b8?auto=format&fit=crop&q=80&w=400";
                    }} />
                  </div>
                  <h3 className="text-2xl font-bold text-an-dark-green mb-3">{prod.name}</h3>
                  <p className="text-slate-600 mb-6">{prod.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-an-gold">{prod.price}</span>
                    <a href={WHATSAPP_LINK} className="w-10 h-10 rounded-full bg-an-dark-green text-white flex items-center justify-center hover:bg-green-900 transition-colors">
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          
          <FadeInSection delay={400} className="text-center">
            <a href={WHATSAPP_LINK} className="inline-block border-2 border-an-gold text-an-gold hover:bg-an-gold hover:text-white px-8 py-3 rounded-md font-bold transition-colors">
              Ver todos os lançamentos
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* 10. Perfumaria */}
      <section className="py-0 flex flex-col lg:flex-row">
        <div className="flex-1 bg-slate-900 text-white py-20 px-8 lg:px-16 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="relative z-10 max-w-lg lg:ml-auto lg:mr-8 text-left lg:text-right">
            <h3 className="text-3xl md:text-5xl font-serif italic mb-4">Feminino</h3>
            <p className="text-slate-300 text-lg mb-8">Fragrâncias marcantes e sofisticadas de 15ml e 100ml. Essências inspiradas na alta perfumaria internacional.</p>
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded text-sm font-bold hover:bg-an-gold hover:text-white transition-colors">
              Catálogo Feminino <ArrowRight size={16} />
            </a>
          </div>
        </div>
        
        <div className="flex-1 bg-slate-800 text-white py-20 px-8 lg:px-16 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="relative z-10 max-w-lg lg:ml-8 text-left">
            <h3 className="text-3xl md:text-5xl font-serif italic mb-4">Masculino</h3>
            <p className="text-slate-300 text-lg mb-8">Perfumes intensos com excelente fixação. O formato 15ml é perfeito para o dia a dia e alto volume de revenda.</p>
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded text-sm font-bold hover:bg-an-gold hover:text-white transition-colors">
              Catálogo Masculino <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 11. Venda pelo WhatsApp */}
      <section className="py-16 bg-an-medium-green relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-an-dark-green/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-white">
              <FadeInSection>
                <div className="flex items-center gap-2 mb-4 text-an-beige font-medium">
                  <Phone size={20} /> Vendas Rápidas
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Transforme seu WhatsApp em uma vitrine de vendas</h2>
                <p className="text-white/90 text-lg">Receba atendimento VIP, tire dúvidas, solicite o catálogo em PDF e comece a divulgar os produtos hoje mesmo para sua rede de contatos.</p>
              </FadeInSection>
            </div>
            
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto min-w-[280px]">
              <FadeInSection delay={100}>
                <a href={WHATSAPP_LINK} className="w-full bg-white text-an-dark-green hover:bg-an-beige px-6 py-3.5 rounded-lg font-bold text-center flex items-center justify-center gap-2 transition-colors shadow-lg">
                  Falar com consultor <ArrowRight size={18} />
                </a>
              </FadeInSection>
              <FadeInSection delay={200}>
                <a href={WHATSAPP_LINK} className="w-full bg-an-dark-green/30 border border-white/20 hover:bg-an-dark-green text-white px-6 py-3.5 rounded-lg font-bold text-center flex items-center justify-center gap-2 transition-colors">
                  Grupo de consumidores
                </a>
              </FadeInSection>
              <FadeInSection delay={300}>
                <a href={WHATSAPP_LINK} className="w-full bg-an-dark-green/30 border border-white/20 hover:bg-an-dark-green text-white px-6 py-3.5 rounded-lg font-bold text-center flex items-center justify-center gap-2 transition-colors">
                  Grupo de consultores
                </a>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Sobre a Atlântica Natural & 13. Presença */}
      <section id="sobre" className="py-24 bg-an-beige/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <FadeInSection>
                <h2 className="text-3xl md:text-4xl font-bold text-an-dark-green mb-6">Sobre a Atlântica Natural</h2>
                <div className="prose prose-lg text-slate-600 mb-8">
                  <p>
                    Fundada em 2020, a Atlântica Natural nasceu com o propósito de oferecer produtos de altíssima qualidade ligados à saúde, beleza, bem-estar e ozonioterapia.
                  </p>
                  <p>
                    Com sede estruturada em Mogi das Cruzes/SP, a empresa vem crescendo exponencialmente, oferecendo um catálogo amplo e oportunidades reais tanto para consumidores quanto para consultores que desejam empreender.
                  </p>
                </div>
                
                <h3 className="text-xl font-bold text-an-dark-green mb-6 mt-12">Uma marca presente em todo o Brasil</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-slate-100 shadow-sm flex items-start gap-3">
                    <MapPin className="text-an-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-an-dark-green text-sm">Sede e Logística</div>
                      <div className="text-slate-500 text-xs">Mogi das Cruzes / SP</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-100 shadow-sm flex items-start gap-3">
                    <Award className="text-an-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-an-dark-green text-sm">DNA Forte</div>
                      <div className="text-slate-500 text-xs">Multinível e Vendas Diretas</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-100 shadow-sm flex items-start gap-3">
                    <TrendingUp className="text-an-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-an-dark-green text-sm">+300 Franquias</div>
                      <div className="text-slate-500 text-xs">Expansão acelerada</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-100 shadow-sm flex items-start gap-3">
                    <ShieldCheck className="text-an-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-an-dark-green text-sm">Alta Rentabilidade</div>
                      <div className="text-slate-500 text-xs">Até 100% de lucro nas vendas</div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
            
            <div className="flex-1 w-full relative">
              <FadeInSection delay={200}>
                {/* Decorative visual instead of a complex map to keep it reliable */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-an-dark-green aspect-square max-h-[500px] flex items-center justify-center p-8">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <Leaf className="text-an-gold mb-6" size={64} />
                    <div className="text-white text-2xl md:text-3xl font-bold mb-2">Bauru e Região</div>
                    <div className="text-an-beige/80 text-lg">Atendimento direto e personalizado</div>
                    
                    <div className="mt-12 flex -space-x-4">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-an-dark-green bg-white flex items-center justify-center overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Consultor" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-sm font-medium text-white/80">Junte-se ao nosso time</div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-an-dark-green">O que dizem sobre nós</h2>
              <div className="w-20 h-1 bg-an-gold mx-auto mt-6 rounded-full"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Comecei indicando para amigas e hoje tenho uma renda complementar fantástica com os produtos.", name: "Maria S.", role: "Consultora" },
              { text: "Os produtos têm ótima aceitação e qualidade, o que sempre gera recompra dos meus clientes todos os meses.", name: "Ana R.", role: "Consultora" },
              { text: "O catálogo variado e os óleos ozonizados facilitam vender para públicos diferentes sem complicação nenhuma.", name: "Carla M.", role: "Consumidora e Revendedora" }
            ].map((dep, idx) => (
              <FadeInSection key={idx} delay={idx * 150} className="bg-slate-50 p-8 rounded-2xl relative">
                <div className="absolute top-8 left-8 text-an-gold/20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14.596H11.41V3H21.41V14.596L18.667 21H14.017ZM5.017 21L7.41 14.596H2.41V3H12.41V14.596L9.667 21H5.017Z" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="flex text-an-gold mb-6">
                    <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
                  </div>
                  <p className="text-slate-700 italic mb-8 min-h-[80px]">"{dep.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-an-medium-green/10 rounded-full flex items-center justify-center text-an-medium-green font-bold text-xl">
                      {dep.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-an-dark-green">{dep.name}</div>
                      <div className="text-sm text-slate-500">{dep.role}</div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="py-20 bg-an-beige/20 border-t border-an-beige/50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-an-dark-green mb-4">Dúvidas Frequentes</h2>
              <p className="text-slate-600">Tudo o que você precisa saber para começar a comprar ou vender.</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "Como faço para comprar os produtos?", a: "Entre em contato diretamente pelo WhatsApp através dos botões nesta página ou solicite nosso catálogo digital." },
                  { q: "Como faço para ser consultor?", a: "É muito simples! Fale com nosso time pelo WhatsApp, faremos um cadastro rápido e explicaremos como fazer seu pedido inicial." },
                  { q: "Preciso ter estoque físico?", a: "Não é obrigatório, você pode trabalhar com pedidos sob demanda dos seus clientes, reduzindo seu risco inicial a zero." },
                  { q: "Posso vender pelo WhatsApp e redes sociais?", a: "Sim! O WhatsApp e o Instagram são as principais e mais eficientes ferramentas de vendas dos nossos consultores." },
                  { q: "Os produtos são enviados para todo o Brasil?", a: "Sim, a Atlântica Natural possui logística para entrega em todo o território nacional com segurança." },
                  { q: "Existe um catálogo digital disponível?", a: "Sim, temos um catálogo completo em PDF atualizado. Basta solicitar no WhatsApp que enviamos imediatamente." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b-slate-100">
                    <AccordionTrigger className="text-left font-bold text-an-dark-green hover:text-an-medium-green">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 16. Rodapé premium */}
      <footer id="contato" className="bg-an-dark-green pt-20 pb-8 border-t-[8px] border-an-gold">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <Leaf className="text-an-gold" size={32} />
                <span className="text-2xl font-bold tracking-tight">Atlântica Natural</span>
              </div>
              <p className="text-white/70 mb-6 text-sm leading-relaxed">
                Revendedor autorizado Bauru e região. Levando saúde, bem-estar e oportunidades de negócio através de produtos naturais e óleos ozonizados.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-an-gold transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-an-gold transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-an-gold transition-colors"><Youtube size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-an-gold"></div> Links Úteis
              </h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-white/70 hover:text-an-gold transition-colors text-sm">Início</a></li>
                <li><a href="#negocio" className="text-white/70 hover:text-an-gold transition-colors text-sm">Como ser um consultor</a></li>
                <li><a href="#sobre" className="text-white/70 hover:text-an-gold transition-colors text-sm">Nossa História</a></li>
                <li><a href="#" className="text-white/70 hover:text-an-gold transition-colors text-sm">Política de Privacidade</a></li>
                <li><a href="#" className="text-white/70 hover:text-an-gold transition-colors text-sm">Termos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-an-gold"></div> Categorias
              </h4>
              <ul className="space-y-3">
                <li><a href="#categorias" className="text-white/70 hover:text-an-gold transition-colors text-sm">Nutracêuticos</a></li>
                <li><a href="#categorias" className="text-white/70 hover:text-an-gold transition-colors text-sm">Óleos Ozonizados</a></li>
                <li><a href="#categorias" className="text-white/70 hover:text-an-gold transition-colors text-sm">Perfumaria 15ml e 100ml</a></li>
                <li><a href="#categorias" className="text-white/70 hover:text-an-gold transition-colors text-sm">Cosméticos</a></li>
                <li><a href="#lancamentos" className="text-white/70 hover:text-an-gold transition-colors text-sm">Lançamentos 2025</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-an-gold"></div> Atendimento
              </h4>
              <div className="space-y-4">
                <a href={WHATSAPP_LINK} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">WhatsApp (Bauru/SP)</div>
                    <div className="font-bold text-sm">(14) 99999-9999</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-an-gold transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">E-mail</div>
                    <div className="font-bold text-sm">contato@atlanticabauru.com.br</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/50 text-sm">
              &copy; 2025 Atlântica Natural Bauru. Todos os direitos reservados.
            </div>
            <div className="text-white/40 text-xs flex items-center gap-1">
              Revendedor Independente
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-500 transition-colors z-50 animate-pulse-whatsapp"
        aria-label="Falar no WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.324.101.144.45 0.712.967 1.156.666.574 1.231.758 1.376.845.144.087.231.072.318-.029l.354-.413c.116-.145.231-.116.362-.072.13.044.837.398.982.471.144.073.239.116.274.181.036.065.036.376-.108.781z" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>
      </a>
    </div>
  );
}

export default LandingPage;
