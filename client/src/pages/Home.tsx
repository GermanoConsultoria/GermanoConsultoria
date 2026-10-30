import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  CheckCircle2,
  Moon,
  Sun,
  Menu,
  X,
  ArrowRight,
  KeyRound,
  ClipboardCheck,
  Stethoscope,
  Scale,
  Handshake,
  Clock,
  ShoppingCart,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/Image/otimizadas/logo.webp";
import logoGtech from "@/Image/otimizadas/logoGtech.webp";
import lavinia from "@/Image/otimizadas/lavinia.webp";
import gabriel from "@/Image/otimizadas/gabriel.webp";
import amanda from "@/Image/otimizadas/amanda.webp";
import thiago from "@/Image/otimizadas/thiago.webp";
import guilherme from "@/Image/otimizadas/guilherme.webp";
import caique from "@/Image/otimizadas/caique.webp";
import joaquim from "@/Image/otimizadas/joaquim.webp";
import ruanita from "@/Image/otimizadas/ruanita.webp";
import artilimpLogo from "@/Image/otimizadas/artilimp.webp";
import palacioDasFestas from "@/Image/otimizadas/palacioDasFestas.webp";
import starJeansLogo from "@/Image/otimizadas/starjeans.webp";
import SOSLogo from "@/Image/otimizadas/SOS.webp";
import solucoes from "@/Image/otimizadas/solucoes.webp";
import solucoesMobile from "@/Image/otimizadas/solucoes-mobile.webp";
import whatsappLogo from "@/Image/otimizadas/whatsapp.webp";
import instagramLogo from "@/Image/otimizadas/instagram.webp";
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

const WHATSAPP_URL = "https://wa.me/5519981640280";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sistemas", label: "Sistemas" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

type Sistema = {
  nome: string;
  segmento: string;
  desc: string;
  icon: LucideIcon;
  cor: string;
  /** Landing page do sistema (client/sistemas/<sistema>). */
  url: string;
  /** Funcionalidades e benefícios, retirados das páginas individuais de cada sistema. */
  funcionalidades?: string[];
  beneficios?: string[];
};

