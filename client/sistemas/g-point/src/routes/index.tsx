import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Clock,
  Timer,
  FileText,
  Palmtree,
  MapPin,
  CalendarDays,
  Wallet,
  BarChart3,
  Users,
  CheckCircle2,
  Instagram,
  Menu,
  X,
  ArrowRight,
  Layers,
  Eye,
  Zap,
  Handshake,
  LayoutGrid,
  Scale,
  Hourglass,
  MessagesSquare,
  FileWarning,
  Infinity as InfinityIcon,
  BadgeCheck,
} from "lucide-react";

import {
  INSTAGRAM_URL,
  whatsappUrlFor,
  whatsappUrlWithMessage,
} from "../lib/contact";

/* ------------------------------------------------------------------ */
/* Links de conversão — canal único: WhatsApp comercial (src/lib/contact) */
/* ------------------------------------------------------------------ */

const WA_GERAL = whatsappUrlFor("G-POINT");
const WA_DEMO = whatsappUrlWithMessage("Olá! Gostaria de solicitar uma demonstração do G-POINT.");

/* Arquivos oficiais em /public (sem imagens externas) */
const LOGO_GTECH = "/sistemas/g-point/brand/gtech-logo.png"; // recorte de public/LOGO_G-TECH.png
const LOGO_GERMANO = "/sistemas/g-point/brand/grupo-germano-logo.png"; // recorte de public/Logo_Germano.png

const UNLIMITED = "TODOS OS SISTEMAS SEM LIMITES DE USUÁRIOS";



/* ------------------------------------------------------------------ */
/* Componentes de apoio                                                */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Acessibilidade: sem animação para quem prefere movimento reduzido
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/** Ícone oficial do WhatsApp (glifo da marca). */
function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/** Botão de ação principal (cor de conversão #37317D) — sempre abre o WhatsApp. */
function WaButton({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline" | "outline-light";
  className?: string;
}) {
  const styles = {
    dark: "bg-primary-dark text-white shadow-[var(--shadow-soft)] hover:bg-primary",
    light: "bg-white text-primary-dark shadow-lg hover:bg-primary-light",
    outline: "border-2 border-primary-dark text-primary-dark hover:bg-primary-light",
    "outline-light": "border-2 border-white/70 text-white hover:bg-white/10",
  }[variant];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 ${styles} ${className}`}
    >
      <WhatsAppIcon /> {children}
    </a>
  );
}

/** Mockup de notebook com print real do sistema. */
function LaptopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-full">
      <div className="rounded-t-2xl border-[6px] border-b-0 border-[#2a2a33] bg-[#2a2a33] p-0 shadow-[var(--shadow-soft)] sm:border-[10px] sm:border-b-0">
        <div className="flex items-center justify-center pb-1.5 sm:pb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        </div>
        <img src={src} alt={alt} className="block w-full rounded-sm" loading="lazy" />
      </div>
      <div className="relative mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-xl bg-gradient-to-b from-[#c9c8d6] to-[#a9a8ba] sm:h-4">
        <span className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-md bg-[#9897ab]" />
      </div>
    </div>
  );
}

/** Mockup de celular exibindo um recorte do print real do sistema. */
function PhoneMockup({
  src,
  alt,
  position = "center",
}: {
  src: string;
  alt: string;
  position?: string;
}) {
  return (
    <div className="w-full rounded-[1.75rem] border-[6px] border-[#2a2a33] bg-[#2a2a33] shadow-2xl">
      <div
        className="relative overflow-hidden rounded-[1.3rem] bg-[#1b1b1b]"
        style={{ aspectRatio: "10 / 16" }}
      >
        <span className="absolute left-1/2 top-1.5 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/70" />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ objectPosition: position }}
        />
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <span
        className={`text-xs font-bold tracking-[0.2em] ${light ? "text-white/80" : "text-primary"}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-primary-dark"}`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/90" : "text-ink"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}

