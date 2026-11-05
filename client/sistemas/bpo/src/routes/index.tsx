import {
  ArrowRight,
  Building2,
  ChartColumnBig,
  Check,
  FileSpreadsheet,
  Instagram,
  Landmark,
  Layers,
  MapPin,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  Shuffle,
  TableProperties,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { BrowserFrame, BpoPreview } from "../components/bpo-preview";
import { WhatsAppIcon } from "../components/brand-icons";
import { ThemeToggle } from "../../../_shared/theme-toggle";
import { GTechLogo } from "../../../_shared/gtech-logo";

// Contatos comerciais: troque aqui as URLs oficiais quando necessário.
const WHATSAPP_NUMBER = "5519981640280";
const INSTAGRAM_URL = "https://www.instagram.com/grupo.germano/";
const whatsapp = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const WHATSAPP_DEFAULT = whatsapp("Olá! Gostaria de conhecer o BPO Financeiro.");

const nav = [
  ["Recursos", "recursos"],
  ["Telas", "telas"],
  ["Planos", "planos"],
  ["Contato", "contato"],
];

const pains = [
  { icon: Shuffle, title: "Um financeiro por planilha", fix: "Todos os clientes no mesmo sistema" },
  { icon: ReceiptText, title: "Contas esquecidas", fix: "Vencimentos, status e parciais à vista" },
  { icon: Landmark, title: "Saldo que não bate", fix: "Bancos atualizados a cada pagamento" },
  { icon: FileSpreadsheet, title: "Relatório feito à mão", fix: "Balancete pronto em PDF e Excel" },
];

const features = [
  {
    icon: Building2,
    title: "Vários clientes, um só acesso",
    text: "Cada empresa tem o financeiro isolado. Troque de cliente pelo menu sem sair do sistema.",
  },
  {
    icon: ChartColumnBig,
    title: "Balancete com gráficos",
    text: "Receitas, despesas, lucro e investimentos por mês, ano ou período, com exportação em PDF.",
  },
  {
    icon: ReceiptText,
    title: "Contas a pagar e a receber",
    text: "Lançamentos com categoria, banco, vencimento, parcelas, recorrência, anexos e pagamentos parciais.",
  },
  {
    icon: Landmark,
    title: "Bancos em tempo real",
    text: "O saldo de cada conta bancária é movimentado pelos pagamentos e recebimentos registrados.",
  },
  {
    icon: PiggyBank,
    title: "Investimentos",
    text: "Controle de aportes e resgates, com saldo investido separado do caixa do dia a dia.",
  },
  {
    icon: ShieldCheck,
    title: "Usuários e permissões",
    text: "Equipe com permissões individuais e acesso do cliente restrito ao próprio financeiro.",
  },
];

// Preços do BPO: o anual cobre até 15 empresas (equivale a 999,99 / 12 por mês).
const plans = [
  {
    id: "mensal",
    label: "Mensal",
    name: "Por empresa",
    price: "99,99",
    unit: "/mês por empresa",
    note: "Pague só pelas empresas que você atende",
    items: [
      "Financeiro isolado para cada empresa",
      "Contas a pagar e a receber, bancos e investimentos",
      "Balancete com exportação em PDF e Excel",
    ],
    message: "Olá! Quero contratar o BPO Financeiro no plano mensal (R$ 99,99 por empresa).",
  },
  {
    id: "anual",
    label: "Anual",
    name: "Até 15 empresas",
    price: "999,99",
    unit: "/ano",
    note: "Equivale a R$ 83,33/mês para até 15 empresas",
    featured: true,
    items: [
      "Até 15 empresas no mesmo plano",
      "Financeiro isolado para cada empresa",
      "Contas a pagar e a receber, bancos e investimentos",
      "Balancete com exportação em PDF e Excel",
    ],
    message: "Olá! Quero contratar o BPO Financeiro no plano anual (R$ 999,99 para até 15 empresas).",
  },
];

function Index() {
  return (
    <>
      <header className="site-header">
        <div className="container-page header-inner">
          <a href="#" className="brand" aria-label="BPO Financeiro by G-Tech — início">
            <GTechLogo src="/sistemas/marca/LOGO_G-TECH.webp" />
            <span className="brand-product">
              <strong>BPO</strong>
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
              <p className="eyebrow">BPO · Gestão financeira terceirizada</p>
              <h1>
                O financeiro de todos os seus clientes. <span>Em um só lugar.</span>
              </h1>
              <p className="hero-text">
                Contas a pagar e a receber, bancos, plano de contas, investimentos e balancete de
                cada empresa atendida, organizados no mesmo sistema.
              </p>
              <div className="hero-actions">
                <Button asChild className="cta">
                  <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon /> Ver demonstração
                  </a>
                </Button>
                <a className="cta-outline" href="#planos">
                  Ver preços <ArrowRight size={16} />
                </a>
                <a className="cta-outline" href="#telas">
                  Conhecer o BPO <ArrowRight size={16} />
                </a>
              </div>
              <ul className="hero-points">
                <li>
                  <Check size={16} /> Financeiro isolado por cliente
                </li>
                <li>
                  <Check size={16} /> Exportação em PDF e Excel
                </li>
              </ul>
            </div>
            <BrowserFrame
              src="/sistemas/bpo/BPO1.webp"
              alt="Tela de balancete do BPO com dados de exemplo"
              eager
            />
          </div>
        </section>

        <section className="pains" aria-labelledby="pains-title">
          <div className="container-page">
            <h2 id="pains-title" className="pains-title">
              O que o BPO resolve na rotina do financeiro
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
              <h2>Tudo o que o BPO financeiro precisa</h2>
              <p>
                Do lançamento da conta ao balancete do mês, a equipe opera o financeiro de cada
                cliente com o mesmo padrão.
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
              <h2>Conheça as telas do BPO</h2>
            </div>
            <BpoPreview />
          </div>
        </section>

        <section className="section" id="planos">
          <div className="container-page">
            <div className="section-head">
              <p className="eyebrow">Planos</p>
              <h2>Escolha como pagar</h2>
              <p>Mensal por empresa atendida ou anual para até 15 empresas.</p>
            </div>
            <div className="plan-grid plan-grid-two">
              {plans.map((plan) => (
                <article className={`plan ${plan.featured ? "plan-featured" : ""}`} key={plan.id}>
                  {plan.featured && <span className="plan-badge">Melhor custo</span>}
                  <p className="plan-label">Plano {plan.label}</p>
                  <h3>{plan.name}</h3>
                  <p className="plan-price">
                    <small>R$</small>
                    {plan.price}
                    <small>{plan.unit}</small>
                  </p>
                  <p className="plan-note">{plan.note}</p>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>
                        <Check size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="cta plan-cta">
                    <a href={whatsapp(plan.message)} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon /> Contratar pelo WhatsApp
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="proposta">
          <div className="container-page">
            <div className="unlimited">
              <Layers className="unlimited-icon" />
              <div>
                <strong>Um padrão para todos os clientes</strong>
                <p>
                  Plano de contas, bancos e relatórios organizados do mesmo jeito em cada empresa
                  atendida.
                </p>
              </div>
            </div>

            <div className="section-head">
              <p className="eyebrow">Proposta</p>
              <h2>Leve o BPO para a sua operação</h2>
              <p>
                Fale com um consultor do Grupo Germano para ver o sistema funcionando e receber uma
                proposta para a sua carteira de clientes.
              </p>
            </div>
            <div className="hero-actions proposal-actions">
              <Button asChild className="cta">
                <a
                  href={whatsapp("Olá! Quero uma proposta do BPO Financeiro.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> Solicitar proposta
                </a>
              </Button>
              <a className="cta-outline" href="#telas">
                <TableProperties size={16} /> Rever as telas
              </a>
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
              <strong>BPO</strong> é um sistema G-Tech.
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
