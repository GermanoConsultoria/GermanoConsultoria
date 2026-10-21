import { useState } from "react";
import { ArrowRight, ArrowUpRight, Barcode, Check, CheckCircle2, ChevronRight, CircleCheck, CreditCard, FileSpreadsheet, Instagram, LayoutDashboard, LockKeyhole, Menu, Monitor, ReceiptText, Search, ShieldCheck, ShoppingCart, Store, Wallet, X, Users, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { BrandLogo, GroupSignature, WhatsAppIcon } from "../components/g-pdv-brand";
import { ProductFAQ } from "../components/g-pdv-faq";
import { whatsappUrl, whatsappPlanUrl, instagramUrl } from "../lib/contact";
import { media } from "../lib/media";



const navigation = [["Recursos do caixa", "recursos"], ["Gestão de lojas", "gestao"], ["Planos", "planos"], ["Benefícios", "beneficios"], ["Dúvidas frequentes", "faq"]];
const features = [
  { icon: Barcode, title: "Um caixa que acompanha seu ritmo", text: "Encontre produtos por nome, SKU ou código de barras. Navegue por categorias e organize a venda no carrinho.", tag: "Frente de caixa ágil" },
  { icon: Wallet, title: "Cada movimento, no seu lugar", text: "Da abertura à sangria e ao fechamento, acompanhe os movimentos do caixa com mais organização.", tag: "Controle de caixa" },
  { icon: CreditCard, title: "Mais clareza na hora de receber", text: "Registre pagamentos, calcule o troco e aplique descontos com justificativa. Tenha controle também dos estornos.", tag: "Pagamentos e troco" },
  { icon: ReceiptText, title: "O histórico que você precisa", text: "Consulte suas vendas, reimprima comprovantes e acompanhe cancelamentos sem perder o contexto da operação.", tag: "Histórico de vendas" },
  { icon: FileSpreadsheet, title: "Produtos bem organizados", text: "Centralize seu catálogo, organize categorias e trabalhe com planilhas XLSX e campos fiscais dos produtos.", tag: "Catálogo de produtos" },
  { icon: LayoutDashboard, title: "Uma visão mais completa", text: "Reúna financeiro, dashboards e relatórios. Gerencie múltiplas lojas, usuários e permissões em um só sistema.", tag: "Gestão centralizada" },
];
const screens = [{ title: "Frente de caixa", icon: Monitor, src: media.pdvScreen, alt: "Tela real do G-PDV com busca de produtos, categorias, carrinho e opções de pagamento" }, { title: "Histórico de vendas", icon: ReceiptText, src: media.historyScreen, alt: "Tela real do histórico de vendas com data, pagamento e valor por cupom" }, { title: "Visão de vendas", icon: LayoutDashboard, src: media.salesScreen, alt: "Tela real de vendas com totais por forma de pagamento e status das vendas" }] as const;

function WhatsAppCTA({ children = "Falar com um consultor", dark = false, href = whatsappUrl }: { children?: React.ReactNode; dark?: boolean; href?: string }) {
  return <Button asChild variant={dark ? "dark" : "cta"} size="hero"><a href={href} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />{children}<ArrowUpRight /></a></Button>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screen, setScreen] = useState(0);
  const selected = screens[screen] ?? screens[0];
  return (
    <>
      <header className="site-header sticky top-0 z-40 border-b border-border">
        <div className="page-container flex h-full items-center justify-between gap-4">
          <a href="#inicio" aria-label="G-PDV — início"><BrandLogo /></a>
          <div className="hidden border-l border-border pl-5 xl:block"><GroupSignature /></div>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Menu principal">{navigation.map(([label, id]) => <a className="text-xs font-semibold transition-colors hover:text-primary" href={`#${id}`} key={id}>{label}</a>)}</nav>
          <div className="hidden sm:block"><Button asChild variant="cta" size="lg"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Falar com consultor<ArrowUpRight /></a></Button></div>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="mobile-nav lg:hidden" aria-label="Menu móvel">{navigation.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}<WhatsAppCTA /></nav>}
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="page-container text-center">
            <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-brand/30 bg-background/70 px-4 py-2 text-primary"><span className="h-1.5 w-1.5 rounded-full bg-brand" />G-PDV · Gestão para o varejo</div>
            <h1 className="hero-title">Mais agilidade no caixa.<br /> <em>Mais controle na sua loja.</em></h1>
            <p className="hero-description">Do primeiro produto ao fechamento do dia, o G-PDV conecta suas vendas, caixa e financeiro. Menos operação espalhada. Mais clareza para cuidar do seu negócio.</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3"><WhatsAppCTA>Quero conhecer o G-PDV</WhatsAppCTA><Button asChild variant="outline" size="hero"><a href="#demonstracao"><Monitor />Ver o sistema<ArrowRight /></a></Button></div>
            <div className="hero-proof"><span><CheckCircle2 />Vendas e caixa centralizados</span><span><CheckCircle2 />Gestão de múltiplas lojas</span><span><CheckCircle2 />Uma empresa Grupo Germano</span></div>
            <div className="screen-frame"><div className="screen-chrome"><div className="window-dots"><i /><i /><i /></div><span className="flex items-center gap-1.5"><LockKeyhole className="size-2.5" />G-PDV · Frente de caixa</span><Monitor className="size-3" /></div><img src={media.pdvScreen} alt={screens[0].alt} width={1329} height={582} fetchPriority="high" /></div>
          </div>
        </section>
        <div className="capability-strip"><div className="page-container grid grid-cols-2 md:grid-cols-4">{[[ShoppingCart, "Venda com agilidade"], [ShieldCheck, "Organize seu caixa"], [Store, "Conecte suas lojas"], [LayoutDashboard, "Enxergue os resultados"]].map(([Icon, text]) => { const Glyph = Icon as typeof ShoppingCart; return <div key={String(text)} className="capability-item"><Glyph />{String(text)}</div>; })}</div></div>

        <section id="recursos" className="section-space"><div className="page-container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-eyebrow">Seu dia a dia, mais simples</p><h2 className="section-title">Do balcão à gestão.<br />Tudo conversa.</h2></div><p className="section-description max-w-sm">Recursos que fazem sentido na rotina de quem vende, atende e precisa fechar o dia com organização.</p></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title, text, tag }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon className="size-21 size-5" /></div><h3>{title}</h3><p>{text}</p><span className="feature-tag">{tag}<ChevronRight className="size-3" /></span></article>)}</div>
        </div></section>

        <section id="gestao" className="section-space bg-muted"><div className="page-container" id="demonstracao">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="section-eyebrow">Conheça por dentro</p><h2 className="section-title">Sua operação à vista.<br />Suas decisões com mais clareza.</h2></div><p className="section-description max-w-sm">Uma visão organizada das vendas e do caixa, com informações financeiras e relatórios para acompanhar suas lojas.</p></div>
          <div className="demo-tabs" role="tablist" aria-label="Telas do G-PDV">{screens.map(({ title, icon: Icon }, i) => <Button variant="tab" key={title} role="tab" aria-selected={screen === i} aria-controls="screen-panel" id={`screen-tab-${i}`} data-active={screen === i} onClick={() => setScreen(i)}><Icon />{title}</Button>)}</div>
          <div className="demo-screen" id="screen-panel" role="tabpanel" aria-labelledby={`screen-tab-${screen}`}><div className="screen-chrome"><div className="window-dots"><i /><i /><i /></div><span>G-PDV · {selected.title}</span><Monitor className="size-3" /></div><img src={selected.src} alt={selected.alt} width={1335} height={590} loading="lazy" /></div>
          <p className="demo-caption">Telas reais de referência, com identificação anterior do sistema. Os menus exibidos não representam todos os recursos disponíveis na versão atual. NFC-e em desenvolvimento.</p>
        </div></section>

        <section id="beneficios" className="section-space"><div className="page-container"><p className="section-eyebrow">Uma nova rotina para sua loja</p><h2 className="section-title">Menos improviso.<br />Mais organização, de ponta a ponta.</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-20"><div className="comparison-column"><h3 className="mb-4 text-sm font-bold text-muted-foreground">Quando tudo fica espalhado</h3>{["Busca demorada de produtos no atendimento", "Movimentos de caixa difíceis de conferir", "Descontos sem contexto ou justificativa", "Informações de vendas em lugares diferentes"].map(t => <div key={t} className="comparison-item text-muted-foreground"><X />{t}</div>)}</div><div className="comparison-column"><h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-primary"><CircleCheck className="size-4" />Com o G-PDV no seu dia a dia</h3>{["Busca por nome, SKU e código de barras", "Abertura, sangria e fechamento organizados", "Descontos com justificativa e registro de estornos", "Vendas, produtos e financeiro centralizados"].map(t => <div key={t} className="comparison-item"><Check className="text-primary" />{t}</div>)}</div></div>
        </div></section>

        <section className="section-space border-y border-border bg-brand-soft"><div className="page-container"><div className="mb-12 text-center"><p className="section-eyebrow justify-center">Simples do início ao fim</p><h2 className="section-title">Seu fluxo de venda, sem complicação.</h2></div><div className="grid gap-9 md:grid-cols-3">{[{ n: "01", title: "Abra o caixa", text: "Prepare a operação e registre a abertura para começar o atendimento com tudo organizado." }, { n: "02", title: "Encontre e venda", text: "Busque ou bipe os produtos, monte o carrinho e registre o pagamento com cálculo de troco." }, { n: "03", title: "Feche e acompanhe", text: "Confira os movimentos, faça o fechamento e consulte vendas e relatórios da sua operação." }].map(s => <div className="step-item" key={s.n}><span className="step-number">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></div></section>

        <section id="planos" className="section-space bg-brand-soft"><div className="page-container">
          <div className="mb-10 text-center"><p className="section-eyebrow justify-center">Planos e preços</p><h2 className="section-title">Um plano completo para sua loja.</h2><div className="mt-5"><span className="unlimited-badge"><Users className="size-4" />TODOS OS PLANOS SEM LIMITES DE USUÁRIOS</span></div></div>
          <div className="pricing-card mx-auto max-w-4xl"><div className="grid gap-8 md:grid-cols-[1fr_1.1fr]"><div><h3 className="text-xl font-extrabold text-ink">Plano G-PDV Completo</h3><p className="mt-2 text-sm font-bold text-positive">Taxa de implantação: R$ 0,00 · Sem taxa de adesão</p>
            <div className="mt-6 grid gap-4"><div className="price-option"><p className="text-xs font-bold text-muted-foreground">PLANO MENSAL</p><p className="price-value">R$ 129,99<span className="text-sm font-semibold text-muted-foreground">/mês</span></p></div><div className="price-option"><p className="text-xs font-bold text-muted-foreground">PLANO ANUAL · ECONOMIA ANUAL</p><p className="price-value">R$ 1.200,00<span className="text-sm font-semibold text-muted-foreground">/ano</span></p></div></div>
            <div className="mt-6"><WhatsAppCTA dark href={whatsappPlanUrl}>Contratar no WhatsApp</WhatsAppCTA></div></div>
            <ul className="grid content-start gap-3 text-sm">{["Frente de caixa ágil com leitor de código de barras e busca rápida", "Controle de abertura, sangria e fechamento cego de caixa", "Gestão de pagamentos e troco", "Descontos com justificativa e estornos", "Histórico de vendas e reimpressão de cupons", "Catálogo de produtos com importação/exportação XLSX", "Suporte a múltiplas lojas", "Usuários ilimitados"].map(t => <li key={t} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{t}</li>)}</ul></div></div>
        </div></section>

        <section id="faq" className="section-space"><div className="page-container grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="section-eyebrow">Pode perguntar</p><h2 className="section-title">Tudo claro.<br />Antes de começar.</h2><p className="section-description mt-5 max-w-xs">Cada loja tem sua rotina. Nossa equipe ajuda você a entender se o G-PDV faz sentido para o seu negócio.</p><Button asChild variant="link" className="mt-5 px-0"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Tirar uma dúvida no WhatsApp<ArrowUpRight /></a></Button></div><ProductFAQ /></div></section>

        <section className="cta-band"><div className="page-container flex flex-col justify-between gap-7 lg:flex-row lg:items-center"><div><p className="mb-4 text-xs font-bold text-ink">SEU PRÓXIMO PASSO</p><h2>Seu negócio merece<br />uma operação mais organizada.</h2><p className="mt-4 max-w-lg text-sm leading-relaxed text-ink">Conheça o G-PDV em uma demonstração e converse sobre as necessidades da sua loja. Direto com a nossa equipe.</p></div><div className="shrink-0"><WhatsAppCTA dark>Agendar uma demonstração</WhatsAppCTA><p className="mt-3 text-center text-[11px] text-ink">Conversa direta. Sem formulários.</p></div></div></section>
      </main>

      <footer className="footer"><div className="page-container"><div className="flex flex-wrap items-start justify-between gap-7"><div><BrandLogo /><p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">Sistema oficial G-Tech.<br />Todos os planos sem limites de usuários.</p></div><GroupSignature /><div className="flex gap-5"><Button asChild variant="ghost" size="icon"><a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Grupo Germano" title="Instagram do Grupo Germano"><Instagram /></a></Button><Button asChild variant="ghost" size="icon"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp comercial" title="WhatsApp comercial"><WhatsAppIcon /></a></Button></div></div><div className="mt-9 flex flex-wrap justify-between gap-3 border-t border-border pt-5 text-[10px] text-muted-foreground"><p>© 2026 Grupo Germano. Todos os direitos reservados.</p><p className="flex items-center gap-1"><MapPin className="size-3" />Rua Santa Julia, 259 - Santa Julia, Mogi Guaçu - SP</p></div></div></footer>
      <Button asChild variant="whatsapp" size="icon" className="fixed bottom-5 right-5 z-30 h-13 w-13 rounded-full [&_svg]:size-6"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar sobre o G-PDV no WhatsApp" title="Falar sobre o G-PDV no WhatsApp"><WhatsAppIcon /></a></Button>
    </>
  );
}

export default Index;