/** Selo de destaque máximo da regra comercial. */
function UnlimitedSeal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl bg-primary px-5 py-4 text-white shadow-[var(--shadow-soft)] ring-4 ring-primary/15 ${className}`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
        <InfinityIcon className="h-6 w-6" />
      </span>
      <div>
        <p className="font-display text-sm font-extrabold leading-tight tracking-wide sm:text-base">
          {UNLIMITED}
        </p>
        <p className="mt-0.5 text-xs text-white/85 sm:text-sm">
          Sua empresa não paga a mais por adicionar novos colaboradores.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

// Prints reais do G-POINT (public/G-Point1..9)
const screens = [
  {
    icon: Clock,
    name: "Ponto",
    title: "Bata o ponto de forma simples e acompanhe suas horas.",
    description:
      "Registre a entrada e a saída da jornada diretamente pelo sistema, com data e hora definidas pelo sistema, e acompanhe quanto deveria ser trabalhado e quanto foi efetivamente realizado no dia.",
    bullets: [
      "Registro de entrada e saída",
      "Horas previstas",
      "Horas trabalhadas",
      "Saldo do dia",
    ],
    img: "/sistemas/g-point/G-Point1.webp",
  },
  {
    icon: Timer,
    name: "Banco de horas",
    title: "Tenha uma visão clara do seu banco de horas.",
    description:
      "Compare a jornada prevista com as horas efetivamente registradas e acompanhe de forma clara as horas excedentes, horas faltantes e o saldo do período — com detalhes diários de previsto, trabalhado e saldo.",
    bullets: ["Horas excedentes", "Horas faltantes", "Saldo do período", "Detalhe diário"],
    img: "/sistemas/g-point/G-Point2.png",
  },
  {
    icon: FileText,
    name: "Atestados",
    title: "Envie e acompanhe seus atestados.",
    description:
      "O colaborador envia o documento diretamente pelo sistema e acompanha o status da análise, com histórico completo de solicitações.",
    bullets: [
      "Envio pelo sistema",
      "Histórico de solicitações",
      "Status de aprovação",
      "Dias aprovados abonados no banco de horas",
    ],
    img: "/sistemas/g-point/G-Point3.png",
  },
  {
    icon: Palmtree,
    name: "Férias",
    title: "Solicite e acompanhe suas férias.",
    description:
      "Facilite a solicitação e o acompanhamento dos períodos de férias dos colaboradores, do pedido à aprovação.",
    bullets: [
      "Solicitação pelo sistema",
      "Fluxo de aprovação",
      "Acompanhamento de status",
      "Dias aprovados não geram horas faltantes",
    ],
    img: "/sistemas/g-point/G-Point4.png",
  },
  {
    icon: MapPin,
    name: "Visitas",
    title: "Organize as visitas externas da sua equipe.",
    description:
      "Programe visitas externas dos colaboradores e mantenha a escala da equipe organizada automaticamente.",
    bullets: [
      "Seleção de colaboradores",
      "Data e horário definidos",
      "Visitas programadas em um só lugar",
      "Escala atualizada automaticamente",
    ],
    img: "/sistemas/g-point/G-Point5.png",
  },
  {
    icon: CalendarDays,
    name: "Escala",
    title: "Tenha a escala da equipe sempre organizada.",
    description:
      "Consulte o status e os horários de ponto de cada colaborador mês a mês, em uma agenda clara com as respectivas datas.",
    bullets: [
      "Visualização mensal",
      "Horários de ponto",
      "Status dos colaboradores",
      "Agenda de escala",
    ],
    img: "/sistemas/g-point/G-Point6.png",
  },
  {
    icon: Wallet,
    name: "Holerites",
    title: "Emita e disponibilize os holerites com praticidade.",
    description:
      "Emita os holerites dos colaboradores, publique os documentos para consulta e imprima quando necessário.",
    bullets: [
      "Emissão de holerites",
      "Publicação para o colaborador",
      "Consulta dos emitidos",
      "Impressão quando necessário",
    ],
    img: "/sistemas/g-point/G-Point7.png",
  },
  {
    icon: BarChart3,
    name: "Relatórios",
    title: "Tenha uma visão consolidada da sua equipe.",
    description:
      "Centralize as principais informações da equipe em relatórios mensais para facilitar o acompanhamento, a gestão e o envio ao DP e à contabilidade.",
    bullets: ["Espelho mensal", "Férias e atestados", "Holerites", "Exportação em PDF"],
    img: "/sistemas/g-point/G-Point8.png",
  },
  {
    icon: Users,
    name: "Equipe",
    title: "Mantenha os dados dos colaboradores organizados.",
    description:
      "Cadastre jornadas e mantenha os dados dos colaboradores atualizados em um único lugar.",
    bullets: ["Colaboradores", "Dados cadastrais", "Jornadas", "Perfis de acesso"],
    img: "/sistemas/g-point/G-Point9.png",
  },
];

// Recursos principais → índice da tela correspondente em `screens`
const resources = [
  {
    icon: Clock,
    title: "Registro de ponto inteligente e intuitivo",
    text: "Entrada e saída registradas em poucos cliques, com data e hora definidas pelo sistema.",
    screen: 0,
  },
  {
    icon: Timer,
    title: "Cálculo diário automatizado",
    text: "Saldo de horas e horas extras calculados automaticamente todos os dias.",
    screen: 1,
  },
  {
    icon: Hourglass,
    title: "Banco de horas flexível e automatizado",
    text: "Horas excedentes, faltantes e saldo do período sempre atualizados.",
    screen: 1,
  },
  {
    icon: FileText,
    title: "Atestados digitais com abono",
    text: "Envio e aprovação digital de atestados médicos, com abono no banco de horas.",
    screen: 2,
  },
  {
    icon: Palmtree,
    title: "Fluxo de aprovação de férias",
    text: "Solicitação e controle de férias do pedido à aprovação.",
    screen: 3,
  },
  {
    icon: MapPin,
    title: "Visitas externas e trabalho em campo",
    text: "Agendamento e registro de visitas externas, com a escala atualizada.",
    screen: 4,
  },
  {
    icon: Wallet,
    title: "Holerites para os colaboradores",
    text: "Emissão e disponibilização dos holerites direto no sistema.",
    screen: 6,
  },
  {
    icon: BarChart3,
    title: "Relatórios e exportações mensais",
    text: "Relatórios completos e exportação mensal para a contabilidade e o DP.",
    screen: 7,
  },
];

const pains = [
  {
    icon: Scale,
    pain: "Risco de passivos trabalhistas",
    solution:
      "Registros com data e hora definidas pelo sistema e histórico organizado da jornada de cada colaborador.",
  },
  {
    icon: Hourglass,
    pain: "Demora e estresse no fechamento da folha",
    solution:
      "Saldo de horas calculado diariamente e relatórios mensais prontos para exportar ao DP e à contabilidade.",
  },
  {
    icon: MessagesSquare,
    pain: "Discussões sobre horas extras",
    solution:
      "Empresa e colaborador enxergam as mesmas horas previstas, trabalhadas, excedentes e faltantes.",
  },
  {
    icon: FileWarning,
    pain: "Sumiço de atestados médicos",
    solution:
      "Atestados enviados pelo sistema, com status de aprovação, histórico e abono no banco de horas.",
  },
];

const benefits = [
  {
    icon: Layers,
    title: "Mais organização",
    text: "Centralize informações relacionadas à jornada e às rotinas da equipe.",
  },
  {
    icon: Eye,
    title: "Mais transparência",
    text: "Empresa e colaboradores acompanham informações de forma clara.",
  },
  {
    icon: Zap,
    title: "Menos processos manuais",
    text: "Reduza a dependência de planilhas e controles espalhados.",
  },
  {
    icon: Handshake,
    title: "Mais praticidade",
    text: "Facilite solicitações, registros e acompanhamento das informações.",
  },
  {
    icon: LayoutGrid,
    title: "Gestão centralizada",
    text: "Tenha diferentes processos relacionados à equipe em um único sistema.",
  },
];

type Cycle = "mensal" | "anual";

const plans = [
  {
    id: "A",
    name: "Plano A",
    label: "Essencial / Rotinas de Jornada",
    monthly: "R$ 99,99",
    yearly: "R$ 999,99",
    yearlySaving: "R$ 199,89", // 12 × R$ 99,99 = R$ 1.199,88
    summary: "Controle de ponto eletrônico completo e rotinas operacionais de jornada.",
    items: ["Controle de ponto eletrônico completo", "Rotinas operacionais de jornada"],
    featured: false,
  },
  {
    id: "B",
    name: "Plano B",
    label: "Completo / Avançado DP",
    monthly: "R$ 149,99",
    yearly: "R$ 1.499,99",
    yearlySaving: "R$ 299,89", // 12 × R$ 149,99 = R$ 1.799,88
    summary:
      "Tudo do Plano A + recursos avançados de jornada, gestão de atestados, férias, holerites e rotinas completas de DP.",
    items: [
      "Tudo do Plano A",
      "Recursos avançados de jornada",
      "Gestão de atestados",
      "Gestão de férias",
      "Holerites",
      "Rotinas completas de DP",
    ],
    featured: true,
  },
];

const faqs = [
  {
    q: "O que é o G-POINT?",
    a: "O G-POINT é o sistema da G-Tech para ponto eletrônico, controle de jornada e rotinas de DP/RH.",
  },
  {
    q: "Existe limite de usuários?",
    a: "Não. Todos os sistemas são sem limites de usuários: sua empresa não paga a mais por adicionar novos colaboradores.",
  },
  {
    q: "Há taxa de implantação?",
    a: "Não. A taxa de implantação é R$ 0 nos dois planos — sem taxa de adesão.",
  },
  {
    q: "Qual a diferença entre o Plano A e o Plano B?",
    a: "O Plano A inclui o controle de ponto eletrônico completo e as rotinas operacionais de jornada. O Plano B inclui tudo do Plano A, mais recursos avançados de jornada, gestão de atestados, férias, holerites e rotinas completas de DP.",
  },
  {
    q: "O G-POINT permite registrar entrada e saída?",
    a: "Sim. O colaborador registra sua entrada e saída e acompanha suas horas previstas e trabalhadas.",
  },
  {
    q: "É possível acompanhar o banco de horas?",
    a: "Sim. O sistema compara as horas previstas e trabalhadas e apresenta horas excedentes, horas faltantes e o saldo do período.",
  },
  {
    q: "Os colaboradores podem enviar atestados?",
    a: "Sim. O colaborador envia o documento e acompanha se a solicitação foi aprovada ou recusada. Os dias aprovados são abonados no banco de horas.",
  },
  {
    q: "É possível solicitar férias pelo sistema?",
    a: "Sim. O colaborador solicita o período de férias e acompanha o status da solicitação.",
  },
  {
    q: "É possível organizar visitas externas?",
    a: "Sim. A empresa programa visitas externas, define colaborador, data e horário e acompanha as visitas programadas.",
  },
  {
    q: "É possível emitir holerites?",
    a: "Sim. A empresa emite, publica para os colaboradores e imprime os holerites quando necessário.",
  },
  {
    q: "Como contrato o G-POINT?",
    a: "Fale com o nosso time comercial pelo WhatsApp. Por lá você solicita uma demonstração e contrata o plano ideal.",
  },
];

const navLinks = [
  { href: "#recursos", label: "Recursos" },
  { href: "#sistema", label: "O sistema" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

/* ------------------------------------------------------------------ */
/* Seções                                                              */
/* ------------------------------------------------------------------ */

function GPointLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3 sm:gap-4">
      <img
        src={LOGO_GTECH}
        alt="G-Tech"
        className={compact ? "h-16 w-auto" : "h-16 w-auto md:h-20"}
        width={392}
        height={395}
      />
      <span className="h-10 w-px bg-white/25" aria-hidden="true" />
      <span className="leading-none">
        <span className="block font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          G-POINT
        </span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-[11px]">
          uma solução G-Tech
        </span>
      </span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 shadow-lg">
      {/* Regra comercial — visível em toda a página */}
      <div className="bg-primary text-white">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-2 px-4 text-center sm:px-6">
          <InfinityIcon className="hidden h-4 w-4 shrink-0 sm:block" />
          <p className="text-[11px] font-extrabold tracking-wide sm:text-xs">
            {UNLIMITED}
            <span className="hidden font-medium md:inline">
              {" "}
              — sua empresa não paga a mais por novos colaboradores
            </span>
          </p>
        </div>
      </div>

      {/* Fundo escuro para garantir o contraste da logo prateada da G-Tech */}
      <div className="bg-primary-dark">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-24">
          <a href="#top" aria-label="G-POINT by G-Tech — início">
            <GPointLockup />
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <WaButton href={WA_DEMO} variant="light" className="px-5 py-2.5">
              Solicitar Demonstração
            </WaButton>
          </nav>
          <button
            className="text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-white/15 px-4 py-4 lg:hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm font-semibold text-white/85 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <WaButton href={WA_DEMO} variant="light" className="mt-3 w-full">
              Solicitar Demonstração
            </WaButton>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-40 pb-16 sm:pb-24 md:pt-48">
      <div className="pointer-events-none absolute -top-20 right-0 h-[480px] w-[480px] rounded-full bg-primary-light blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-[11px] font-bold tracking-wide text-primary-dark sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            PONTO ELETRÔNICO · CONTROLE DE JORNADA · DP/RH
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-primary-dark sm:text-5xl">
            Gestão moderna de jornada para o RH e o Departamento Pessoal
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            Conformidade trabalhista, tecnologia e agilidade em um só sistema: ponto, banco de
            horas, atestados, férias, visitas externas, holerites e relatórios para a contabilidade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WaButton href={WA_DEMO}>Ver demonstração</WaButton>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-7 py-3.5 text-sm font-bold text-primary-dark transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light"
            >
              Ver preços
            </a>
            <a
              href="#sistema"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-7 py-3.5 text-sm font-bold text-primary-dark transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light"
            >
              Conhecer o G-POINT <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <UnlimitedSeal className="mt-8 max-w-xl" />
        </Reveal>

        <Reveal delay={150}>
          <div className="relative pb-10 sm:pr-10">
            <LaptopMockup src="/sistemas/g-point/G-Point1.webp" alt="Tela de registro de ponto do G-POINT" />
            <div className="absolute -bottom-2 right-0 w-[30%] max-w-[170px] sm:-bottom-4">
              <PhoneMockup
                src="/sistemas/g-point/G-Point2.png"
                alt="Saldo do período no banco de horas do G-POINT"
                position="89% 0%"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pains() {
  return (
    <section className="bg-primary-light py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="O QUE O G-POINT RESOLVE"
          title="Menos risco, menos estresse, mais controle"
          text="As dores mais comuns da gestão de jornada resolvidas em um só sistema."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p, i) => (
            <Reveal key={p.pain} delay={i * 80}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3 bg-primary px-5 py-4 text-white">
                  <p.icon className="h-5 w-5 shrink-0" />
                  <h3 className="font-display text-sm font-bold leading-snug">{p.pain}</h3>
                </div>
                <div className="flex flex-1 gap-2.5 p-5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-ink">{p.solution}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Positioning() {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          light
          eyebrow="POSICIONAMENTO"
          title="Tecnologia e agilidade a serviço do RH e do DP"
          text="O G-POINT centraliza a jornada dos colaboradores e as rotinas de DP/RH em um único ambiente — mais organização para a empresa e mais transparência para a equipe."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-dark">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resources({ onSelect }: { onSelect: (i: number) => void }) {
  return (
    <section id="recursos" className="scroll-mt-32 bg-white py-16 sm:py-24 md:scroll-mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="RECURSOS PRINCIPAIS"
          title="Tudo o que o RH e o DP precisam para gerenciar a jornada"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 70}>
              <a
                href="#sistema"
                onClick={() => onSelect(r.screen)}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-2xl font-extrabold text-primary/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold leading-snug text-primary-dark">
                  {r.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink">{r.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Ver a tela{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemTour({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  const s = screens[active]!;
  return (
    <section id="sistema" className="scroll-mt-32 bg-primary-light py-16 sm:py-24 md:scroll-mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="O SISTEMA EM FUNCIONAMENTO"
          title="Conheça as telas reais do G-POINT"
          text="Escolha um módulo para ver como ele funciona na prática."
        />
        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Telas do G-POINT"
        >
          {screens.map((sc, i) => (
            <button
              key={sc.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                i === active
                  ? "bg-primary text-white shadow-[var(--shadow-soft)]"
                  : "bg-white text-primary-dark hover:bg-white/70"
              }`}
            >
              <sc.icon className="h-4 w-4" /> {sc.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]" role="tabpanel">
          <LaptopMockup key={s.img} src={s.img} alt={`Tela de ${s.name} do G-POINT`} />
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-primary">
              {s.name.toUpperCase()}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-primary-dark sm:text-3xl">
              {s.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink">{s.description}</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function UnlimitedBand() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-white shadow-[var(--shadow-soft)] sm:px-12">
            <InfinityIcon className="pointer-events-none absolute -right-8 -top-10 h-52 w-52 text-white/10" />
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-[0.2em]">
              DIFERENCIAL EXCLUSIVO
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {UNLIMITED}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              Sua equipe cresceu? O valor continua o mesmo. Sua empresa não paga a mais por
              adicionar novos colaboradores.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("mensal");
  return (
    <section id="planos" className="scroll-mt-32 bg-primary-light py-16 sm:py-24 md:scroll-mt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="PLANOS E PREÇOS"
          title="Escolha o plano ideal para a sua empresa"
          text="Sem taxa de implantação e sem cobrança por colaborador."
        />

        <Reveal className="mx-auto mt-8 max-w-2xl">
          <UnlimitedSeal />
        </Reveal>

        {/* Alternador mensal/anual */}
        <div className="mt-10 flex justify-center">
          <div
            className="inline-flex rounded-full bg-white p-1 shadow-[var(--shadow-card)]"
            role="group"
            aria-label="Período de cobrança"
          >
            {(["mensal", "anual"] as const).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={cycle === c}
                onClick={() => setCycle(c)}
                className={`rounded-full px-6 py-2.5 text-sm font-bold capitalize transition-all ${
                  cycle === c
                    ? "bg-primary-dark text-white"
                    : "text-primary-dark hover:bg-primary-light"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((p, i) => {
            const price = cycle === "mensal" ? p.monthly : p.yearly;
            const per = cycle === "mensal" ? "/mês" : "/ano";
            const wa = whatsappUrlWithMessage(
              `Olá! Quero contratar o G-POINT — ${p.name} (${p.label}), cobrança ${cycle}.`,
            );
            const f = p.featured;
            return (
              <Reveal key={p.id} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-7 sm:p-9 ${
                    f
                      ? "bg-primary text-white shadow-[var(--shadow-soft)] ring-4 ring-primary/20"
                      : "border border-border bg-white shadow-[var(--shadow-card)]"
                  }`}
                >
                  {f && (
                    <span className="absolute -top-3 right-7 rounded-full bg-primary-dark px-4 py-1 text-xs font-bold tracking-wide text-white">
                      MAIS COMPLETO
                    </span>
                  )}
                  <p
                    className={`text-xs font-bold tracking-[0.2em] ${f ? "text-white/80" : "text-primary"}`}
                  >
                    {p.name.toUpperCase()}
                  </p>
                  <h3
                    className={`mt-1 font-display text-xl font-bold ${f ? "text-white" : "text-primary-dark"}`}
                  >
                    {p.label}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${f ? "text-white/90" : "text-ink"}`}>
                    {p.summary}
                  </p>

                  <div className="mt-6 flex items-end gap-1">
                    <span
                      className={`font-display text-4xl font-extrabold tracking-tight sm:text-5xl ${f ? "text-white" : "text-primary-dark"}`}
                    >
                      {price}
                    </span>
                    <span
                      className={`mb-1.5 text-sm font-semibold ${f ? "text-white/80" : "text-ink"}`}
                    >
                      {per}
                    </span>
                  </div>
                  <p
                    className={`mt-2 min-h-5 text-xs font-semibold ${f ? "text-white/85" : "text-primary"}`}
                  >
                    {cycle === "anual"
                      ? `Economia de ${p.yearlySaving} em relação a 12 mensalidades`
                      : " "}
                  </p>

                  <div
                    className={`mt-5 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${f ? "bg-white/15" : "bg-primary-light text-primary-dark"}`}
                  >
                    <BadgeCheck className="h-4 w-4 shrink-0" />
                    Taxa de Implantação / Dev: R$ 0 (sem taxa de adesão)
                  </div>
                  <div
                    className={`mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold ${f ? "bg-white text-primary-dark" : "bg-primary text-white"}`}
                  >
                    <InfinityIcon className="h-4 w-4 shrink-0" />
                    Usuários ilimitados
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {p.items.map((it) => (
                      <li
                        key={it}
                        className={`flex items-start gap-2 text-sm ${f ? "text-white" : "text-ink"}`}
                      >
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${f ? "text-white" : "text-primary"}`}
                        />{" "}
                        {it}
                      </li>
                    ))}
                  </ul>

                  <WaButton href={wa} variant={f ? "light" : "dark"} className="mt-8 w-full">
                    Contratar {p.name}
                  </WaButton>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Tabela comparativa lado a lado */}
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]">
            <table className="w-full text-left text-sm">
              <caption className="bg-primary-dark px-4 py-3 text-left text-sm font-bold text-white sm:px-6">
                Comparativo de planos · {UNLIMITED}
              </caption>
              <thead>
                <tr className="border-b border-border text-primary-dark">
                  <th className="px-4 py-3 font-semibold sm:px-6">&nbsp;</th>
                  <th className="px-4 py-3 font-bold sm:px-6">
                    Plano A<span className="block text-xs font-medium text-ink">Essencial</span>
                  </th>
                  <th className="px-4 py-3 font-bold sm:px-6">
                    Plano B<span className="block text-xs font-medium text-ink">Completo</span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-ink">
                {[
                  ["Implantação / Dev", "R$ 0", "R$ 0"],
                  ["Mensal", "R$ 99,99/mês", "R$ 149,99/mês"],
                  ["Anual", "R$ 999,99/ano", "R$ 1.499,99/ano"],
                  ["Usuários", "Ilimitados", "Ilimitados"],
                  ["Ponto eletrônico e rotinas de jornada", "✓", "✓"],
                  ["Recursos avançados de jornada", "—", "✓"],
                  ["Atestados, férias e holerites", "—", "✓"],
                  ["Rotinas completas de DP", "—", "✓"],
                ].map(([label, a, b], i) => (
                  <tr key={label} className={i % 2 ? "bg-primary-light/60" : ""}>
                    <th scope="row" className="px-4 py-3 font-semibold text-primary-dark sm:px-6">
                      {label}
                    </th>
                    <td className="px-4 py-3 sm:px-6">{a}</td>
                    <td className="px-4 py-3 font-semibold sm:px-6">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-32 bg-white py-16 sm:py-24 md:scroll-mt-36">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 30}>
              <details className="group rounded-2xl border border-border bg-white px-6 py-4 shadow-sm transition-colors open:border-primary/50 open:bg-primary-light/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-primary-dark [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-primary transition-transform group-open:-rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-white pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-white">
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Tenha o controle da jornada da sua equipe na palma da mão
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/90">
                Fale com o time comercial da G-Tech pelo WhatsApp e veja o G-POINT funcionando na
                sua rotina.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <WaButton href={WA_DEMO} variant="light">
                  Solicitar Demonstração
                </WaButton>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[220px]">
              <PhoneMockup
                src="/sistemas/g-point/G-Point1.webp"
                alt="Horas de hoje e saldo do dia no G-POINT"
                position="89% 0%"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-dark text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr]">
        <div>
          <GPointLockup compact />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Ponto eletrônico, controle de jornada e rotinas de DP/RH.
            <strong className="mt-2 block text-white">{UNLIMITED}</strong>
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Institucional</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={WA_GERAL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white/10 hover:text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <address className="not-italic">
                Rua Santa Julia, 259 - Santa Julia, Mogi Guaçu - SP
              </address>
            </li>
          </ul>
        </div>
      </div>

      {/* Assinatura institucional do Grupo Germano */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 sm:px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-14 items-center rounded-xl bg-white px-3 py-2 shadow-sm">
              <img
                src={LOGO_GERMANO}
                alt="Grupo Germano"
                className="h-10 w-auto"
                width={420}
                height={312}
                loading="lazy"
              />
            </span>
            <span className="text-xs leading-snug">
              Uma empresa do
              <strong className="block text-sm text-white">Grupo Germano</strong>
            </span>
          </div>
          <p className="text-center text-xs text-white/70 md:text-right">
            © {year} G-Tech · Grupo Germano. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WA_GERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o comercial pelo WhatsApp"
      title="WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function Index() {
  const [activeScreen, setActiveScreen] = useState(0);
  return (
    <div id="top" className="min-h-screen bg-white font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <Pains />
        <Resources onSelect={setActiveScreen} />
        <SystemTour active={activeScreen} setActive={setActiveScreen} />
        <Positioning />
        <UnlimitedBand />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Index;
