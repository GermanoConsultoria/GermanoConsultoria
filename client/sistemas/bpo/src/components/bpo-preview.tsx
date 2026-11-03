import { useState } from "react";

// Telas reais do BPO (arquivos da pasta public). Empresas, valores e lançamentos são fictícios.
const screens = [
  {
    src: "/sistemas/bpo/BPO1.webp",
    label: "Balancete",
    title: "Balancete",
    text: "Receitas, despesas, lucro previsto, saldo realizado e investido do período em um só painel.",
  },
  {
    src: "/sistemas/bpo/BPO2.webp",
    label: "Contas a pagar",
    title: "Contas a pagar",
    text: "Despesas com beneficiário, categoria, banco, vencimento, pagamentos parciais e status.",
  },
  {
    src: "/sistemas/bpo/BPO3.webp",
    label: "Contas a receber",
    title: "Contas a receber",
    text: "Recebimentos por categoria e banco, com saldo anterior e atual de cada lançamento.",
  },
  {
    src: "/sistemas/bpo/BPO4.webp",
    label: "Plano de contas",
    title: "Plano de contas",
    text: "Categorias de receitas e despesas de cada cliente, com a quantidade de lançamentos.",
  },
  {
    src: "/sistemas/bpo/BPO5.webp",
    label: "Bancos",
    title: "Bancos",
    text: "Contas bancárias do cliente com saldo movimentado em tempo real pelos pagamentos.",
  },
  {
    src: "/sistemas/bpo/BPO6.webp",
    label: "Investimentos",
    title: "Investimentos",
    text: "Aportes e resgates com total aportado, resgatado e saldo investido.",
  },
];

export function BrowserFrame({
  src,
  alt,
  eager = false,
}: {
  src: string;
  alt: string;
  eager?: boolean;
}) {
  return (
    <figure className="browser-frame">
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <img src={src} alt={alt} width={1366} height={590} loading={eager ? "eager" : "lazy"} />
    </figure>
  );
}

export function BpoPreview() {
  const [active, setActive] = useState(0);
  const screen = screens[active] ?? screens[0]!;
  return (
    <div className="showcase">
      <div className="showcase-tabs" role="tablist" aria-label="Telas do BPO">
        {screens.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            id={`tab-${i}`}
            aria-selected={i === active}
            aria-controls="showcase-panel"
            className="showcase-tab"
            onClick={() => setActive(i)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div id="showcase-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
        <BrowserFrame
          src={screen.src}
          alt={`Tela "${screen.title}" do BPO com dados de exemplo`}
        />
        <p className="showcase-caption">
          <strong>{screen.title}.</strong> {screen.text}
        </p>
      </div>
      <p className="demo-note">
        Telas reais do sistema. Empresas, valores e lançamentos são dados de exemplo.
      </p>
    </div>
  );
}
