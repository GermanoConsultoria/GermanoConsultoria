import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
  MessageCircle,
  Moon,
  Sun,
  Target,
  ClipboardList,
  UserCheck,
  Layers,
  Calendar,
  Layout,
  TrendingUp,
  HelpCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/Image/logo.png";
import logoGcon from "@/Image/logoGcon.png";


export default function Gcon() {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
      
    
         <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-white/10 shadow-sm">
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

    <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl border bg-card hover:scale-105 transition"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-primary" />
          )}
        </button>

        <img
          src={logoGcon}
          alt="G-Con Logo"
          className="w-24 md:w-28 h-auto object-contain"
        />
      </div>
    </div>
      </header>
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-20 relative overflow-hidden gradient-hero">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary font-black text-2xl md:text-3xl mb-2 tracking-widest uppercase">
              Clube do Lucro!
            </h2>
            <h1 className="display-lg text-primary mb-6">
              Estratégia na Prática
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-accent mb-8">
              Para quem quer crescer, não para quem quer desculpa.
            </p>

            <div className="card-elevated p-8 bg-card/40 backdrop-blur-md border-primary/20 mb-10 text-left">
              <p className="text-lg md:text-xl leading-relaxed text-black dark:text-white font-medium">
                Na <span className="text-primary font-bold">G-CON</span>, oferecemos soluções empresariais completas que vão muito além do aconselhamento. 
                Nós ensinamos, capacitamos e implementamos as melhores práticas para que você tenha o controle total do seu negócio.
              </p>
            </div>

            <a href="https://wa.me/5519981640280" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary text-lg px-10 py-6 h-auto">
                Garantir Minha Vaga no Clube
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI RECEBER */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">O Que Você Vai Receber:</h2>
            <p className="body-lg text-muted-foreground">Acompanhamento completo para elevar o nível da sua gestão.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Diagnóstico do Negócio", desc: "Análise especializada para identificar pontos de melhoria." },
              { icon: UserCheck, title: "Sessão Individual", desc: "Atendimento personalizado para orientar e aclarar suas dúvidas." },
              { icon: HelpCircle, title: "Plantão de Dúvidas", desc: "Espaço dedicado para resolver problemas em tempo real." },
              { icon: MessageCircle, title: "Suporte no WhatsApp", desc: "Suporte contínuo para dúvidas rápidas e suporte operacional." },
              { icon: Layers, title: "Acompanhamento por etapas", desc: "Acompanhamento das ações planejadas, com orientação estratégica." },
              { icon: Calendar, title: "Plano de Ação de 30 Dias", desc: "Estratégia prática com objetivos claros e metas definidas." },
              
            ].map((item, i) => (
              <Card key={i} className="card-elevated p-6 border-l-4 border-primary">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="heading-lg text-primary mb-2">{item.title}</h3>
                <p className="text-sm font-medium text-black dark:text-white/80">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRA QUEM É */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card rounded-[2.5rem] p-10 border border-primary/10 shadow-2xl">
            <h2 className="display-md text-center text-primary mb-10">Pra Quem É:</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Quem quer organizar e escalar",
                "Quem quer decisões claras",
                "Pequenos negócios",
                "Empresários iniciantes"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-bold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREÇO E OFERTA */}
      <section className="section-spacing bg-background relative">
        <div className="container mx-auto px-4 text-center">
          <div
  className="
    max-w-2xl mx-auto
    rounded-[3rem]
    p-12
    bg-gradient-to-br
    from-primary
    to-[#066db7]
    dark:bg-[#111827]
    dark:bg-none
    text-white
    shadow-3xl
  "
>
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Invista no Futuro do Seu Negócio</h3>
            
            <div className="mb-8">
              <span className="text-sm block opacity-80 mb-2">Tudo isso por apenas:</span>
              <div className="text-5xl md:text-6xl font-black mb-2">R$ 1.999,99</div>
              <span className="text-xl font-medium">À VISTA</span>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] bg-white/20 flex-grow"></div>
              <span className="font-bold">OU</span>
              <div className="h-[1px] bg-white/20 flex-grow"></div>
            </div>

            <div className="mb-10">
              <span className="text-4xl font-black">12x R$ 199,99</span>
              <p className="text-sm mt-2 opacity-90">(No Cartão de Crédito)</p>
            </div>

            <div className="flex justify-center">
            <a href="https://wa.me/5519997387186" className="w-full max-w-md">
              <Button className="w-full bg-[#00D9FF] text-black hover:bg-white px-6 py-6 text-base sm:text-xl font-black rounded-2xl transition-all hover:scale-[1.02] whitespace-normal break-words leading-tight">
                QUERO ME INSCREVER AGORA
              </Button>
            </a>
        </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card/60 text-foreground py-12 backdrop-blur-xl border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base font-medium max-w-md mx-auto mb-8">
            Ensinamos, capacitamos e implementamos. O controle do seu negócio em suas mãos.
          </p>
          <div className="mt-8 pt-8 border-t border-border/50 text-sm opacity-60">
            © 2026 Grupo Germano 
          </div>
        </div>
      </footer>

    </div>
  );
}