import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Infinity as InfinityIcon,
  MapPin,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { ThemeToggle } from "../../../../_shared/theme-toggle";
import { GTechLogo } from "../../../../_shared/gtech-logo";
import { Button } from "../ui/button";

export type IconItem = { icon: LucideIcon; title: string; copy: string };
export type Screen = { tab: string; image: string; alt: string; caption: string };

export type LandingConfig = {
  /** Nome do produto (ex.: "G-CRM"). */
  name: string;
  /** Marca principal (G-Tech): recortes do arquivo oficial em /public/brand. */
  brand: { name: string; icon: string; wordmark: string };
  /** Marca institucional do grupo (rodapé). */
  group: { name: string; logo: string };
  /**
   * Contato comercial. Se algum valor ainda não estiver definido, deixe a string vazia:
   * o link continua renderizado e marcado com data-pending para facilitar a inserção.
   */
  whatsappNumber: string;
  whatsappMessages: { hero: string; pricing: string; float: string };
  instagramUrl: string;
  instagramHandle: string;
  address: string;
  hero: {
    badge: string;
    title: ReactNode;
    subtitle: string;
    cta: string;
    image: string;
    imageAlt: string;
  };
  pains: { eyebrow: string; title: string; items: IconItem[] };
  features: { eyebrow: string; title: string; items: IconItem[] };
  screens: { eyebrow: string; title: string; note: string; items: Screen[] };
  pricing: {
    eyebrow: string;
    title: string;
    highlight: { title: string; copy: string };
    plan: {
      name: string;
      mensal: string;
      anual: string;
      perMonth: string;
      savings: string;
      includes: string[];
      cta: string;
    };
  };
};

const nav = [
  { href: "#recursos", label: "Recursos" },
  { href: "#telas", label: "Telas" },
  { href: "#planos", label: "Planos" },
];

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.79.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6-1.57a11.3 11.3 0 0 0 5.43 1.38h.01c6.25 0 11.34-5.08 11.35-11.34 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