// Ordem e textos dos sistemas G-Tech. As descrições vêm das próprias landing pages.
const SISTEMAS: Sistema[] = [
  {
    nome: "G-PASS",
    segmento: "Segurança de acessos",
    desc: "Cofre corporativo de senhas: centralização de credenciais, compartilhamento controlado, 2FA e auditoria de acessos.",
    icon: KeyRound,
    cor: "text-indigo-500",
    url: "/sistemas/g-pass/",
    funcionalidades: [
      "Cofre central criptografado",
      "Compartilhamento granular de credenciais",
      "Autenticação de dois fatores (2FA) nativa",
      "Auditoria de acessos e importação de dados",
    ],
    beneficios: [
      "Fim das senhas em papéis, planilhas e WhatsApp",
      "Toda a equipe no mesmo cofre, com cada acesso controlado por permissão",
    ],
  },
  {
    nome: "G-CHECK",
    segmento: "Rotinas operacionais",
    desc: "Gestão de rotinas operacionais e checklists, com controle, padronização e produtividade para a sua operação.",
    icon: ClipboardCheck,
    cor: "text-teal-500",
    url: "/sistemas/g-check/",
    funcionalidades: [
      "Checklists por setor e turno",
      "Responsáveis e prazos para cada atividade",
      "Alertas em tempo real e histórico auditável",
      "Calendário visual e dashboards gerenciais",
    ],
    beneficios: [
      "Padronização de ponta a ponta e menos esquecimentos",
      "Decisões com mais visibilidade sobre a operação",
    ],
  },
  {
    nome: "G-CLIN",
    segmento: "Clínicas médicas e odontológicas",
    desc: "Sistema de gestão médica e odontológica: cuidado com o paciente, organização clínica e controle financeiro.",
    icon: Stethoscope,
    cor: "text-red-500",
    url: "/sistemas/g-clin/",
    funcionalidades: [
      "Agenda para múltiplos profissionais",
      "Prontuário eletrônico completo",
      "Financeiro integrado à rotina da clínica",
      "Agendamento online e IA no WhatsApp",
    ],
    beneficios: [
      "Menos faltas com confirmação automática pelo WhatsApp",
      "Atendimentos e caixa no mesmo sistema",
    ],
  },
  {
    nome: "G-ADV",
    segmento: "Escritórios de advocacia",
    desc: "Gestão jurídica estratégica para escritórios: prazos fatais com alertas, portal do cliente, peças e financeiro jurídico em um só lugar.",
    icon: Scale,
    cor: "text-purple-500",
    url: "/sistemas/g-adv/",
    funcionalidades: [
      "Controle e cálculo de prazos fatais",
      "Portal do Cliente e Kanban de tarefas e audiências",
      "Gestão documental e de peças",
      "Financeiro jurídico com boletos, PIX e NFS-e",
    ],
    beneficios: [
      "Alertas preventivos para não perder prazos",
      "Integrações nativas com Banco Inter, Focus NFe e WhatsApp",
    ],
  },
  {
    nome: "G-CRM",
    segmento: "Vendas e relacionamento",
    desc: "Organize contatos, funil de vendas, negociações, tarefas e resultados comerciais da sua equipe.",
    icon: Handshake,
    cor: "text-orange-500",
    url: "/sistemas/g-crm/",
    funcionalidades: [
      "Funil de vendas em Kanban",
      "Contatos, empresas e parceiros centralizados",
      "Reuniões e tarefas vinculadas ao lead",
      "Relatórios de desempenho e comissões",
    ],
    beneficios: [
      "Nenhum lead esquecido sem follow-up",
      "Histórico completo de cada negociação",
    ],
  },
  {
    nome: "G-POINT",
    segmento: "Ponto e departamento pessoal",
    desc: "Ponto eletrônico e controle de jornada: banco de horas, atestados, férias, visitas externas, holerites e relatórios para o DP.",
    icon: Clock,
    cor: "text-blue-500",
    url: "/sistemas/g-point/",
    funcionalidades: [
      "Registro de ponto com cálculo diário automatizado",
      "Banco de horas flexível",
      "Atestados digitais, férias e visitas externas",
      "Holerites e relatórios mensais para o DP",
    ],
    beneficios: [
      "Menos planilhas e processos manuais",
      "Mais transparência para empresa e colaboradores",
    ],
  },
  {
    nome: "G-PDV",
    segmento: "Varejo e frente de caixa",
    desc: "Gestão de vendas, caixa e produtos para o varejo, com financeiro, dashboards e relatórios.",
    icon: ShoppingCart,
    cor: "text-green-500",
    url: "/sistemas/g-pdv/",
    funcionalidades: [
      "Frente de caixa com busca por nome, SKU ou código de barras",
      "Controle de caixa: abertura, sangria e fechamento",
      "Pagamentos, descontos, estornos e histórico de vendas",
      "Catálogo de produtos com planilhas XLSX e campos fiscais",
    ],
    beneficios: [
      "Financeiro, dashboards e relatórios em um só sistema",
      "Múltiplas lojas, usuários e permissões",
    ],
  },
  {
    nome: "FLOW",
    segmento: "Projetos e tarefas",
    desc: "Gestão de projetos, tarefas e financeiro integrado para centralizar e acompanhar toda a operação.",
    icon: Workflow,
    cor: "text-cyan-500",
    url: "/sistemas/flow/",
    funcionalidades: [
      "Projetos com escopos, etapas e entregas",
      "Tarefas com responsáveis, prazos e status",
      "Financeiro por projeto",
      "Progresso e métricas em tempo real",
    ],
    beneficios: [
      "Cada entrega com um responsável definido",
      "Atrasos identificados antes de impactar as entregas",
    ],
  },
];

