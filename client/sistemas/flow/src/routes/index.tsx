import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChartNoAxesCombined, Check, CircleCheck, Clock3, FolderKanban, Instagram, LayoutDashboard, ListTodo, MapPin, Menu, Play, ShieldCheck, Tag, Users, Wallet, X, type LucideIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../../../_shared/theme-toggle";
import { GTechLogo } from "../../../_shared/gtech-logo";

// Local copies in /public so the images also load outside Lovable hosting.
const germanoLogo = { url: "/sistemas/flow/Logo_Germano.png" };
const overview = { url: "/sistemas/flow/flow1.png" };
const projects = { url: "/sistemas/flow/flow2.png" };
const tasks = { url: "/sistemas/flow/flow3.png" };

const whatsapp = "https://wa.me/5519981640280";
const instagram = "https://www.instagram.com/grupo.germano/";



function WhatsAppIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.45 0 .08 5.36.08 11.96c0 2.1.55 4.16 1.59 5.97L0 24l6.23-1.63a11.96 11.96 0 0 0 5.8 1.48h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.24-6.2-3.48-8.41ZM12.04 21.83a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.9 9.9 0 0 1-1.52-5.27c0-5.48 4.46-9.94 9.95-9.94a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.03c0 5.48-4.46 9.87-10 9.87Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.12 4.52.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg>;
}

function WhatsAppButton({ children = "Solicitar demonstração", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <Button asChild className={`cta-button ${className}`}><a href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />{children}<ArrowUpRight /></a></Button>;
}

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: FolderKanban, title: "Projetos bem estruturados", text: "Organize escopos, etapas e entregas. Tenha uma visão completa de cada projeto, do início à conclusão." },
  { icon: ListTodo, title: "Tarefas com responsáveis", text: "Distribua demandas com clareza. Cada pessoa sabe o que fazer e cada entrega tem um responsável." },
  { icon: Clock3, title: "Prazos e status sob controle", text: "Acompanhe o andamento das atividades e identifique atrasos antes que eles impactem suas entregas." },
  { icon: Users, title: "Colaboração com segurança", text: "Conecte sua equipe com níveis de acesso e histórico de atividades. Mais alinhamento, menos ruído." },
  { icon: Wallet, title: "Financeiro por projeto", text: "Conecte custos, receitas e orçamentos aos seus projetos. Saiba para onde vai cada recurso." },
  { icon: ChartNoAxesCombined, title: "Progresso em tempo real", text: "Transforme atividades em uma visão clara de resultados, com métricas e acompanhamento das entregas." },
];
const screens = [
  { name: "Visão geral", icon: LayoutDashboard, image: overview.url, alt: "Tela inicial real do FLOW com tarefas e projetos recentes", caption: "Uma visão centralizada das tarefas e dos projetos da sua equipe." },
  { name: "Projetos", icon: FolderKanban, image: projects.url, alt: "Tela real de gestão de projetos da equipe no FLOW", caption: "Todos os projetos organizados, com suas demandas sempre à vista." },
  { name: "Tarefas", icon: ListTodo, image: tasks.url, alt: "Quadro de tarefas real do FLOW com filtros e status", caption: "Responsáveis, prioridades e status para acompanhar cada entrega." },
];
type Period = "mensal" | "anual";
const plan = {
  name: "Plano FLOW Completo",
  mensal: "99,99",
  anual: "999,99",
  perMonth: "83,33",
  savings: "199,89", // 12 × R$ 99,99 = R$ 1.199,88
  items: ["Projetos e tarefas conectados", "Prazos, status e responsáveis", "Financeiro por projeto", "Progresso e métricas em tempo real", "Usuários ilimitados"],
};
const planWhatsapp = (period: Period) => `${whatsapp}?text=${encodeURIComponent(`Olá! Tenho interesse no FLOW – ${plan.name}, pagamento ${period}.`)}`;

const benefits = [
  { title: "Tudo no mesmo lugar", text: "Informações conectadas, sem depender de planilhas e conversas espalhadas." },
  { title: "Menos gargalos, mais entregas", text: "Prioridades claras e uma equipe alinhada para fazer o trabalho fluir." },
  { title: "Previsibilidade financeira", text: "Visibilidade dos custos e receitas para planejar cada projeto com confiança." },
  { title: "Decisões com mais clareza", text: "Dados e progresso acessíveis para agir na hora certa e com segurança." },
];