/** Glifo oficial do Instagram (câmera com cantos arredondados). */
export function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${shown ? "reveal-in" : ""} ${className}`}>
      {children}
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  center,
  onPrimary,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
  onPrimary?: boolean;
}) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`text-sm font-bold uppercase tracking-wide ${onPrimary ? "text-on-primary" : "text-brand-strong"}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-3xl font-extrabold sm:text-4xl ${onPrimary ? "text-on-primary" : "text-brand-strong"}`}
      >
        {title}
      </h2>
    </div>
  );
}

/** Logo G-Tech (ícone + escrita) com a chancela do produto. */
function BrandLockup({ c, size = "md" }: { c: LandingConfig; size?: "md" | "sm" }) {
  const md = size === "md";
  return (
    <span className="flex items-center gap-2.5 sm:gap-3">
      {md ? (
        <GTechLogo src="/sistemas/g-crm/LOGO_G-TECH.png" />
      ) : (
        <>
          <img src={c.brand.icon} alt="" className="h-10 w-auto" />
          <img src={c.brand.wordmark} alt={c.brand.name} className="h-5 w-auto" />
        </>
      )}
      <span className="h-7 w-px bg-white/25" aria-hidden="true" />
      <span className="text-lg font-extrabold leading-none text-primary sm:text-xl">{c.name}</span>
    </span>
  );
}

export function LandingPage({ c }: { c: LandingConfig }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const ext = { target: "_blank", rel: "noreferrer" } as const;

  // Link do WhatsApp Comercial. Sem número definido, fica "#" e marcado como pendente.
  const wa = (msg: string) =>
    c.whatsappNumber
      ? { href: `https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(msg)}`, ...ext }
      : { href: "#", "data-pending": "whatsapp-comercial" };
  const ig = c.instagramUrl
    ? { href: c.instagramUrl, ...ext }
    : { href: "#", "data-pending": "instagram" };

  const screen = c.screens.items[tab] ?? c.screens.items[0];
  const { plan } = c.pricing;
  const [period, setPeriod] = useState<"mensal" | "anual">("mensal");

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* HEADER — fundo escuro para a logo prateada da G-Tech ficar nítida */}
      <header className="sticky top-0 z-50 border-b-2 border-primary bg-ink text-ink-foreground">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <a href="#inicio" aria-label={`${c.brand.name} — ${c.name}, início`}>
            <BrandLockup c={c} />
          </a>
          <nav
            className="hidden items-center gap-8 text-sm font-medium md:flex"
            aria-label="Navegação principal"
          >
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-ink-muted transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <a
              {...ig}
              aria-label={`Instagram ${c.instagramHandle}`}
              title="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-white/10 hover:text-primary"
            >
              <InstagramIcon />
            </a>
            <ThemeToggle
              iconSize={20}
              className="inline-flex size-10 cursor-pointer items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-white/10 hover:text-primary"
            />
          <Button
            variant="ghost"
            size="icon"
            className="text-ink-foreground hover:bg-white/10 hover:text-ink-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </Button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-white/10 px-5 py-3 md:hidden" aria-label="Menu mobile">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-medium text-ink-muted hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative scroll-mt-18 bg-accent pb-20 pt-16 lg:pb-24 lg:pt-20"
      >
        <div className="grid-glow pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-on-primary">
            <CheckCircle2 className="size-4" /> {c.hero.badge}
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-6xl">
            {c.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg">{c.hero.subtitle}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="whatsapp" size="xl">
              <a {...wa(c.whatsappMessages.hero)}>
                <WhatsAppIcon /> {c.hero.cta}
              </a>
            </Button>
            <Button asChild variant="hero" size="xl">
              <a href="#planos">Ver preços</a>
            </Button>
            <Button asChild variant="hero" size="xl">
              <a href="#telas">
                Conhecer o {c.name} <ArrowRight />
              </a>
            </Button>
          </div>
          <Reveal>
            <div className="screen-frame mx-auto mt-14 max-w-6xl overflow-hidden rounded-xl border-2 border-primary bg-ink p-1.5 sm:p-2">
              <div className="flex h-7 items-center gap-1.5 px-2" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-primary" />
                <span className="size-2.5 rounded-full bg-white/25" />
                <span className="size-2.5 rounded-full bg-white/25" />
              </div>
              <img src={c.hero.image} alt={c.hero.imageAlt} className="w-full rounded-md" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DORES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHead eyebrow={c.pains.eyebrow} title={c.pains.title} />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.pains.items.map(({ icon: Icon, title, copy }) => (
              <Reveal key={title}>
                <article className="h-full rounded-lg border border-border border-t-4 border-t-primary bg-card p-6">
                  <Icon className="mb-5 size-6 text-brand-strong" />
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="scroll-mt-18 bg-accent py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHead eyebrow={c.features.eyebrow} title={c.features.title} />
          </Reveal>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {c.features.items.map(({ icon: Icon, title, copy }, i) => (
              <Reveal key={title}>
                <li className="flex h-full gap-5 rounded-lg border border-primary/30 bg-card p-6">
                  <div className="grid size-12 shrink-0 place-items-center rounded-md bg-primary text-on-primary">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 text-lg font-bold leading-snug">{title}</h3>
                    <p className="mt-2 text-sm leading-6">{copy}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* TELAS REAIS */}
      <section id="telas" className="scroll-mt-18 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <SectionHead eyebrow={c.screens.eyebrow} title={c.screens.title} center />
          </Reveal>
          <div
            className="mx-auto mb-6 flex w-fit flex-wrap justify-center gap-1 rounded-lg bg-accent p-1"
            role="tablist"
            aria-label="Telas do sistema"
          >
            {c.screens.items.map((s, i) => (
              <button
                key={s.tab}
                type="button"
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${tab === i ? "bg-brand-strong text-primary-foreground" : "hover:bg-primary/20"}`}
              >
                {s.tab}
              </button>
            ))}
          </div>
          {screen && (
            <figure
              className="screen-frame overflow-hidden rounded-xl border-2 border-primary bg-ink p-1.5 sm:p-2"
              role="tabpanel"
            >
              <img
                src={screen.image}
                alt={screen.alt}
                loading="lazy"
                className="w-full rounded-md"
              />
              <figcaption className="px-3 py-3 text-center text-sm text-ink-muted">
                {screen.caption}
              </figcaption>
            </figure>
          )}
          <p className="mt-4 text-center text-xs text-muted-foreground">{c.screens.note}</p>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="scroll-mt-18 bg-primary py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <SectionHead eyebrow={c.pricing.eyebrow} title={c.pricing.title} center onPrimary />
          </Reveal>

          <Reveal>
            <div className="mb-6 flex flex-col items-center gap-4 rounded-xl bg-brand-strong px-6 py-7 text-center text-primary-foreground shadow-[var(--shadow-brand)] sm:flex-row sm:text-left">
              <InfinityIcon className="size-12 shrink-0" strokeWidth={2.5} aria-hidden="true" />
              <div>
                <p className="text-xl font-extrabold leading-tight tracking-wide sm:text-2xl">
                  {c.pricing.highlight.title}
                </p>
                <p className="mt-2 text-sm leading-6 sm:text-base">{c.pricing.highlight.copy}</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div
              className="mx-auto mb-7 flex w-fit rounded-full border border-primary-foreground/30 bg-primary-foreground/10 p-1"
              role="group"
              aria-label="Período de pagamento"
            >
              {(["mensal", "anual"] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  aria-pressed={period === p}
                  onClick={() => setPeriod(p)}
                  className={`rounded-full px-7 py-2 text-sm font-bold transition-colors ${
                    period === p
                      ? "bg-card text-brand-strong shadow"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {p === "mensal" ? "Mensal" : "Anual"}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <article className="mx-auto flex max-w-md flex-col rounded-xl border-t-4 border-brand-strong bg-card p-7 shadow-xl sm:p-8">
              <h3 className="text-2xl font-extrabold">{plan.name}</h3>
              <p className="mt-5 flex items-baseline gap-1 text-4xl font-extrabold leading-none text-brand-strong sm:text-5xl">
                <small className="text-base font-semibold text-muted-foreground">R$</small>
                {period === "mensal" ? plan.mensal : plan.anual}
                <small className="text-base font-semibold text-muted-foreground">
                  /{period === "mensal" ? "mês" : "ano"}
                </small>
              </p>
              <p className="mt-3 min-h-5 text-sm text-muted-foreground">
                {period === "anual"
                  ? `Equivale a R$ ${plan.perMonth}/mês · economia de R$ ${plan.savings}`
                  : `ou R$ ${plan.anual} no plano anual`}
              </p>
              <p className="mt-4 rounded-lg bg-accent px-3 py-2.5 text-sm">
                Implantação / Dev: <strong className="text-brand-strong">R$ 0</strong> · sem taxa
                de adesão
              </p>

              <ul className="mb-8 mt-6 grid gap-3">
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-strong" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild variant="whatsapp" size="xl" className="mt-auto w-full">
                <a {...wa(`${c.whatsappMessages.pricing} Pagamento ${period}.`)}>
                  <WhatsAppIcon /> {plan.cta}
                </a>
              </Button>
            </article>
          </Reveal>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-ink pb-10 pt-14 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <BrandLockup c={c} size="sm" />
            <div className="mt-8 flex items-center gap-4">
              <img src={c.group.logo} alt={c.group.name} className="h-14 w-auto" />
              <p className="text-sm leading-6 text-ink-muted">
                Uma empresa do
                <br />
                <strong className="text-ink-foreground">{c.group.name}</strong>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-primary">Institucional</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-ink-muted hover:text-primary">
                  Início
                </a>
              </li>
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-ink-muted hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-primary">Contato</h3>
            <p className="mt-4 flex gap-2 text-sm leading-6 text-ink-muted">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {c.address}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                {...wa(c.whatsappMessages.hero)}
                aria-label="WhatsApp Comercial"
                className="grid size-10 place-items-center rounded-md border border-white/15 transition-colors hover:border-primary hover:text-primary"
              >
                <WhatsAppIcon />
              </a>
              <a
                {...ig}
                aria-label={`Instagram ${c.instagramHandle}`}
                className="grid size-10 place-items-center rounded-md border border-white/15 transition-colors hover:border-primary hover:text-primary"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-center text-xs text-ink-muted lg:px-8">
          © {new Date().getFullYear()} {c.brand.name} · {c.group.name}. Todos os direitos
          reservados.
        </p>
      </footer>

      {/* WhatsApp flutuante discreto */}
      <a
        {...wa(c.whatsappMessages.float)}
        aria-label="Falar com o comercial pelo WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-success text-success-foreground opacity-90 shadow-[var(--shadow-success)] transition hover:scale-105 hover:opacity-100"
      >
        <WhatsAppIcon className="size-6" />
      </a>
    </main>
  );
}