const SISTEMAS_DETALHADOS = SISTEMAS.filter(s => s.funcionalidades);

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sistemaAtivo, setSistemaAtivo] = useState(0);

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

  // Rotas antigas (/gtech etc.) redirecionam para "/#secao": rola até a seção ao abrir a página.
  useEffect(() => {
    if (!window.location.hash) return;
    const alvo = document.querySelector(window.location.hash);
    if (alvo) setTimeout(() => alvo.scrollIntoView({ behavior: "smooth" }), 100);
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

  const detalhe = SISTEMAS_DETALHADOS[sistemaAtivo];
  const DetalheIcon = detalhe.icon;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">

      {/* HEADER/NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-white/10 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 h-full">
            <img
              src={logo}
              alt="Grupo Germano"
              className="h-15 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-bold">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-xl border bg-card hover:scale-105 transition"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <Button className="btn-primary text-sm">
                Fale Conosco
              </Button>
            </a>
            <button
              onClick={() => setMenuOpen(open => !open)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className="md:hidden p-2 rounded-xl border bg-card hover:scale-105 transition"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-2xl fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1 font-bold">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 rounded-xl text-foreground/80 hover:text-primary hover:bg-muted transition"
                >
                  {link.label}
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-2 sm:hidden">
                <Button className="btn-primary w-full">Fale Conosco</Button>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="pt-32 pb-24 gradient-hero scroll-mt-20">
        <div className="container mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LADO ESQUERDO */}
            <div className="container mx-auto px-5 lg:px-8 slide-up">
              <div className="inline-block mb-6 px-4 py-2 bg-accent/20 rounded-full">
                <span className="text-primary text-sm font-medium">
                  ✨ Tecnologia para gestão empresarial
                </span>
              </div>

              <h1 className="display-lg text-primary mb-6 leading-tight">
                Sistemas Que Organizam, Automatizam e Fazem Sua Empresa Crescer
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-black dark:text-white mb-10 max-w-2xl">
                O Grupo Germano desenvolve soluções tecnológicas para empresas. Com os sistemas do G-Tech, sua gestão fica mais simples, segura e eficiente — do caixa ao ponto, da clínica ao escritório.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#sistemas">
                  <Button className="btn-primary text-lg px-10 py-6 w-full sm:w-auto">
                    Conhecer os Sistemas
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-outline text-lg px-10 py-6 w-full sm:w-auto">
                    Falar com um Especialista
                  </Button>
                </a>
              </div>
            </div>

            {/* LADO DIREITO */}
            <div className="space-y-8 px-3 lg:px-0">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-primary">8</div>
                  <div>
                    <h3 className="font-semibold text-lg text-black dark:text-white">💻 Sistemas Especializados</h3>
                    <p className="text-muted-foreground">Soluções para diferentes segmentos e áreas da empresa.</p>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-primary">50+</div>
                  <div>
                    <h3 className="font-semibold text-lg text-black dark:text-white">🏆 Empresas Atendidas</h3>
                    <p className="text-muted-foreground">Negócios que confiam no Grupo Germano.</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* SISTEMAS - CARDS INDIVIDUAIS */}
      <section id="sistemas" className="section-spacing bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <img
              src={logoGtech}
              loading="lazy"
              decoding="async"
              alt="G-Tech"
              className="w-28 md:w-32 h-auto object-contain mx-auto mb-6"
            />
            <h2 className="display-md text-primary mb-4">Nossos Sistemas</h2>
            <p className="body-lg text-black/70 dark:text-white/80 max-w-2xl mx-auto">
              Conheça as soluções do G-Tech e escolha o sistema ideal para a gestão da sua empresa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {SISTEMAS.map(sistema => {
              const Icon = sistema.icon;
              return (
                <div
                  key={sistema.nome}
                  className="card-elevated group p-6 md:p-8 flex flex-col border-l-4 border-l-primary bg-[#f3f4f6] dark:bg-[#111827]"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-primary/10 dark:bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-7 h-7 ${sistema.cor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary dark:text-white">{sistema.nome}</h3>
                      <p className="text-sm font-semibold text-[#066db7] dark:text-[#00D9FF]">{sistema.segmento}</p>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-black dark:text-white/90 mb-8 flex-grow">
                    {sistema.desc}
                  </p>

                  <a href={sistema.url}>
                    <Button className="btn-primary w-full">
                      Conhecer o {sistema.nome}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOBRE SEÇÃO */}
      <section id="sobre" className="section-spacing gradient-hero scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">Tecnologia Feita Para a Gestão da Sua Empresa</h2>
            <p className="body-lg text-blue/80 max-w-3xl mx-auto">
              Fundado em 2018, o Grupo Germano é uma empresa voltada à tecnologia, à inovação e ao desenvolvimento de sistemas para gestão empresarial. Por meio do G-Tech, criamos soluções que organizam processos, automatizam rotinas e dão mais controle ao dia a dia das empresas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Arte do ecossistema G-Tech: versão vertical no celular, horizontal nas demais telas.
                  Fonte editável em originais/arte-sobre-nos/. */}
              <picture>
                <source media="(max-width: 639px)" srcSet={solucoesMobile} width={600} height={900} />
                <img
                  src={solucoes}
                  loading="lazy"
                  decoding="async"
                  alt="Ecossistema de sistemas G-Tech do Grupo Germano: G-PASS, G-CHECK, G-CLIN, G-ADV, G-CRM, G-POINT, G-PDV e FLOW integrados"
                  width={1200}
                  height={679}
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </picture>
            </div>
            <div>
              <h3 className="heading-xl text-primary mb-6">Inovação Aplicada ao Dia a Dia do Seu Negócio</h3>
              <ul className="space-y-4">
                {[
                  "Sistemas especializados para diferentes segmentos e áreas da empresa",
                  "Desenvolvimento de aplicações customizadas",
                  "Implantação acompanhada pela nossa equipe",
                  "Atendimento próximo pelo WhatsApp"
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

        {/* EQUIPE */}
        <section
          id="equipe"
          aria-label="Nossa equipe"
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
                  name: "Amanda Pepino",
                  role: "Comercial ",
                  image: amanda,
                },
                {
                  name: "Lavinia Bueno",
                  role: "TI ",
                  image: lavinia,
                },
                {
                  name: "Gabriel Vinholi",
                  role: "Desenvolvedor Full Stack",
                  image: gabriel,
                },
                {
                  name: "Thiago Lopes",
                  role: "Desenvolvedor Full Stack",
                  image: thiago,
                },
                {
                  name: "Guilherme Crispim",
                  role: "Suporte",
                  image: guilherme,
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
                      loading="lazy"
                      decoding="async"
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

      {/* SOLUÇÕES SEÇÃO - FUNCIONALIDADES E BENEFÍCIOS DE CADA SISTEMA */}
      <section id="solucoes" className="section-spacing bg-gradient-to-b from-muted to-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="display-md text-primary mb-4">Soluções G-Tech</h2>
            <p className="body-lg text-black/70 dark:text-white/80 max-w-2xl mx-auto">
              Veja o que cada sistema faz e como ele ajuda a sua empresa no dia a dia.
            </p>
          </div>

          {/* SELETOR DE SISTEMA */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10" role="tablist" aria-label="Sistemas G-Tech">
            {SISTEMAS_DETALHADOS.map((sistema, i) => (
              <button
                key={sistema.nome}
                role="tab"
                aria-selected={sistemaAtivo === i}
                onClick={() => setSistemaAtivo(i)}
                className={`px-4 md:px-5 py-2 rounded-full border text-sm md:text-base font-bold transition-all duration-300 ${
                  sistemaAtivo === i
                    ? "bg-[#0F3A7D] text-white border-[#0F3A7D] shadow-[0_10px_30px_rgba(0,217,255,0.25)]"
                    : "bg-card border-border text-foreground/80 hover:border-[#00D9FF] hover:text-primary"
                }`}
              >
                {sistema.nome}
              </button>
            ))}
          </div>

          {/* DETALHE DO SISTEMA SELECIONADO */}
          <div key={detalhe.nome} role="tabpanel" className="card-elevated max-w-5xl mx-auto p-6 md:p-10 slide-up">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8">
              <div className="p-4 bg-primary/10 dark:bg-white/5 rounded-2xl w-fit">
                <DetalheIcon className={`w-10 h-10 ${detalhe.cor}`} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#066db7] dark:text-[#00D9FF]">{detalhe.segmento}</p>
                <h3 className="heading-xl text-primary dark:text-white">{detalhe.nome}</h3>
                <p className="body-md text-black dark:text-white/90 mt-2 max-w-3xl">{detalhe.desc}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-lg text-primary dark:text-white mb-4">Funcionalidades</h4>
                <ul className="space-y-3">
                  {detalhe.funcionalidades?.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" />
                      <span className="body-md text-black dark:text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary dark:text-white mb-4">Benefícios</h4>
                <ul className="space-y-3">
                  {detalhe.beneficios?.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" />
                      <span className="body-md text-black dark:text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a href={detalhe.url}>
              <Button className="btn-primary w-full sm:w-auto">
                Ver detalhes e planos do {detalhe.nome}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="section-spacing bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">O Que Nossos Clientes Dizem</h2>
             <p className="body-lg text-blue/80 max-w-2xl mx-auto">
              Empresas que confiam no Grupo Germano
            </p>
          </div>
          </div>

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
                loading="lazy"
                decoding="async"
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
                loading="lazy"
                decoding="async"
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
                loading="lazy"
                decoding="async"
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
                loading="lazy"
                decoding="async"
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

      {/* CTA FINAL */}
      <section id="contato" className="section-spacing bg-gradient-to-br from-[#0F3A7D] via-[#0e3c82] to-[#066db7] text-white scroll-mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md text-white mb-4">Pronto Para Modernizar a Gestão da Sua Empresa?</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8 text-white">
            Fale com a nossa equipe, conheça os sistemas do G-Tech e descubra qual solução se encaixa melhor no seu negócio.
          </p>

         <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
             <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 min-w-[280px] border border-gray-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              Falar com um Especialista
            </Button>
          </a>
          <a href="#sistemas">
             <Button className="bg-transparent text-white hover:bg-white/10 px-8 py-6 min-w-[280px] border border-white/60 hover:-translate-y-2 transition-all duration-300">
              Ver Todos os Sistemas
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
              <img src={logo} alt="Grupo Germano" loading="lazy" decoding="async" className=" w-36 md:w-44 h-auto object-contain "/>
            </div>
              <p className="text-base md:text-lg font-medium text-black dark:text-white">Tecnologia e sistemas para gestão empresarial.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-base md:text-lg font-medium text-black dark:text-white">
                {NAV_LINKS.map(link => (
                  <li key={link.href}><a href={link.href} className="hover:text-[#00D9FF] transition">{link.label}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-base md:text-lg font-medium text-black dark:text-white">
                <li>📧 contato@germanoconsultoria.com.br</li>
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
                    loading="lazy"
                    decoding="async"
                    alt="Instagram"
                    className="w-8 h-8 object-contain"
                  />
                </a>
               <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <img
                    src={whatsappLogo}
                    loading="lazy"
                    decoding="async"
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