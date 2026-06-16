import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  ArrowLeft,
  Moon,
  Sun,
  Landmark,
  ShieldCheck,
  Clock,
  TrendingUp,
  FileText,
  Settings,
} from "lucide-react";
import { useState, useEffect } from "react";
import logoAngelita from "@/Image/logoAngelita.png";

export default function Angelita() {
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

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-white/10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">

          <a href="/">
            <Button variant="outline" className="flex items-center gap-2 font-bold rounded-xl border bg-card hover:scale-105 transition">
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

            <img src={logoAngelita} className="w-24 md:w-28 h-auto object-contain" />

          </div>
        </div>
      </header>

      <br /><br /><br /><br />

      {/* HERO (mais clean estilo GTech) */}
      <section className="pt-40 pb-20 relative overflow-hidden gradient-hero">
        <div className="container mx-auto px-4 text-center max-w-4xl">

          <h2 className="text-primary font-black text-4xl md:text-6xl mb-4 tracking-widest uppercase">
            ANGELITA
          </h2>

          <h1 className="display-lg text-primary mb-6">
            Performance Financeira
          </h1>

          <p className="text-xl md:text-2xl font-bold text-accent mb-8">
            25 anos de experiência em gestão financeira e empresarial.
          </p>

          <div className="card-elevated p-8 bg-card/40 backdrop-blur-md border-primary/20 mb-10 text-left">
            <p className="text-lg md:text-xl text-black dark:text-white font-medium">
              Otimizamos processos financeiros para reduzir custos, melhorar organização e aumentar performance do seu negócio.
            </p>
          </div>

          <a href="https://wa.me/5519997387186" target="_blank">
            <Button className="btn-primary text-lg px-10 py-6 h-auto">
              Mudar Meu Cenário Financeiro
              <ChevronRight className="w-6 h-6 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* POR QUE TERCEIRIZAR (cards estilo GTech) */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">
              Por que terceirizar seu financeiro?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                icon: Landmark,
                title: "Gestão Especializada",
                desc: "Conciliação bancária, contas e notas fiscais com eficiência."
              },
              {
                icon: ShieldCheck,
                title: "Redução de Custos",
                desc: "Sem encargos trabalhistas e estrutura interna."
              },
              {
                icon: Clock,
                title: "Economia de Tempo",
                desc: "Você foca no crescimento, não na operação."
              },
              {
                icon: TrendingUp,
                title: "Gestão de Performance",
                desc: "Melhoria contínua dos processos financeiros."
              },
              {
                icon: FileText,
                title: "Sigilo Absoluto",
                desc: "Informações financeiras com total confidencialidade."
              },
              {
                icon: Settings,
                title: "Soluções Flexíveis",
                desc: "Modelos adaptados à sua necessidade."
              },
            ].map((item, i) => (
              <Card key={i} className="card-elevated p-6 border-l-4 border-primary">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="heading-lg text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-black dark:text-white/80">{item.desc}</p>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* SERVIÇOS (mais compacto estilo GTech) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">

          <div className="max-w-3xl mx-auto bg-card rounded-[2.5rem] p-10 border border-primary/10 shadow-2xl">

            <h2 className="display-md text-primary mb-10">
              O que executamos por você
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 text-left">

              {[
                "Fechamento de caixa e conciliações",
                "Conciliação de cartões",
                "Organização de documentos",
                "Implantação de sistemas",
                "Rotina administrativa",
                "Relatórios financeiros",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">✓</div>
                  <span className="text-base font-bold">{text}</span>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL estilo GTech */}
     <br></br><br></br>
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4 text-center">

          <div className="max-w-2xl mx-auto rounded-[3rem] p-12 bg-card border border-primary/10 shadow-3xl relative overflow-hidden">

            {/* glow de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60 pointer-events-none" />

            <div className="relative z-10">

              <h3 className="text-3xl md:text-4xl font-black mb-4 text-primary">
                Transforme sua gestão financeira agora
              </h3>

              <p className="text-lg md:text-xl mb-6 opacity-90">
                Mais controle, menos desperdício e uma operação muito mais leve.
              </p>

              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
                Atendimento imediato via WhatsApp
              </p>

              <a href="https://wa.me/5519997387186">
                <Button className="w-full bg-[#00D9FF] text-black hover:bg-white px-8 py-8 text-xl font-black rounded-2xl transition-all hover:scale-[1.02]">
                  QUERO MELHORAR MINHA EMPRESA
                </Button>
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card/60 text-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">
            Angelita Performance Financeira — Gestão inteligente para empresas.
          </p>
          <div className="mt-6 text-sm opacity-60">
            © 2026 Grupo Germano
          </div>
        </div>
      </footer>

    </div>
  );
}