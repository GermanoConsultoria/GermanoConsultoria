import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Code, Users, TrendingUp, DollarSign, Zap, CheckCircle2, MessageCircle, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/Image/logo.png";
import logoGcon from "@/Image/logoGcon.png";
import logoGtech from "@/Image/logoGtech.png";
import logoGbank from "@/Image/logoGbank.png";
import logoAngelita from "@/Image/logoAngelita.png";
import lavinia from "@/Image/Lavinia.png";
import gabriel from "@/Image/Gabriel.png";
import vini from "@/Image/vini.png";
import caique from "@/Image/caique.png";
import rafa from "@/Image/rafa.png";
import matheus from "@/Image/matheus.png";
import sofia from "@/Image/sofia.png";
import joaquim from "@/Image/joaquim.png";
import felipe from "@/Image/felipe.jpeg";
import ruanita from "@/Image/ruanita.png";
import angelita from "@/Image/angelita.png";
import artilimpLogo from "@/Image/artilimp.png";
import palacioDasFestas from "@/Image/palacioDasFestas.png";
import starJeansLogo from "@/Image/starjeans.png";
import SOSLogo from "@/Image/SOS.png";
import solucoes from "@/Image/solucoes.png";
import whatsappLogo from "@/Image/whatsapp.png";
import instagramLogo from "@/Image/instagram.png";
import { MessageCircleMore } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/**
 * Design Philosophy: Premium Tech-Forward
 * - Autoridade através da simplicidade
 * - Hierarquia inteligente
 * - Confiança via consistência
 * - Inovação discreta
 * * Color Palette:
 * - Primária: Azul profundo (#0F3A7D)
 * - Secundária: Azul claro (#00D9FF)
 * - Fundo: Branco (#FFFFFF)
 * * Typography:
 * - Display: Poppins Bold
 * - Body: Inter Regular
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  // Scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Carregar tema salvo
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      // padrão = escuro
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
      
      {/* HEADER/NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-white/10 shadow-sm h-20">        
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 h-full">
            <img 
              src={logo}
              alt="Grupo Germano"
              className="h-15 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 font-bold">
            <a href="#sobre" className="text-foreground/80 hover:text-primary transition">Sobre</a>
            <a href="#solucoes" className="text-foreground/80 hover:text-primary transition">Soluções</a>
            <a href="#resultados" className="text-foreground/80 hover:text-primary transition">Resultados</a>
            <a href="#equipe" className="text-foreground/80 hover:text-primary transition">Equipe</a>
            <a href="#contato" className="text-foreground/80 hover:text-primary transition">Contato</a>
          </nav>

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
            <a
              href="https://wa.me/5519981640280"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition duration-300"
            >
              <img
                src={whatsappLogo}
                alt="WhatsApp"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://wa.me/5519981640280"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-primary text-sm">
                Agendar Diagnóstico
              </Button>
            </a>
          </div>
        </div>
      </header>
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-24 gradient-hero">
        <div className="container mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LADO ESQUERDO */}
            <div className="container mx-auto px-5   lg:px-8">
              <div className="inline-block mb-6 px-4 py-2 bg-accent/20 rounded-full">
                <span className="text-primary text-sm font-medium">
                  ✨ Transformação Empresarial Comprovada
                </span>
              </div>

              <h1 className="display-lg text-primary mb-6 leading-tight">
                Transforme Seu Negócio em Uma Máquina de Lucro
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-black dark:text-white mb-10 max-w-2xl">
                Consultoria estratégica + Tecnologia + Fintech. Tudo integrado para o crescimento exponencial da sua empresa. Já ajudamos dezenas de empresas a aumentar lucro, reduzir custos e profissionalizar operações.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5519981640280" target="_blank" rel="noopener noreferrer">
                  <Button className="btn-primary text-lg px-10 py-6">
                    Agendar Diagnóstico Gratuito
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="#resultados">
                  <Button className="btn-outline text-lg px-10 py-6">
                    Ver Casos de Sucesso
                  </Button>
                </a>
              </div>
            </div>

            {/* LADO DIREITO */}
            <div className="space-y-8">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-primary">50+</div>
                  <div>
                    <h3 className="font-semibold text-lg text-black dark:text-white">🏆 Empresas Transformadas</h3>
                    <p className="text-muted-foreground">Processos estruturados e crescimento sustentável.</p>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-primary">100+</div>
                  <div>
                    <h3 className="font-semibold text-lg text-black dark:text-white"> ⚙️ Projetos Implementados</h3>
                    <p className="text-muted-foreground">Soluções entregues com foco em resultado.</p>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-primary">200+</div>
                  <div>
                    <h3 className="font-semibold text-lg text-black dark:text-white">🚀 Treinamentos Realizados</h3>
                    <p className="text-muted-foreground">Equipes capacitadas para alta performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE SEÇÃO */}
     <section id="sobre" className="section-spacing gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">O Ecossistema Completo Para Performance Empresarial</h2>
            <p className="body-lg text-blue/80 max-w-2xl mx-auto">
              Fundado em 2018, o Grupo Germano é mais que uma consultoria. É um ecossistema integrado de soluções para empresas que querem crescer com inteligência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                  src={solucoes}
                  alt="Soluções Integradas"
                  className="w-full rounded-xl"
              />
            </div>
            <div>
              <h3 className="heading-xl text-primary mb-6">Combinamos Estratégia, Tecnologia e Inovação</h3>
              <ul className="space-y-4">
                {[
                  "Consultoria estratégica personalizada",
                  "Desenvolvimento de aplicações customizadas",
                  "Plataforma de consultoria online",
                  "Soluções financeiras integradas (em breve)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-0.5" />
                    <span className="body-md text-black dark:text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES SEÇÃO */}
      <section id="solucoes" className="section-spacing bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">Nossas Soluções</h2>
            <p className="body-lg text-blue/80 max-w-2xl mx-auto">
              Cada solução é projetada para resolver desafios específicos do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

             {/* G-CON ONLINE */}
              <Card className=" card-elevated p-8 border border-3 border-gray-300 bg-[#f3f4f6] dark:bg-[#111827] ">
              <div className="flex justify-start mb-4">
                <img
                  src={logoGcon}
                  alt="G-Con"
                  className="w-30 object-contain"
                />
              </div>
              <h3 className="heading-lg text-primary mb-3">G-Con Online: Consultoria Remota</h3>
               <p className=" text-base md:text-lg leading-relaxed text-black dark:text-white font-medium  mb-6 ">
                Acesso a consultoria de qualidade sem sair do seu escritório. Sessões online, flexíveis e com resultados comprovados.
              </p>
              <ul className="space-y-2 mb-6">
                <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                  <span>Flexibilidade de horários</span>
                </li>
                <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <DollarSign className="w-4 h-4 text-[#00D9FF]" />
                  <span>Custo reduzido</span>
                </li>
                <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <Zap className="w-4 h-4 text-[#00D9FF]" />
                  <span>Acesso de qualquer lugar</span>
                </li>
              </ul>
              <a href="/GCon">
                <Button className="btn-primary w-full"> Explorar G-Con Online 
              </Button>
              </a>
            </Card>

            {/* G-TECH */}
              <Card className=" card-elevated p-8 border border-3 border-gray-300 bg-[#f3f4f6] dark:bg-[#111827] ">
              <div className="flex justify-start mb-4">
                <img
                  src={logoGtech}
                  alt="G-Con"
                  className="w-30 object-contain"
                />  
              </div>
              <h3 className="heading-lg text-primary mb-3">G-Tech: Desenvolvimento de Apps</h3>
               <p className=" text-base md:text-lg leading-relaxed text-black dark:text-white font-medium  mb-6 ">
                Aplicativos customizados que automatizam seus processos e conectam sua equipe. Tecnologia que funciona para o seu negócio.
              </p>
              <ul className="space-y-2 mb-6">
                <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <Zap className="w-4 h-4 text-[#00D9FF]" />
                  <span>Automação de processos</span>
                </li>
                <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <TrendingUp className="w-4 h-4 text-[#00D9FF]" />
                  <span>Integração com sistemas</span>
                </li>
                <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                  <span>Escalabilidade garantida</span>
                </li>
              </ul>
              <a href="/gtech">
                  <Button className="btn-primary w-full">Explorar G-Tech</Button>
              </a>
              
            </Card>

           {/* G-CON ONLINE */}
              <Card className=" card-elevated p-8 border border-3 border-gray-300 bg-[#f3f4f6] dark:bg-[#111827] ">
              <div className="flex justify-start mb-4">
                <img
                  src={logoGcon}
                  alt="G-Con"
                  className="w-30 object-contain"
                />
              </div>
              <h3 className="heading-lg text-primary mb-3">G-Con: Consultoria empresarial</h3>
               <p className=" text-base md:text-lg leading-relaxed text-black dark:text-white font-medium  mb-6 ">
                Consultoria presencial diretamente na sua empresa, com análise do negócio, identificação de oportunidades e orientação estratégica para melhorar seus resultados.
              </p>
              <ul className="space-y-2 mb-6">
                <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                  <span>Atendimento personalizado no local</span>
                </li>
                <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <DollarSign className="w-4 h-4 text-[#00D9FF]" />
                  <span>Análise da realidade da empresa</span>
                </li>
                <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <Zap className="w-4 h-4 text-[#00D9FF]" />
                  <span>Estratégias práticas e direcionadas</span>
                </li>
              </ul>
              <a href="/GCon">
                <Button className="btn-primary w-full"> Explorar G-Con- Consultoria empresarial
              </Button>
              </a>
            </Card>
            
            {/* G-BANK */}
              <Card className=" card-elevated p-8 border border-3 border-gray-300 bg-[#c2d2ed] dark:bg-[#324165] ">
              <div className="flex justify-start mb-4">
                <img
                  src={logoGbank}
                  alt="G-Bank"
                  className="w-30 object-contain"
                />
              </div>
         
              <h3 className="heading-lg text-primary mb-3">G-Bank: Soluções Financeiras</h3>
               <p className=" text-base md:text-lg leading-relaxed text-black dark:text-white font-medium  mb-6 ">
                Em breve. Banco digital + máquina de cartão integrada. Gerenciar finanças da empresa com uma única plataforma.
              </p>
              <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                  <span>Solução Estratégica</span>
                </li>
              <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <TrendingUp className="w-4 h-4 text-[#00D9FF]" />
                  <span>Menos taxas abusivas</span>
                </li>
              <li className=" flex items-center gap-3 text-black dark:text-white text-base md:text-lg font-medium ">
                  <Zap className="w-4 h-4 text-[#00D9FF]" />
                  <span>Agilidade</span>
                </li>
              <Button className="btn-outline w-full">  🚧 Em desenvolvimento</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* RESULTADOS SEÇÃO */}
      <section id="resultados"className="section-spacing bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">Resultados Comprovados</h2>
             <p className="body-lg text-blue/80 max-w-2xl mx-auto">
              Números reais de empresas que transformaram seu negócio com o Grupo Germano
            </p>
          </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-1">
            {[
              { number: "50+", label: "Empresas Transformadas" },
              { number: "100+", label: "Projetos Realizados" },
              { number: "200+", label: "Treinamentos Prestados" },
              { number: "28.6%", label: "Crescimento Médio" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-black dark:text-white">{stat.label}</div>
              </div>
            ))}
          </div>
          <br>
          </br>
          <br></br>
         

          {/* CLIENTES COM LOGOS E DEPOIMENTOS */}
          
          <div className="grid md:grid-cols-4 gap-7 mx-8">

          {/* ARTILIMP */}
          <div
        className="
            bg-[#ffffff]
            dark:bg-gradient-to-b
            dark:from-[#071224]
            dark:to-[#0A1830]

            border-2
            border-[#082539]
            dark:border-white/10

            rounded-3xl
            p-8

            transition-all
            duration-300

            hover:-translate-y-2
          ">

            <div className="flex items-center gap-4 mb-8">

              {/* FOTO/LOGO */}
              <img
                src={artilimpLogo}
                alt="Artilimp"
                 className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h4 className="text-2xl font-bold text-[#00D9FF]">
                  Artilimp
                </h4>
              </div>
            </div>
            <div className="border-l-4 border-[#00D9FF] pl-4">

              <p className="body-md text-black dark:text-white italic mb-4">
                  "Ajuda na visão global dos processos e facilita a identificação de gargalos. 
                  Possui amplo conhecimento em fluxos, gestão e melhorias operacionais, além de
                   grande flexibilidade para compreender as necessidades do cliente, sempre focado
                  em alcançar resultados e os objetivos da empresa."
              </p>

              <div>
                <div className="font-semibold text-primary">
                  Celso Adriel Costa
                </div>

                <div className="text-sm text-black dark:text-white">
                  CEO Artilimp
                </div>
              </div>

            </div>

          </div>


            {/* Star Jeans */}
           <div
           className="
            bg-[#ffffff]
            dark:bg-gradient-to-b
            dark:from-[#071224]
            dark:to-[#0A1830]

            border-2
            border-[#082539]
            dark:border-white/10

            rounded-3xl
            p-8

            transition-all
            duration-300

            hover:-translate-y-2
          ">

            <div className="flex items-center gap-4 mb-6">

              {/* FOTO/LOGO */}
              <img
                src={starJeansLogo}
                alt="StarJeans"
                className="w-20 h-20 object-cover rounded-full border-2[#00D9FF]"
              />

              <div>
                <h4 className="text-2xl font-bold text-[#00D9FF]">
                  Star Jeans
                </h4>
              </div>
            </div>

            <div className="border-l-4 border-[#00D9FF] pl-4">

              <p className="body-md text-black dark:text-white italic mb-4">
                "A consultoria nos ajudou a controlar melhor o estoque e planejar
                 compras com mais eficiência, reduzindo desperdícios e gastos 
                 desnecessários. O direcionamento recebido trouxe mais segurança 
                 para investir nos produtos certos e melhorar nossos resultados."
              </p>

              <div>
                <div className="font-semibold text-primary">
                  Mariana fazolli 
                </div>

                <div className="text-sm text-black dark:text-white">
                  Lider operações
                </div>
              </div>

            </div>

          </div>

          
       {/* SOS suplementos */}
            <div
           className="
            bg-[#ffffff]
            dark:bg-gradient-to-b
            dark:from-[#071224]
            dark:to-[#0A1830]

            border-2
            border-[#082539]
            dark:border-white/10

            rounded-3xl
            p-8

            transition-all
            duration-300

            hover:-translate-y-2
          ">

            <div className="flex items-center gap-4 mb-6">

              {/* FOTO/LOGO */}
              <img
                src={SOSLogo}
                alt="SOS suplementos"
                className="w-20 h-20 object-cover rounded-full border-2-[#00D9FF]"
              />

              <div>
                <h4 className="text-2xl font-bold text-[#00D9FF]">
                  SOS suplementos
                </h4>
              </div>

            </div>

            <div className="border-l-4 border-[#00D9FF] pl-4">

             <p className="body-md text-black dark:text-white italic mb-4">
                "Eu só tenho a agradecer o que a Germano consultoria fez pelas lojas, 
                eu consegui enxergar pontos que eu não via, reduzindo custos desnecessários
                e organizando melhor os produtos e estoque. Daqui alguns dias eu vou implantar
                um novo sistema na loja para estimular os vendedores a otimizar as vendas e eu
                quero sua ajuda de novo."

              </p>

              <div>
                <div className="font-semibold text-primary">
                  Mateus Ongaro 
                </div>

                <div className="text-sm text-black dark:text-white">
                 Proprietário
                </div>
              </div>

            </div>

          </div>
          {/* Palácio das festas */}
           <div
              className="
            bg-[#ffffff]
            dark:bg-gradient-to-b
            dark:from-[#071224]
            dark:to-[#0A1830]

            border-2
            border-[#082539]
            dark:border-white/10

            rounded-3xl
            p-8

            transition-all
            duration-300

            hover:-translate-y-2
          ">

            <div className="flex items-center gap-4 mb-6">

              {/* FOTO/LOGO */}
              <img
                src={palacioDasFestas}
                alt="StarJeans"
                className="w-20 h-20 object-cover rounded-full border-2 -[#00D9FF]"
              />

              <div>
                <h4 className="text-2xl font-bold text-[#00D9FF]">
                  Palácio das Festas
                </h4>
              </div>

            </div>

            <div className="border-l-4 border-[#00D9FF] pl-4">

              <p className="body-md text-black dark:text-white italic mb-4">
                "A consultoria nos fez enxergar cada atividade da empresa como parte
                 de um processo estratégico voltado à satisfação do cliente. 
                 Quebramos paradigmas, aumentamos nossa produtividade e conquistamos 
                 uma gestão mais eficiente e organizada."
              </p>

              <div>
                <div className="font-semibold text-primary">
                  Melquia almeida 
                </div>

                <div className="text-sm text-black dark:text-white">
                      
                </div>
                CEO
              </div>

            </div>

          </div>
        </div>
         </section>

        {/* EQUIPE */}
        <section
          id="equipe"
          className="
            relative
            py-20 px-6
            bg-gradient-to-b
            from-background
            via-background
            to-muted/30
            overflow-hidden
          "
        >

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] rounded-full"></div>

          <div className="max-w-7xl mx-auto relative z-10">

            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                Nosso Time
              </h2>
            </div>

            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-12"
            >
              {[
                {
                  name: "Caíque Germano",
                  role: "Diretor",
                  image: caique,
                },
                {
                  name: "Lavinia Bueno",
                  role: "TI ",
                  image: lavinia,
                },
                {
                  name: "Gabriel",
                  role: "TI ",
                  image: gabriel,
                },
                {
                  name: "Vinicius",
                  role: "Desenvolvedor Full Stack",
                  image: vini,
                },
                {
                  name: "Joaquim",
                  role: "Consultor",
                  image: joaquim,
                },
                {
                  name: "Ruanita Oliveira",
                  role: "Recursos Humanos",
                  image: ruanita,
                },
              ].map((member, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-3xl
                      border border-border
                      bg-card/80
                      backdrop-blur-xl
                      shadow-xl
                      hover:scale-[1.02]
                      transition-all duration-500
                    "
                  >
                    <div className="relative h-[400px] overflow-hidden">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="
                        w-full h-full
                        object-cover object-[center_20%]
                        group-hover:scale-110
                        transition-transform
                        duration-700
                      "
                    />
                  

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {member.name}
                        </h3>

                        <p className="text-cyan-300 font-medium">
                          {member.role}
                        </p>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

        </section>
                <br>
                </br>
                <br>
                </br>

      {/* CTA FINAL */}
      <section id="contato" className=" section-spacing bg-gradient-to-br from-[#0F3A7D] via-[#0e3c82] to-[#066db7] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md text-white mb-4"> Pronto Para Transformar Seu Negócio?</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8 text-white">
            Agende um diagnóstico gratuito e descubra o potencial oculto da sua empresa. Sem compromisso. Sem custo. Apenas insights valiosos.
          </p>
          
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5519981640280"
            target="_blank"
            rel="noopener noreferrer"
          >
             <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 min-w-[280px] border border-gray-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              Agendar Diagnóstico Gratuito
            </Button>
          </a>

          <a
            href="https://wa.me/5519981640280"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 min-w-[280px] border border-gray-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <img
                src={whatsappLogo}
                alt="WhatsApp"
                className="w-5 h-5 object-contain"
              />
              Fale via WhatsApp
            </Button>
          </a>
        </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card/60 text-foreground py-12 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Grupo Germano" className=" w-36 md:w-44 h-auto object-contain "/>
            </div>
              <p className="text-base md:text-lg font-medium text-black dark:text-white">Ecossistema integrado de soluções para performance empresarial.</p>
            </div>
            
            <div>
              <h4 className="font-bold">Links Rápidos</h4>
              <ul className="space-y-2 text-base md:text-lg font-medium text-black dark:text-white">
                <li><a href="#sobre" className="hover:text-[#00D9FF] transition">Sobre</a></li>
                <li><a href="#solucoes" className="hover:text-[#00D9FF] transition">Soluções</a></li>
                <li><a href="#resultados" className="hover:text-[#00D9FF] transition">Resultados</a></li>
                <li><a href="#contato" className="hover:text-[#00D9FF] transition">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-base md:text-lg font-medium text-black dark:text-white">
                <li>📧 contato@germanoconsultoria.com.br</li>
                <li>📱 (19) 98164-0280</li>
                <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Santa+Julia+259+Santa+Julia+Mogi+Guaçu+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00D9FF] transition cursor-pointer"
                >
                  📍 Rua Santa Julia, 259
                  <br />
                  Santa Julia, Mogi Guaçu - SP
                </a>
              </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/grupo.germano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <img
                    src={instagramLogo}
                    alt="Instagram"
                    className="w-8 h-8 object-contain"
                  />
                </a>
               <a
                  href="https://wa.me/5519981640280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <img
                    src={whatsappLogo}
                    alt="WhatsApp"
                    className="w-7 h-7 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-sm font-bold text-black dark:text-white">
            <p>© 2026 Grupo Germano</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
