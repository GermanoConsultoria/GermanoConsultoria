import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCheck,
  ChevronDown,
  ClipboardList,
  FileSpreadsheet,
  Fingerprint,
  History,
  Import,
  Infinity as InfinityIcon,
  Instagram,
  LockKeyhole,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  UserCog,
  Users,
  X,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../../../_shared/theme-toggle";
import { GTechLogo } from "../../../_shared/gtech-logo";



// Contatos comerciais verificados (ver roadmap.md).
const WHATSAPP_NUMBER = "5519981640280";
const INSTAGRAM_HANDLE = "grupo.germano";
const INSTAGRAM_URL = INSTAGRAM_HANDLE ? `https://www.instagram.com/${INSTAGRAM_HANDLE}/` : "";
const ADDRESS = "Rua Santa Julia, 259 - Santa Julia, Mogi Guaçu - SP";

// Imagens em /public.
const GTECH_LOGO = "/sistemas/marca/LOGO_G-TECH.webp";
const GERMANO_LOGO = "/sistemas/marca/Logo_Germano.webp";
const SYSTEM_SCREENSHOT = "/sistemas/g-pass/g-pass-system.webp";

function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const DEMO_MESSAGE =
  "Olá! Quero conhecer o G-PASS, o cofre corporativo de senhas da G-Tech, e solicitar uma demonstração.";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Senhas em papéis e planilhas",
    description: "Anotações e arquivos soltos são fáceis de perder, copiar e esquecer abertos.",
  },
  {
    icon: MessageCircle,
    title: "Compartilhamento pelo WhatsApp",
    description:
      "Senha enviada em conversa fica no histórico, no celular e em encaminhamentos sem controle.",
  },
  {
    icon: AlertTriangle,
    title: "Risco de vazamento de acessos",
    description: "Sem saber quem tem cada senha, fica difícil proteger os acessos corporativos.",
  },
];

const features = [
  {
    icon: LockKeyhole,
    title: "Cofre central criptografado",
    description:
      "As senhas e credenciais da empresa reunidas em um único cofre, protegidas com criptografia.",
  },
  {
    icon: Users,
    title: "Compartilhamento granular",
    description: "Compartilhe cada credencial com quem precisa, definindo níveis de permissão.",
  },
  {
    icon: Fingerprint,
    title: "Autenticação de dois fatores (2FA) nativa",
    description: "Uma etapa extra de verificação para acessar o cofre, já incluída no sistema.",
  },
  {
    icon: History,
    title: "Auditoria de acessos",
    description:
      "Acompanhe os registros de acesso e tenha visibilidade sobre o uso das credenciais.",
  },
  {
    icon: Import,
    title: "Importação de dados",
    description:
      "Traga as credenciais que a empresa já utiliza e centralize tudo com mais rapidez.",
  },
  {
    icon: InfinityIcon,
    title: "Sem limites de usuários",
    description: "Inclua toda a equipe no G-PASS, sem limite na quantidade de usuários.",
    highlight: true,
  },
];

type Period = "mensal" | "anual";
const plan = {
  name: "G-PASS Completo",
  mensal: "49,99",
  anual: "399,99",
  perMonth: "33,33",
  savings: "199,89", // 12 × R$ 49,99 = R$ 599,88
};

