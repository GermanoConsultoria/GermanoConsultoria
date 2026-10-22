import { useState } from "react";
import { ThemeToggle } from "../../../_shared/theme-toggle";
import { GTechLogo } from "../../../_shared/gtech-logo";
import {
  AlarmClock, Users, KanbanSquare, FolderOpen, Wallet, Plug, X, Check,
  ShieldCheck, Clock, TrendingUp, ChevronDown, Instagram, MapPin, Tag, PlayCircle,
} from "lucide-react";

const WHATSAPP = "https://wa.me/5519981640280?text=Ol%C3%A1!%20Quero%20conhecer%20o%20G-ADV";
const INSTAGRAM = "https://www.instagram.com/grupo.germano/";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.45 0 .08 5.36.08 11.96c0 2.1.55 4.16 1.59 5.97L0 24l6.23-1.63a11.96 11.96 0 0 0 5.8 1.48h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.24-6.2-3.48-8.41ZM12.04 21.83a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.9 9.9 0 0 1-1.52-5.27c0-5.48 4.46-9.94 9.95-9.94a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.03c0 5.48-4.46 9.87-10 9.87Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.12 4.52.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg>;
}



function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {light ? (
        <img src="/sistemas/g-adv/LOGO_G-TECH.png" alt="G-Tech" width={64} height={64} className="h-16 w-16 shrink-0 object-contain" />
      ) : (
        <GTechLogo src="/sistemas/g-adv/LOGO_G-TECH.png" />
      )}
      <div className="leading-none">
        <div className={`font-sans text-xl font-extrabold tracking-tight ${light ? "text-primary-foreground" : "text-primary"}`}>G-ADV</div>
        <div className={`mt-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${light ? "text-primary-foreground/75" : "text-brand"}`}>Gestão Estratégica Jurídica</div>
      </div>
    </div>
  );
}

