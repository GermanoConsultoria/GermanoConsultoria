import {
  BarChart3,
  Building2,
  CalendarClock,
  FileClock,
  History,
  SquareKanban,
  Target,
  TrendingDown,
  UserX,
} from "lucide-react";
import { LandingPage, type LandingConfig } from "../components/landing/LandingPage";

const title = "G-CRM | Funil de vendas e gestão de leads — G-Tech";
const description =
  "G-CRM, da G-Tech: funil de vendas em Kanban, gestão de leads, tarefas, metas e comissões. Sem limite de usuários.";



const gcrm: LandingConfig = {
  name: "G-CRM",
  brand: { name: "G-Tech", icon: "/sistemas/g-crm/brand/gtech-icon.webp", wordmark: "/sistemas/g-crm/brand/gtech-wordmark.webp" },
  group: { name: "Grupo Germano", logo: "/sistemas/g-crm/brand/grupo-germano.webp" },

  // ── CONTATO COMERCIAL ──────────────────────────────────────────────
  // WhatsApp Comercial: número com DDI + DDD, só dígitos. Deixe "" se ainda não houver.
  whatsappNumber: "5519981640280",
  whatsappMessages: {
    hero: "Olá! Quero conhecer o G-CRM.",
    pricing: "Olá! Quero contratar o Plano G-CRM Completo.",
    float: "Olá! Gostaria de falar com o comercial sobre o G-CRM.",
  },
  // Instagram oficial. Deixe "" se ainda não houver.
  instagramUrl: "https://www.instagram.com/grupo.germano/",
  instagramHandle: "@grupo.germano",
  address: "Rua Santa Julia, 259 - Santa Julia, Mogi Guaçu - SP",
  // ───────────────────────────────────────────────────────────────────

  hero: {
    badge: "Funil de vendas, leads e relacionamento comercial",
    title: (
      <>
        Ação comercial todo dia.{" "}
        <span className="text-brand-strong">Previsibilidade no fechamento.</span>
      </>
    ),
    subtitle:
      "O G-CRM acelera o seu time de vendas e mantém o relacionamento próximo com cada cliente — do primeiro contato ao negócio fechado.",
    cta: "Ver demonstração",
    image: "/sistemas/g-crm/G-CRM1.webp",
    imageAlt:
      "Dashboard do G-CRM com pipeline aberto, valor ganho, conversão, tarefas pendentes e metas do time",
  },

  pains: {
    eyebrow: "O que o G-CRM resolve",
    title: "Venda que depende de memória perde receita.",
    items: [
      {
        icon: UserX,
        title: "Leads esquecidos",
        copy: "Contatos que ficam sem follow-up e esfriam antes de virar negócio.",
      },
      {
        icon: FileClock,
        title: "Propostas estagnadas",
        copy: "Propostas enviadas que param no meio do caminho, sem acompanhamento.",
      },
      {
        icon: Target,
        title: "Vendedores sem metas claras",
        copy: "O time não sabe o que precisa entregar nem como está o próprio resultado.",
      },
      {
        icon: TrendingDown,
        title: "Receita imprevisível",
        copy: "Sem visão do funil, não há como prever o que vai fechar no mês.",
      },
    ],
  },

  features: {
    eyebrow: "Recursos",
    title: "Tudo o que o time comercial usa no dia a dia.",
    items: [
      {
        icon: SquareKanban,
        title: "Funil de vendas em Kanban",
        copy: "Estágios personalizáveis — reunião, proposta, negociação e fechamento — com cards arrastáveis.",
      },
      {
        icon: Building2,
        title: "Contatos, empresas e parceiros",
        copy: "Toda a base comercial centralizada em um só lugar.",
      },
      {
        icon: CalendarClock,
        title: "Reuniões e tarefas",
        copy: "Agendamentos vinculados ao lead, com prazos e alertas.",
      },
      {
        icon: History,
        title: "Histórico de interações",
        copy: "Cada negociação guarda o registro completo do que já foi feito.",
      },
      {
        icon: BarChart3,
        title: "Desempenho e comissões",
        copy: "Relatórios por vendedor com cálculo de comissões.",
      },
    ],
  },

  screens: {
    eyebrow: "Telas reais",
    title: "Veja o G-CRM por dentro.",
    note: "Telas do sistema real. Dados pessoais foram ocultados para preservar a privacidade dos clientes.",
    items: [
      {
        tab: "Clientes",
        image: "/sistemas/g-crm/G-CRM2.webp",
        alt: "Tela de clientes do G-CRM com nome, empresa, contato e tipo de lead",
        caption: "Base de clientes com empresa, contato e tipo de lead.",
      },
      {
        tab: "Funis de vendas",
        image: "/sistemas/g-crm/G-CRM3.webp",
        alt: "Tela de funis de vendas do G-CRM com quatro funis cadastrados",
        caption: "Vários funis em paralelo, cada um com suas etapas e negócios abertos.",
      },
      {
        tab: "Relatórios",
        image: "/sistemas/g-crm/G-CRM4.webp",
        alt: "Tela de relatórios do G-CRM com taxa de conversão por tipo de lead",
        caption: "Conversão por tipo de lead e desempenho do time.",
      },
    ],
  },

  pricing: {
    eyebrow: "Planos",
    title: "Preço direto, sem surpresas.",
    highlight: {
      title: "TODOS OS SISTEMAS SEM LIMITES DE USUÁRIOS",
      copy: "Diferencial exclusivo: cadastre toda a equipe comercial sem cobrança por licença adicional.",
    },
    plan: {
      name: "Plano G-CRM Completo",
      mensal: "149,99",
      anual: "1.499,99",
      perMonth: "124,99",
      savings: "299,89", // 12 × R$ 149,99 = R$ 1.799,88
      includes: [
        "Funil de vendas em Kanban",
        "Gestão de leads",
        "Tarefas e reuniões",
        "Metas",
        "Relatórios de comissões",
        "Equipe sem limite de usuários",
      ],
      cta: "Contratar pelo WhatsApp",
    },
  },

  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Tire suas dúvidas sobre o G-CRM.",
    items: [
      { q: "O que o G-CRM faz?", a: "Organiza o funil de vendas em Kanban, centraliza contatos, empresas e parceiros, agenda reuniões e tarefas vinculadas a cada lead e guarda o histórico de cada negociação." },
      { q: "Posso ter mais de um funil de vendas?", a: "Sim. Você pode manter vários funis em paralelo, cada um com suas próprias etapas, como reunião, proposta, negociação e fechamento." },
      { q: "Existe limite de usuários?", a: "Não. Você cadastra toda a equipe comercial sem cobrança por licença adicional." },
      { q: "Quanto custa o G-CRM?", a: "O Plano G-CRM Completo custa R$ 149,99 por mês ou R$ 1.499,99 por ano. No anual, o valor equivale a R$ 124,99 por mês." },
      { q: "Há taxa de implantação?", a: "Sim. A taxa de implantação é de R$ 999,99, cobrada uma única vez, tanto no plano mensal quanto no anual." },
      { q: "O G-CRM calcula comissões?", a: "Sim. Os relatórios mostram o desempenho de cada vendedor, com cálculo de comissões e conversão por tipo de lead." },
    ],
  },
};

export default function Page() {
  return <LandingPage c={gcrm} />;
}