const questions = [
  {
    question: "O que é o G-PASS?",
    answer:
      "O G-PASS é o cofre corporativo de senhas da G-Tech. Ele centraliza as senhas e credenciais da empresa em um cofre criptografado, com compartilhamento por níveis de permissão, 2FA nativa, auditoria de acessos e importação de dados.",
  },
  { question: "Existe limite de usuários?", answer: "Não. O G-PASS não tem limites de usuários." },
  {
    question: "Quanto custa?",
    answer:
      "Plano mensal: R$ 49,99. Plano anual: R$ 399,99. Não há taxa de implantação/adesão (R$ 0). O parcelamento está sujeito aos juros da máquina.",
  },
  {
    question: "Posso controlar quem acessa cada senha?",
    answer:
      "Sim. O compartilhamento é granular, com níveis de permissão definidos pela administração da empresa.",
  },
  {
    question: "É possível importar senhas e acompanhar acessos?",
    answer:
      "Sim. O sistema inclui importação de dados e auditoria de acessos. Os formatos e procedimentos de importação podem ser confirmados com a equipe comercial.",
  },
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Brand() {
  return (
    <a href="#inicio" aria-label="G-PASS por G-Tech — início" className="brand-logo">
      <GTechLogo src={GTECH_LOGO} />
      <span className="brand-name">G-PASS</span>
      <span className="brand-divider" />
      <span className="brand-company">
        Um sistema
        <br />
        G-Tech
      </span>
    </a>
  );
}

function ScreenshotFrame({ label }: { label: string }) {
  return (
    <figure className="product-preview">
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-label">
          <LockKeyhole size={10} /> {label}
        </span>
      </div>
      <img
        className="product-screenshot"
        src={SYSTEM_SCREENSHOT}
        alt="Tela do G-PASS com a lista de senhas, filtros Todas, Públicas e Privadas, busca e botão Nova senha"
        width={1913}
        height={822}
        loading="lazy"
      />
    </figure>
  );
}

function useHideFloatOnContact() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const el = document.getElementById("contato");
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setHidden(entries.some((entry) => entry.isIntersecting)),
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return hidden;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [period, setPeriod] = useState<Period>("mensal");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const hideFloat = useHideFloatOnContact();

  const nav = [
    { label: "Recursos", href: "#recursos" },
    { label: "Demonstração", href: "#demonstracao" },
    { label: "Segurança", href: "#seguranca" },
    { label: "Planos", href: "#planos" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <>
      <header className="site-header">
        <div className="page-container header-inner">
          <Brand />
          <nav aria-label="Navegação principal" className="desktop-nav">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-tools">
            <a
              className="header-icon"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Grupo Germano"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <ThemeToggle iconSize={20} className="header-icon" />
          </div>
          <Button asChild className="header-cta">
            <a href="#contato">Solicitar demonstração</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegação móvel">
            {nav.map((item) => (
              <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <Button asChild className="cta-button">
              <a href="#contato" onClick={() => setMenuOpen(false)}>
                Solicitar demonstração
              </a>
            </Button>
          </nav>
        )}
      </header>

      <main id="inicio">
        <section className="hero" id="visao-geral">
          <div className="page-container hero-grid">
            <div className="logo-plate">
              <img
                src={GTECH_LOGO}
                alt="G-Tech"
                className="logo-plate-image"
                width={500}
                height={500}
                fetchPriority="high"
              />
              <div className="logo-plate-product">
                <span className="logo-plate-name">G-PASS</span>
                <span className="logo-plate-tag">Cofre corporativo de senhas</span>
              </div>
            </div>
            <div className="hero-content">
              <div className="eyebrow hero-eyebrow">
                <ShieldCheck size={14} /> G-Tech apresenta
              </div>
              <h1 className="hero-title reveal">
                <span className="hero-product">G-PASS.</span> O cofre corporativo de senhas da sua
                empresa.
              </h1>
              <p className="hero-copy">
                Segurança, governança e proteção de acessos em um só lugar. Chega de senhas
                espalhadas em papéis e planilhas, enviadas pelo WhatsApp e expostas a vazamentos.
              </p>
              <div className="hero-actions">
                <Button asChild className="cta-button">
                  <a href={whatsappUrl(DEMO_MESSAGE)} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon size={18} /> Ver demonstração
                  </a>
                </Button>
                <Button asChild variant="outline" className="cta-button">
                  <a href="#planos">Ver preços</a>
                </Button>
                <Button asChild variant="outline" className="cta-button">
                  <a href="#demonstracao">
                    Conhecer o G-PASS <ArrowRight />
                  </a>
                </Button>
              </div>
              <p className="hero-unlimited">
                <InfinityIcon /> Sem limites de usuários
              </p>
            </div>
          </div>
        </section>

        <section className="unlimited-band" aria-label="Diferencial do G-PASS">
          <div className="page-container unlimited-inner">
            <span className="unlimited-icon">
              <InfinityIcon />
            </span>
            <div>
              <h2>Sem limites de usuários.</h2>
              <p>Toda a equipe no mesmo cofre, com cada acesso controlado por permissão.</p>
            </div>
            <ul className="unlimited-list">
              <li>
                <Check /> Taxa de implantação: R$ 0
              </li>
              <li>
                <Check /> 2FA nativa
              </li>
              <li>
                <Check /> Auditoria de acessos
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="problema">
          <div className="page-container">
            <div className="center-heading">
              <span className="eyebrow">O problema</span>
              <h2 className="section-heading">Senhas espalhadas são acessos desprotegidos.</h2>
              <p className="section-copy">
                Quando as credenciais da empresa circulam sem controle, ninguém sabe ao certo quem
                tem acesso a quê.
              </p>
            </div>
            <div className="problem-grid">
              {problems.map(({ icon: Icon, title, description }) => (
                <article className="problem-card" key={title}>
                  <div className="problem-icon">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <p className="problem-answer">
              <ShieldCheck /> O G-PASS substitui esses hábitos por um cofre central, com permissões
              e registro de acessos.
            </p>
          </div>
        </section>

        <section className="section tinted-section" id="recursos">
          <div className="page-container">
            <div className="center-heading">
              <span className="eyebrow">Recursos</span>
              <h2 className="section-heading">
                Tudo o que a empresa precisa para proteger seus acessos.
              </h2>
            </div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, description, highlight }) => (
                <article className={`feature-card${highlight ? " is-highlight" : ""}`} key={title}>
                  <div className="feature-icon">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="demonstracao">
          <div className="page-container">
            <div className="center-heading">
              <span className="eyebrow">Demonstração do produto</span>
              <h2 className="section-heading">Conheça o G-PASS por dentro.</h2>
              <p className="section-copy">Tela do sistema G-PASS.</p>
            </div>
            <div className="demo-main">
              <ScreenshotFrame label="G-PASS · Todas as senhas" />
              <p className="demo-caption">
                Todas as senhas: busca, filtros por senhas públicas e privadas, pastas e cadastro de
                nova senha.
              </p>
            </div>
          </div>
        </section>

        <section className="section tinted-section" id="como-funciona">
          <div className="page-container">
            <span className="eyebrow">Como funciona</span>
            <h2 className="section-heading">Da centralização ao controle.</h2>
            <div className="steps">
              {[
                {
                  title: "Reúna suas credenciais",
                  copy: "Use a importação de dados para trazer o que já existe para o cofre central criptografado.",
                },
                {
                  title: "Defina os acessos",
                  copy: "Compartilhe cada credencial com níveis de permissão para as pessoas certas.",
                },
                {
                  title: "Acompanhe com segurança",
                  copy: "Conte com 2FA nativa e auditoria de acessos no dia a dia.",
                },
              ].map((step, index) => (
                <article className="step" key={step.title}>
                  <div className="step-number">0{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="seguranca">
          <div className="page-container security-grid">
            <div>
              <span className="eyebrow">
                <ShieldCheck size={15} /> Segurança e governança
              </span>
              <h2 className="section-heading">
                A senha certa.
                <br />
                Para a pessoa certa.
              </h2>
              <p className="section-copy">
                Sua equipe precisa de acesso. Sua empresa precisa de controle. Com o G-PASS, você
                organiza os dois.
              </p>
              <ul className="security-list">
                <li>
                  <CheckCheck /> Cofre central criptografado
                </li>
                <li>
                  <CheckCheck /> Compartilhamento granular com níveis de permissão
                </li>
                <li>
                  <CheckCheck /> Autenticação de dois fatores (2FA) nativa
                </li>
                <li>
                  <CheckCheck /> Auditoria de acessos
                </li>
              </ul>
            </div>
            <div>
              <div className="access-panel">
                <div className="access-title">
                  <span>Níveis de permissão</span>
                  <UserCog />
                </div>
                {[
                  {
                    initials: "AD",
                    name: "Administração",
                    sub: "Gestão do cofre",
                    role: "Administrador",
                  },
                  {
                    initials: "FI",
                    name: "Financeiro",
                    sub: "Credenciais do setor",
                    role: "Acesso definido",
                  },
                  {
                    initials: "CO",
                    name: "Comercial",
                    sub: "Credenciais da equipe",
                    role: "Acesso definido",
                  },
                ].map((person) => (
                  <div className="access-row" key={person.initials}>
                    <span className="access-avatar">{person.initials}</span>
                    <span className="access-person">
                      {person.name}
                      <small>{person.sub}</small>
                    </span>
                    <span className="access-role">{person.role}</span>
                  </div>
                ))}
                <div className="access-status">
                  <ClipboardList /> Acessos registrados na auditoria.
                </div>
              </div>
              <p className="illustration-caption">
                Representação ilustrativa da gestão de permissões.
              </p>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="planos">
          <div className="page-container">
            <div className="center-heading">
              <span className="eyebrow">Planos e preços</span>
              <h2 className="section-heading">Escolha entre mensal e anual.</h2>
              <p className="section-copy">
                Compare os planos mensal e anual. Sem limites de usuários.
              </p>
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
            <div className="pricing-grid pricing-grid-single">
              <article className="plan-card" aria-labelledby="plano-gpass">
                <h3 id="plano-gpass">{plan.name}</h3>
                <p className="plan-price">
                  <span className="plan-currency">R$</span>
                  {period === "mensal" ? plan.mensal : plan.anual}
                  <span className="plan-period">/{period === "mensal" ? "mês" : "ano"}</span>
                </p>
                <p className="plan-note">
                  {period === "anual"
                    ? `Equivale a R$ ${plan.perMonth}/mês · economia de R$ ${plan.savings}`
                    : `ou R$ ${plan.anual} no plano anual`}
                </p>
                <ul className="plan-list">
                  <li>
                    <Check /> Sem limites de usuários
                  </li>
                  <li>
                    <Check /> Taxa de implantação/adesão: R$ 0
                  </li>
                </ul>
                <Button asChild className="cta-button plan-cta">
                  <a
                    href={whatsappUrl(
                      `Olá! Tenho interesse no plano ${period === "mensal" ? "Mensal" : "Anual"} do G-PASS (R$ ${period === "mensal" ? plan.mensal : plan.anual}).`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon size={16} /> Quero o plano {period === "mensal" ? "Mensal" : "Anual"}
                  </a>
                </Button>
              </article>
            </div>
            <div className="pricing-notes">
              <p>
                <strong>Sem taxa de implantação/adesão: R$ 0.</strong>
              </p>
              <p>Parcelamento sujeito aos juros da máquina.</p>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="duvidas">
          <div className="page-container faq-layout">
            <div>
              <span className="eyebrow">Perguntas frequentes</span>
              <h2 className="section-heading">
                Vamos tirar
                <br />
                suas dúvidas.
              </h2>
            </div>
            <div>
              {questions.map((faq, index) => (
                <div className="faq-item" key={faq.question}>
                  <Button
                    variant="ghost"
                    className="faq-trigger"
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-${index}`}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    {faq.question}
                    <ChevronDown
                      className={
                        openFaq === index
                          ? "rotate-180 transition-transform"
                          : "transition-transform"
                      }
                    />
                  </Button>
                  {openFaq === index && (
                    <p className="faq-answer" id={`faq-${index}`}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="page-container contact-wrap">
            <div>
              <span className="eyebrow">
                <MessageCircle size={15} /> Contato
              </span>
              <h2 className="section-heading">Solicite uma demonstração do G-PASS.</h2>
              <p className="section-copy">
                Fale direto com nossa equipe comercial pelo WhatsApp.
              </p>
              <div className="contact-actions">
                <Button asChild className="cta-button whatsapp-button">
                  <a href={whatsappUrl(DEMO_MESSAGE)} target="_blank" rel="noreferrer">
                    <WhatsAppIcon size={18} /> Solicitar demonstração
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container footer-inner">
          <div className="footer-brands">
            <img
              src={GTECH_LOGO}
              alt="G-Tech"
              className="footer-gtech"
              width={500}
              height={500}
              loading="lazy"
            />
            <div className="footer-endorse">
              <span>Uma solução do</span>
              <img
                src={GERMANO_LOGO}
                alt="Grupo Germano"
                className="footer-germano"
                width={603}
                height={414}
                loading="lazy"
              />
              <span>Grupo Germano</span>
            </div>
          </div>
          <div className="footer-info">
            <p className="footer-product">
              <strong>G-PASS</strong> · Cofre corporativo de senhas da G-Tech
            </p>
            <p className="footer-address">
              <MapPin /> {ADDRESS}
            </p>
            <p className="footer-links">
              {INSTAGRAM_URL && (
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
                  <Instagram size={19} />
                </a>
              )}
              <a href={whatsappUrl(DEMO_MESSAGE)} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp">
                <WhatsAppIcon size={19} />
              </a>
            </p>
            <p className="footer-copy">
              © 2026 G-Tech · Grupo Germano. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <a
        className={`whatsapp-float${hideFloat ? " is-hidden" : ""}`}
        href={whatsappUrl(DEMO_MESSAGE)}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com o G-PASS no WhatsApp"
        title="WhatsApp"
      >
        <WhatsAppIcon size={26} />
      </a>
    </>
  );
}

export default Index;
