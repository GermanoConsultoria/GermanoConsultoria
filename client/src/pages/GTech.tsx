import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  ArrowLeft,
  Moon,
  Sun,
  Rocket,
  Code,
  Laptop,
  Droplet,
  DollarSign,
  Activity,
  Briefcase,
  Share2,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";
import logoGtech from "@/Image/logoGtech.png";

export default function GTech() {
  const [darkMode, setDarkMode] = useState(false);

  // Carrega o tema salvo
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  // Array de projetos apenas com títulos, descrições e ícones
  const projetos = [
    {
      title: "Watcon",
      desc: "Sistema de gestão de consumo de água para condomínios. Permite que zeladores registrem leituras mensais e a administração acompanhe o consumo.",
      icon: <Droplet className="w-6 h-6 text-blue-500" />
    },
    {
      title: "PDV Buratin",
      desc: "Sistema de Ponto de Venda com controle de caixa, sangria, fechamento diário/mensal, gestão de produtos, financeiro e relatórios.",
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: "G-Clin",
      desc: "Sistema de gestão clínica para agendamentos, finanças e comunicação automatizada com pacientes via API do WhatsApp.",
      icon: <Activity className="w-6 h-6 text-red-500" />
    },
    {
      title: "GADV",
      desc: "Gestão completa para escritórios de advocacia com organização de processos judiciais, controle de clientes e prazos fatais.",
      icon: <Briefcase className="w-6 h-6 text-purple-500" />
    },
    {
      title: "ZapSales",
      desc: "Automação avançada para WhatsApp focada em funis de vendas, atendimento multi-agente e alta conversão de leads.",
      icon: <Share2 className="w-6 h-6 text-emerald-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
      
      {/* HEADER SIMPLIFICADO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/">
            <Button
              variant="outline"
              className="flex items-center gap-2 font-bold rounded-xl border bg-card hover:scale-105 transition"
            >
              <ArrowLeft className="w-4 h-4 text-primary" />
              Voltar
            </Button>
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border bg-card hover:scale-105 transition cursor-pointer"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            <img
              src={logoGtech}
              alt="G-Tech Logo"
              className="w-24 md:w-28 h-auto object-contain"
            />
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 md:pt-40 pb-20 relative overflow-hidden gradient-hero mt-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Desenvolvimento Sob Medida
            </span>
            <h2 className="text-primary font-black text-5xl md:text-7xl mb-2 tracking-tight">
              G-TECH
            </h2>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Soluções Inteligentes
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sistemas robustos criados sob medida para quem busca eficiência de verdade.
            </p>

            <div className="p-8 bg-card/40 backdrop-blur-md border border-primary/10 rounded-3xl mb-10 text-left shadow-xl">
              <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium">
                Com a <span className="text-primary font-bold">G-TECH</span>, você investe em softwares personalizados, criados do zero para as necessidades únicas do seu negócio, garantindo eficiência operacional, redução de custos e um diferencial competitivo que coloca sua empresa à frente.
              </p>
            </div>

            <a href="https://wa.me/5519981640280" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 h-auto rounded-2xl shadow-lg hover:shadow-primary/25 transition-all duration-300">
                Fale com um Especialista
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* PROJETOS / CARROSSEL */}
      <section className="py-20 bg-background border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Sistemas Desenvolvidos
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Soluções reais criadas para empresas que precisam automatizar e escalar operações.
            </p>
          </div>

          {/* CARROSSEL */}
          <div className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scroll-smooth scrollbar-thin">
            {projetos.map((item, i) => (
              <div
                key={i}
                className="
                  snap-center
                  min-w-[300px] md:min-w-[380px]
                  max-w-[380px]
                  p-6 md:p-8
                  rounded-2xl
                  bg-card
                  border border-border/60
                  border-l-4 border-l-primary
                  shadow-md hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                  flex flex-col justify-between
                "
              >
                <div>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-muted rounded-xl">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRA QUEM É / FOCO EM CUSTOMIZAÇÃO */}
          <section className="py-20 bg-muted/30 border-t border-b border-border/40">
            <div className="container mx-auto px-4">
              
              {/* Injeta a animação CSS diretamente no componente */}
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
              `}</style>

              <div className="text-center mb-12">
                {/* Título flutuante */}
                <h2 className="text-3xl font-bold text-foreground animate-[float_4s_ease-in-out_infinite]">
                  Sob Medida Para Você
                </h2>
              </div>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Card 1 com animação (4.5s para alternar o ritmo com o título) */}
                <Card className="p-8 border border-border bg-card flex flex-col items-center text-center shadow-sm hover:shadow-md transition animate-[float_4.5s_ease-in-out_infinite]">
                  <div className="p-4 bg-primary/10 rounded-2xl mb-4">
                    <Rocket className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Apps para Vendas</h3>
                  <p className="text-base text-muted-foreground">
                    Controle de vendas, automações para Instagram e WhatsApp desenvolvidos para potencializar os resultados do seu negócio.
                  </p>
                </Card>

                {/* Card 2 com animação (5s para um movimento dessincronizado e mais natural) */}
                <Card className="p-8 border border-border bg-card flex flex-col items-center text-center shadow-sm hover:shadow-md transition animate-[float_5s_ease-in-out_infinite]">
                  <div className="p-4 bg-primary/10 rounded-2xl mb-4">
                    <Code className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">App do Seu Jeito</h3>
                  <p className="text-base text-muted-foreground">
                    Soluções 100% customizadas conforme as necessidades específicas da sua empresa, entregando valor com preço acessível.
                  </p>
                </Card>
              </div>
            </div>
          </section>

      {/* PREÇO E OFERTA */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4 text-center">
          <div
            className="
              max-w-2xl mx-auto
              rounded-[2.5rem]
              p-8 md:p-12
              bg-gradient-to-br
              from-primary
              to-[#066db7]
              dark:from-card
              dark:to-card
              dark:border dark:border-border
              text-white dark:text-foreground
              shadow-2xl shadow-primary/20 dark:shadow-none
            "
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-300 dark:text-primary">Tecnologia ao Seu Alcance</h3>
            
            <div className="mb-8">
              <span className="text-xs block opacity-80 dark:text-muted-foreground font-bold tracking-wider mb-2">PRODUTOS A PARTIR DE:</span>
              <div className="text-5xl md:text-6xl font-black mb-2 tracking-tight">R$ 999,99</div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] bg-white/20 dark:bg-border flex-grow"></div>
              <span className="font-bold text-xs uppercase tracking-widest text-cyan-300 dark:text-primary">Compromisso G-Tech</span>
              <div className="h-[1px] bg-white/20 dark:bg-border flex-grow"></div>
            </div>

            <div className="mb-10 flex flex-col items-center justify-center gap-2">
              <Laptop className="w-8 h-8 text-cyan-300 dark:text-primary mb-1 animate-pulse" />
              <span className="text-xl md:text-2xl font-black uppercase tracking-wide">ENTREGA GARANTIDA EM 30 DIAS</span>
            </div>

            <a href="https://wa.me/5519981640280" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-[#00D9FF] dark:bg-primary text-black dark:text-primary-foreground hover:bg-white hover:text-black px-8 py-7 text-xl font-black rounded-2xl transition-all shadow-xl">
                SOLICITAR MEU PROJETO AGORA
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card text-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base font-medium max-w-md mx-auto mb-6 text-muted-foreground">
            Desenvolvemos o diferencial competitivo que coloca sua empresa à frente do mercado.
          </p>
          <div className="pt-6 border-t border-border/40 text-sm text-muted-foreground opacity-70">
            © 2026 Grupo Germano 
          </div>
        </div>
      </footer>

    </div>
  );
}