function FlowLanding() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [period, setPeriod] = useState<Period>("mensal");
  const selected = screens[activeScreen] ?? screens[0];

  return <>
    <header className="site-header">
      <div className="page-width header-inner">
        <a href="#inicio" className="brand-group" aria-label="G-Tech — início">
          <GTechLogo src="/sistemas/flow/LOGO_G-TECH.png" />
          <span className="brand-signature">Uma solução do<strong>Grupo Germano</strong></span>
        </a>
        <nav className={`header-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <a href="#recursos" onClick={() => setMenuOpen(false)}>Recursos</a>
          <a href="#beneficios" onClick={() => setMenuOpen(false)}>Benefícios</a>
          <a href="#demonstracao" onClick={() => setMenuOpen(false)}>Demonstração</a>
          <a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a>
          <Button asChild variant="ghost" size="icon"><a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Grupo Germano" title="Instagram do Grupo Germano"><Instagram /></a></Button>
          <Button asChild><a href={whatsapp} target="_blank" rel="noopener noreferrer">Falar com especialista<ArrowUpRight /></a></Button>
        </nav>
        <ThemeToggle className="theme-toggle" />
        <Button variant="ghost" size="icon" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
    </header>

    <main>
      <section id="inicio" className="hero-section">
        <div className="page-width">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow"><span className="status-dot" />Seu próximo passo em gestão começa aqui</span>
            <h1>FLOW. Projetos, tarefas<br />e financeiro <span>em sintonia.</span></h1>
            <p>Centralize sua operação, conecte sua equipe e tenha clareza de cada prazo. Tudo o que seus projetos precisam, em um só lugar.</p>
            <div className="hero-actions">
              <WhatsAppButton>Ver demonstração</WhatsAppButton>
              <Button asChild variant="outline" className="cta-button"><a href="#planos"><Tag />Ver preços</a></Button>
              <Button asChild variant="outline" className="cta-button"><a href="#demonstracao"><Play />Conhecer o FLOW</a></Button>
            </div>
            <div className="hero-notes"><span><Check />Projetos e tarefas conectados</span><span><Check />Financeiro integrado</span><span><Check />Mais clareza para sua equipe</span></div>
          </div>
          <div className="hero-screen">
            <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>FLOW · Seu trabalho em movimento</span></div>
            <img src={overview.url} alt="Visão geral do sistema FLOW, com tarefas e projetos da equipe" fetchPriority="high" width="1343" height="581" />
          </div>
        </div>
      </section>

      <div className="value-strip"><div className="page-width value-strip-inner"><p>Da organização à entrega.<br /><strong>Uma gestão que faz sentido.</strong></p><span><FolderKanban />Projetos organizados</span><span><Users />Equipes conectadas</span><span><Wallet />Financeiro integrado</span><span><ShieldCheck />Acessos seguros</span></div></div>

      <section id="recursos" className="section-space">
        <div className="page-width">
          <div className="section-heading centered"><span className="eyebrow">Menos complexidade. Mais movimento.</span><h2>Cada parte da sua operação.<br /><span>Um único FLOW.</span></h2><p>Deixe as informações dispersas para trás. Organize, acompanhe e conecte o que realmente importa para suas entregas.</p></div>
          <div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section id="demonstracao" className="section-space showcase-section">
        <div className="page-width">
          <div className="section-heading centered"><span className="eyebrow">Conheça por dentro</span><h2>Uma visão clara.<br /><span>Do todo ao detalhe.</span></h2><p>Conheça as telas reais do FLOW e veja como o trabalho da sua equipe ganha organização e visibilidade.</p></div>
          <div className="showcase-tabs" role="tablist" aria-label="Telas do FLOW">{screens.map(({ name, icon: Icon }, index) => <Button key={name} id={`screen-tab-${index}`} role="tab" aria-selected={activeScreen === index} aria-controls="screen-panel" variant={activeScreen === index ? "default" : "ghost"} onClick={() => setActiveScreen(index)}><Icon />{name}</Button>)}</div>
          <div id="screen-panel" role="tabpanel" aria-labelledby={`screen-tab-${activeScreen}`} tabIndex={0}>
            <div className="showcase-screen"><div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>FLOW · {selected.name}</span></div><img src={selected.image} alt={selected.alt} loading="lazy" width="1359" height="591" /></div>
            <div className="screen-caption"><span><CircleCheck />{selected.caption}</span><span>Imagens reais do sistema FLOW</span></div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="section-space">
        <div className="page-width benefits-layout">
          <div className="section-heading"><span className="eyebrow">Mais que organizar. Evoluir.</span><h2>Seu trabalho flui.<br /><span>Sua gestão evolui.</span></h2><p>Quando projetos, pessoas e informações estão conectados, sua equipe ganha tempo para focar no que faz a diferença.</p></div>
          <div className="benefits-list">{benefits.map(({ title, text }, index) => <article className="benefit-item" key={title}><span className="benefit-number">0{index + 1} /</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section id="planos" className="section-space plans-section">
        <div className="page-width">
          <div className="section-heading centered"><span className="eyebrow">Planos</span><h2>Um plano completo.<br /><span>Sem surpresas.</span></h2><p>Implantação sem custo e sem limite de usuários.</p></div>
          <div className="period-toggle" role="group" aria-label="Período de pagamento">
            {(["mensal", "anual"] as Period[]).map((p) => <button key={p} type="button" aria-pressed={period === p} onClick={() => setPeriod(p)}>{p === "mensal" ? "Mensal" : "Anual"}</button>)}
          </div>
          <article className="plan-card">
            <span className="plan-label">{plan.name}</span>
            <p className="plan-price"><small>R$</small>{period === "mensal" ? plan.mensal : plan.anual}<small>/{period === "mensal" ? "mês" : "ano"}</small></p>
            <p className="plan-note">{period === "anual" ? `Equivale a R$ ${plan.perMonth}/mês · economia de R$ ${plan.savings}` : `ou R$ ${plan.anual} no plano anual`}</p>
            <p className="plan-setup">Implantação / Dev: <strong>R$ 0</strong> · sem taxa de adesão</p>
            <ul>{plan.items.map((item) => <li key={item}><Check />{item}</li>)}</ul>
            <Button asChild className="cta-button plan-cta"><a href={planWhatsapp(period)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Contratar pelo WhatsApp<ArrowUpRight /></a></Button>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contato"><div className="page-width contact-inner"><div><span className="eyebrow">Vamos colocar seus projetos em movimento?</span><h2>Conheça o próximo FLOW<br />da sua equipe.</h2><p>Converse com nosso time e agende uma apresentação do sistema.</p></div><div className="contact-actions"><WhatsAppButton>Agendar demonstração</WhatsAppButton><p>Direto pelo WhatsApp. Sem complicação.</p></div></div></section>
    </main>

    <footer className="site-footer"><div className="page-width"><div className="footer-main"><div className="footer-brand"><a href="#inicio" aria-label="G-Tech — início" className="footer-logo"><img src="/sistemas/flow/gtech-logo.png" alt="G-Tech" className="gtech-logo" width="384" height="387" loading="lazy" /></a><p>Projetos conectados. Trabalho em movimento.</p><address className="footer-address"><MapPin aria-hidden="true" />Rua Santa Julia, 259 - Santa Julia, Mogi Guaçu - SP</address></div><div className="germano-lockup"><img src={germanoLogo.url} alt="Logo Grupo Germano" loading="lazy" /><span>Uma solução do<strong>Grupo Germano</strong></span></div><div className="footer-socials"><a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Grupo Germano" title="Instagram"><Instagram /></a><a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp"><WhatsAppIcon /></a></div></div><div className="footer-bottom"><span>© 2026 Grupo Germano. Todos os direitos reservados.</span><span>Tecnologia que conecta. Gestão que transforma.</span></div></div></footer>
    <Button asChild className="whatsapp-float" size="icon"><a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp" title="Conversar no WhatsApp"><WhatsAppIcon /></a></Button>
  </>;
}

export default FlowLanding;