function PricingAndForm() {
  const plans = [
    { n: "Plano A", s: "Gestão e Integração Bancária", p: "129,99", a: "1.299,99", pm: "108,33", hl: false, items: ["Gestão financeira completa", "Chat interno", "Integração bancária com Banco Inter", "Emissão de NFS-e (Focus NFe)", "Controle de prazos fatais", "Portal do cliente"] },
    { n: "Plano B", s: "Completo com Recorte Digital", p: "199,99", a: "1.999,99", pm: "166,66", hl: true, items: ["Tudo do Plano A", "Integração nativa com Recorte Digital de publicações e intimações"] },
  ];
  const [f, setF] = useState({ nome: "", contato: "", qtd: "", msg: "" });
  const [err, setErr] = useState("");
  const [period, setPeriod] = useState<"mensal" | "anual">("mensal");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.nome.trim() || !f.contato.trim()) return setErr("Preencha nome e escritório/WhatsApp.");
    setErr("");
    const t = `Olá! Quero uma demonstração do G-ADV.\nNome: ${f.nome.slice(0, 100)}\nEscritório/WhatsApp: ${f.contato.slice(0, 120)}\nAdvogados: ${f.qtd.slice(0, 10)}\nMensagem: ${f.msg.slice(0, 800)}`;
    window.open(`https://wa.me/5519981640280?text=${encodeURIComponent(t)}`, "_blank", "noopener");
  };
  const inp = "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none focus:border-brand";
  return (
    <>
      <section id="planos" className="scroll-mt-20 bg-background py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground"><Users className="h-4 w-4" /> Todos os planos sem limites de usuários</span>
          <h2 className="mt-6 text-3xl font-bold md:text-5xl">Planos e preços</h2>
          <div className="mx-auto mt-8 flex w-fit rounded-full border border-border bg-brand-soft p-1" role="group" aria-label="Período de pagamento">
            {(["mensal", "anual"] as const).map((p) => (
              <button key={p} type="button" aria-pressed={period === p} onClick={() => setPeriod(p)}
                className={`rounded-full px-7 py-2 text-sm font-bold transition-colors ${period === p ? "bg-card text-primary shadow" : "text-foreground hover:text-primary"}`}>
                {p === "mensal" ? "Mensal" : "Anual"}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
            {plans.map((pl) => (
              <div key={pl.n} className={`relative flex flex-col rounded-2xl bg-card p-8 ${pl.hl ? "border-2 border-brand shadow-elegant" : "border border-border"}`}>
                {pl.hl && <span className="absolute -top-3 right-6 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase text-primary-foreground">Recomendado</span>}
                <div className="text-sm font-semibold uppercase tracking-wider text-brand">{pl.n}</div>
                <h3 className="mt-1 text-2xl font-semibold">{pl.s}</h3>
                <div className="mt-5 flex items-end gap-1"><span className="text-sm">R$</span><span className="text-5xl font-extrabold text-primary">{period === "mensal" ? pl.p : pl.a}</span><span className="pb-1 text-sm">/{period === "mensal" ? "mês" : "ano"}</span></div>
                <p className="mt-2 text-sm text-muted-foreground">{period === "anual" ? `Equivale a R$ ${pl.pm}/mês` : `ou R$ ${pl.a} no plano anual`}</p>
                <p className="mt-1 text-sm text-muted-foreground">Implantação: R$ 999,99 (NF + Banco)</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pl.items.map((t) => <li key={t} className="flex gap-3 text-sm"><Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />{t}</li>)}
                </ul>
                <a href={`https://wa.me/5519981640280?text=${encodeURIComponent(`Olá! Quero escolher o ${pl.n} do G-ADV, pagamento ${period}.`)}`} target="_blank" rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary/90">
                  <WhatsAppIcon /> Escolher {pl.n}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Seal({ light = false }: { light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${light ? "border-primary-foreground/30 text-primary-foreground/80" : "border-border bg-card text-muted-foreground"}`}>
      <img src="/sistemas/g-adv/Logo_Germano.png" alt="Grupo Germano" className="h-4 w-4 object-contain" />
      Uma solução do Grupo Germano
    </span>
  );
}

function WaButton({ label, big = false }: { label: string; big?: boolean }) {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-primary font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5 hover:bg-primary/90 ${big ? "px-5 py-3.5 text-sm" : "px-4 py-2.5 text-sm"}`}>
      <WhatsAppIcon /> {label}
    </a>
  );
}

const features = [
  { icon: AlarmClock, t: "Controle e Cálculo de Prazos Fatais", d: "Cálculo automático de prazos processuais com alertas preventivos em tempo real." },
  { icon: Users, t: "Portal do Cliente", d: "Canal seguro para clientes acompanharem seus processos sem sobrecarregar o WhatsApp dos advogados." },
  { icon: KanbanSquare, t: "Kanban de Tarefas e Audiências", d: "Gestão visual de atividades, reuniões e diligências distribuídas por advogado." },
  { icon: FolderOpen, t: "Gestão Documental & Peças", d: "Repositório central de arquivos, petições e atas vinculados a cada cliente e processo." },
  { icon: Wallet, t: "Módulo Financeiro Jurídico", d: "Boletos, PIX com baixa automática, conciliação OFX, NFS-e e plano de contas." },
  { icon: Plug, t: "Integrações Nativas", d: "Conexão direta com Banco Inter, Focus NFe e WhatsApp." },
];

const faqs = [
  { q: "Os dados do meu escritório ficam seguros (LGPD)?", a: "Sim. O G-ADV opera com controle de acesso por usuário, registro de atividades e armazenamento protegido, seguindo as diretrizes da LGPD para dados de clientes e processos." },
  { q: "Como funciona a migração dos dados atuais?", a: "Nossa equipe orienta a importação de clientes, processos e documentos existentes, para que o escritório comece a operar sem retrabalho." },
  { q: "Como funcionam as integrações bancárias?", a: "Com o Banco Inter, boletos e PIX são emitidos pelo sistema e a baixa acontece automaticamente quando o pagamento é confirmado. Também é possível conciliar extratos via OFX." },
  { q: "E a emissão de notas fiscais?", a: "A integração com a Focus NFe permite emitir NFS-e dos honorários diretamente no G-ADV, vinculadas ao financeiro." },
  { q: "Meus clientes precisam instalar algo?", a: "Não. O Portal do Cliente funciona no navegador, com acesso seguro para acompanhar o andamento dos processos." },
];

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="font-sans text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <div className="flex min-w-0 items-center gap-4"><Logo /><div className="hidden lg:block"><Seal /></div></div>
          <nav className="hidden gap-7 text-sm font-medium md:flex">
            {[["recursos", "Recursos"], ["prazos", "Prazos"], ["planos", "Planos"], ["faq", "FAQ"], ["contato", "Contato"]].map(([id, l]) => (
              <a key={id} href={`#${id}`} className="hover:text-brand">{l}</a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-lg p-2 text-brand hover:bg-brand-soft"><Instagram className="h-5 w-5" /></a>
            <ThemeToggle iconSize={20} className="cursor-pointer rounded-lg p-2 text-brand hover:bg-brand-soft" />
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hidden rounded-lg border border-primary px-3 py-2 text-sm font-semibold text-primary hover:bg-brand-soft sm:inline-flex">Falar com consultor</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">Plataforma jurídica integrada</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Gestão jurídica estratégica: blinde seu escritório contra a perda de prazos e automatize seu faturamento</h1>
            <p className="mt-6 max-w-xl text-lg">Controle de prazos fatais com alertas preventivos, portal do cliente integrado, gestão de peças e financeiro completo — tudo em um só lugar.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WaButton big label="Ver demonstração" />
              <a href="#planos" className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-background px-5 py-3.5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-brand-soft"><Tag className="h-5 w-5" /> Ver preços</a>
              <a href="#recursos" className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-background px-5 py-3.5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-brand-soft"><PlayCircle className="h-5 w-5" /> Conhecer o G-ADV</a>
            </div>
            <span className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="h-4 w-4 text-brand" /> Demonstração sem compromisso</span>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-border bg-muted/60 p-4 shadow-elegant sm:p-8">
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-elegant">
                <div className="flex items-center gap-1.5 border-b border-border bg-muted px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="relative">
                  <img src="/sistemas/g-adv/G-ADV.png" alt="Tela real do painel do G-ADV" width={1334} height={574} className="block w-full" />
                  <div className="absolute left-0 top-0 h-[12%] w-[19%] backdrop-blur-md bg-primary/40" />
                </div>
              </div>
            </div>
            <div className="absolute right-3 top-4 rounded-xl bg-card p-3 shadow-elegant">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary"><AlarmClock className="h-4 w-4 text-brand" /> Prazo fatal em 3 dias</div>
              <div className="mt-1 text-[11px] text-muted-foreground">Alerta preventivo enviado</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section id="prazos" className="scroll-mt-20 bg-background py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-bold md:text-5xl">A rotina manual custa caro</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center">Veja a diferença entre um escritório fragmentado e uma operação com o G-ADV.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-muted p-8">
              <h3 className="text-2xl font-semibold text-muted-foreground">Sem o G-ADV</h3>
              <ul className="mt-6 space-y-4">
                {["Risco constante de perder prazos judiciais", "Clientes ligando o tempo todo para saber do processo", "Honorários desorganizados e cobranças esquecidas", "Documentos espalhados em pastas e e-mails"].map((t) => (
                  <li key={t} className="flex gap-3"><X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-brand bg-card p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold">Com o G-ADV</h3>
              <ul className="mt-6 space-y-4">
                {["Prazos calculados automaticamente com alertas", "Portal transparente para o cliente acompanhar tudo", "Cobranças automáticas via PIX e boleto", "Peças e atas centralizadas por processo"].map((t) => (
                  <li key={t} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="scroll-mt-20 bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Tudo o que seu escritório precisa</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: I, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10"><I className="h-6 w-6 text-brand" /></div>
                <h3 className="mt-5 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section id="financeiro" className="scroll-mt-20 bg-background py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Segurança que se mede</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { i: ShieldCheck, n: "0%", l: "de risco em prazos perdidos com alertas preventivos" },
              { i: Clock, n: "−70%", l: "de tempo gasto respondendo clientes sobre andamento" },
              { i: TrendingUp, n: "100%", l: "dos honorários rastreados, da emissão à baixa automática" },
            ].map(({ i: I, n, l }) => (
              <div key={n} className="rounded-2xl border border-border bg-card p-8 text-center">
                <I className="mx-auto h-8 w-8 text-brand" />
                <div className="mt-4 font-display text-6xl font-bold text-primary">{n}</div>
                <p className="mt-2 text-sm">{l}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">Indicadores ilustrativos de ganho operacional.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-brand-soft py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Perguntas frequentes</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="rounded-xl border border-border bg-card">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-primary">
                  {f.q}<ChevronDown className={`h-5 w-5 shrink-0 text-brand transition ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <p className="px-5 pb-5 text-sm leading-relaxed">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingAndForm />

      {/* CTA FINAL + FOOTER */}
      <footer className="bg-dark-grad text-primary-foreground">
        <div id="contato" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-20 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-5xl">Modernize a gestão do seu escritório hoje mesmo</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">Converse com um consultor e veja o G-ADV funcionando na rotina do seu escritório.</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-7 py-4 font-semibold text-primary transition hover:-translate-y-0.5">
            <WhatsAppIcon /> Solicitar Demonstração no WhatsApp
          </a>
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 md:flex-row">
            <div className="flex flex-col items-center gap-3 md:flex-row"><Logo light /><Seal light /></div>
            <div className="flex flex-col items-center gap-3 text-sm text-primary-foreground/80 md:items-end">
              <div className="flex items-center gap-2">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Grupo Germano" title="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 hover:bg-primary-foreground/10 hover:text-primary-foreground"><Instagram className="h-5 w-5" /></a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 hover:bg-primary-foreground/10 hover:text-primary-foreground"><WhatsAppIcon /></a>
              </div>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Rua Santa Julia, 259 - Santa Julia, Mogi Guaçu - SP</span>
            </div>
          </div>
          <p className="pb-6 text-center text-xs text-primary-foreground/60">© {new Date().getFullYear()} G-Tech · G-ADV · Grupo Germano. Todos os direitos reservados.</p>
        </div>
      </footer>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" title="WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-elegant transition hover:scale-105">
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

export default Index;
