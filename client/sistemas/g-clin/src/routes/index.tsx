import { useState } from "react";
import {
  ArrowRight,
  Bot,
  CalendarClock,
  Check,
  FileHeart,
  FolderX,
  Hourglass,
  Instagram,
  Link2,
  MapPin,
  Unlink,
  UserX,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { BrowserFrame, ClinicPreview } from "../components/clinic-preview";
import { WhatsAppIcon } from "../components/brand-icons";
import { ThemeToggle } from "../../../_shared/theme-toggle";
import { GTechLogo } from "../../../_shared/gtech-logo";



// Contatos comerciais: troque aqui as URLs oficiais quando necessário.
const WHATSAPP_NUMBER = "5519981640280";
const INSTAGRAM_URL = "https://www.instagram.com/grupo.germano/";
const whatsapp = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const WHATSAPP_DEFAULT = whatsapp("Olá! Gostaria de conhecer o G-CLIN.");

const nav = [
  ["Recursos", "recursos"],
  ["Telas", "telas"],
  ["Planos", "planos"],
];

const pains = [
  { icon: UserX, title: "Faltas de pacientes", fix: "Confirmação automática pelo WhatsApp" },
  {
    icon: FolderX,
    title: "Prontuários em papel",
    fix: "Histórico e anexos no prontuário eletrônico",
  },
  { icon: Hourglass, title: "Atrasos na recepção", fix: "Agenda organizada e agendamento online" },
  { icon: Unlink, title: "Financeiro desconectado", fix: "Atendimentos e caixa no mesmo sistema" },
];

const features = [
  {
    icon: CalendarClock,
    title: "Agenda profissional inteligente",
    text: "Bloqueios de horários e agenda para múltiplos profissionais, com visão em lista ou calendário.",
  },
  {
    icon: FileHeart,
    title: "Prontuário eletrônico completo",
    text: "Histórico de consultas e anexos do paciente reunidos e acessíveis em cada atendimento.",
  },
  {
    icon: Wallet,
    title: "Financeiro integrado",
    text: "Contas a pagar e a receber, fluxo de caixa e balanço conectados à rotina da clínica.",
  },
  {
    icon: Link2,
    title: "Agendamento online",
    text: "Link público para os próprios pacientes marcarem consultas nos horários disponíveis.",
  },
  {
    icon: Bot,
    title: "IA no WhatsApp",
    text: "Confirmação automática de consultas e triagem inicial dos pacientes pelo WhatsApp.",
  },
];

type Period = "mensal" | "anual";
const plans = [
  {
    id: "A",
    name: "Gestão Essencial",
    mensal: "109,99",
    anual: "999,99",
    perMonth: "83,33",
    savings: "319,89",
    items: ["Gestão financeira completa", "Agendamento e agenda médica"],
  },
  {
    id: "B",
    name: "Agendamento Online",
    mensal: "149,99",
    anual: "1.399,99",
    perMonth: "116,66",
    savings: "399,89",
    items: ["Tudo do Plano A", "Link exclusivo de agendamento online para o paciente"],
  },
  {
    id: "C",
    name: "Inteligência Artificial",
    featured: true,
    mensal: "199,99",
    anual: "1.799,99",
    perMonth: "149,99",
    savings: "599,89",
    items: ["Tudo dos Planos A e B", "IA no WhatsApp para confirmação automática e triagem"],
  },
];

function Index() {
  const [period, setPeriod] = useState<Period>("mensal");
  return (
    <>
      <header className="site-header">
        <div className="container-page header-inner">
          <a href="#" className="brand" aria-label="G-CLIN by G-Tech — início">
            <GTechLogo src="/sistemas/marca/LOGO_G-TECH.webp" />
            <span className="brand-product">
              <strong>G-CLIN</strong>
              <small>by G-Tech</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Navegação principal">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <ThemeToggle iconSize={20} className="nav-icon theme-toggle" />
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container-page hero-grid">
            <div>
              <p className="eyebrow">G-CLIN · Gestão médica e odontológica</p>
              <h1>
                Mais cuidado com o paciente. <span>Mais controle na clínica.</span>
              </h1>
              <p className="hero-text">
                Agenda, prontuário eletrônico e financeiro em um só sistema, com agendamento online
                e confirmação de consultas por IA no WhatsApp.
              </p>
              <div className="hero-actions">
                <Button asChild className="cta">
                  <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon /> Ver demonstração
                  </a>
                </Button>
                <a className="link-arrow" href="#planos">
                  Ver preços <ArrowRight size={16} />
                </a>
                <a className="link-arrow" href="#telas">
                  Conhecer o G-CLIN <ArrowRight size={16} />
                </a>
              </div>
              <ul className="hero-points">
                <li>
                  <Check size={16} /> Sem taxa de implantação
                </li>
                <li>
                  <Check size={16} /> Usuários ilimitados
                </li>
              </ul>
            </div>
            <BrowserFrame
              src="/sistemas/g-clin/G-CLIN6.webp"
              alt="Tela de pacientes do G-CLIN com dados de exemplo"
              eager
            />
          </div>
        </section>

        <section className="pains" aria-labelledby="pains-title">
          <div className="container-page">
            <h2 id="pains-title" className="pains-title">
              O que o G-CLIN resolve na rotina da clínica
            </h2>
            <div className="pain-grid">
              {pains.map(({ icon: Icon, title, fix }) => (
                <div className="pain" key={title}>
                  <Icon className="pain-icon" />
                  <div>
                    <strong>{title}</strong>
                    <span>{fix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="recursos">
          <div className="container-page">
            <div className="section-head">
              <p className="eyebrow">Recursos</p>
              <h2>Tudo o que a clínica precisa, conectado</h2>
              <p>
                Da marcação da consulta ao fechamento do caixa, recepção, profissionais e gestão
                trabalham no mesmo sistema.
              </p>
            </div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, text }) => (
                <article className="feature" key={title}>
                  <span className="feature-icon">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="telas">
          <div className="container-page">
            <div className="section-head">
              <p className="eyebrow">Por dentro do sistema</p>
              <h2>Conheça as telas do G-CLIN</h2>
            </div>
            <ClinicPreview />
          </div>
        </section>

        <section className="section" id="planos">
          <div className="container-page">
            <div className="unlimited">
              <Users className="unlimited-icon" />
              <div>
                <strong>Todos os sistemas sem limites de usuários</strong>
                <p>
                  Cadastre recepcionistas, médicos, dentistas e gestores sem pagar taxa extra por
                  profissional.
                </p>
              </div>
            </div>

            <div className="section-head">
              <p className="eyebrow">Planos</p>
              <h2>Escolha o plano da sua clínica</h2>
              <p>Implantação sem custo em todos os planos.</p>
            </div>

            <div className="period-toggle" role="group" aria-label="Período de pagamento">
              {(["mensal", "anual"] as Period[]).map((p) => (
                <button
                  key={p}
                  type="button"
                  aria-pressed={period === p}
                  onClick={() => setPeriod(p)}
                >
                  {p === "mensal" ? "Mensal" : "Anual"}
                </button>
              ))}
            </div>

            <div className="plan-grid">
              {plans.map((plan) => (
                <article className={`plan ${plan.featured ? "plan-featured" : ""}`} key={plan.id}>
                  {plan.featured && <span className="plan-badge">Mais completo</span>}
                  <p className="plan-label">Plano {plan.id}</p>
                  <h3>{plan.name}</h3>
                  <p className="plan-price">
                    <small>R$</small>
                    {period === "mensal" ? plan.mensal : plan.anual}
                    <small>/{period === "mensal" ? "mês" : "ano"}</small>
                  </p>
                  <p className="plan-note">
                    {period === "anual"
                      ? `Equivale a R$ ${plan.perMonth}/mês · economia de R$ ${plan.savings}`
                      : `ou R$ ${plan.anual} no plano anual`}
                  </p>
                  <p className="plan-setup">
                    Implantação: <strong>R$ 0</strong> · sem taxa de adesão
                  </p>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>
                        <Check size={16} />
                        {item}
                      </li>
                    ))}
                    <li>
                      <Check size={16} />
                      Usuários ilimitados
                    </li>
                  </ul>
                  <Button asChild className="cta plan-cta">
                    <a
                      href={whatsapp(
                        `Olá! Tenho interesse no G-CLIN – Plano ${plan.id} (${plan.name}), pagamento ${period}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon /> Contratar pelo WhatsApp
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contato">
        <div className="container-page footer-grid">
          <div className="footer-brand">
            <span className="germano-logo">
              <img
                src="/sistemas/marca/Logo_Germano.webp"
                width={603}
                height={414}
                alt="Grupo Germano"
                loading="lazy"
              />
            </span>
            <p>
              <strong>G-CLIN</strong> é um sistema G-Tech.
              <br />
              Uma solução do Grupo Germano.
            </p>
          </div>
          <nav className="footer-links" aria-label="Links do rodapé">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <p className="footer-address">
              <MapPin size={18} /> Rua Santa Julia, 259 - Santa Julia, Mogi Guaçu - SP
            </p>
            <div className="footer-social">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="container-page">
          <p className="footer-bottom">
            © {new Date().getFullYear()} G-Tech · Grupo Germano. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={WHATSAPP_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o comercial no WhatsApp"
        title="WhatsApp comercial"
      >
        <WhatsAppIcon size={26} />
      </a>
    </>
  );
}

export default Index;
