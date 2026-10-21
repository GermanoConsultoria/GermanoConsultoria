import { useState } from "react";

// Telas reais do G-CLIN (arquivos da pasta public). Os dados exibidos são de exemplo.
const screens = [
  {
    src: "/sistemas/g-clin/G-CLIN1.png",
    label: "Painel",
    title: "Painel de informações",
    text: "Visão do dia: agendamentos, confirmações, faltas e resultado do período.",
  },
  {
    src: "/sistemas/g-clin/G-CLIN2.png",
    label: "Agendamentos",
    title: "Agendamentos",
    text: "Consultas em lista ou calendário, com filtros por período e status.",
  },
  {
    src: "/sistemas/g-clin/G-CLIN3.png",
    label: "Horários livres",
    title: "Encontrar horário",
    text: "Localize o próximo horário disponível para encaixar o paciente.",
  },
  {
    src: "/sistemas/g-clin/G-CLIN4.png",
    label: "Funcionamento",
    title: "Horário de funcionamento",
    text: "Expediente e intervalos configurados para cada dia da semana.",
  },
  {
    src: "/sistemas/g-clin/G-CLIN5.png",
    label: "Serviços",
    title: "Serviços",
    text: "Serviços com preço, custo, margem e duração em um só cadastro.",
  },
  {
    src: "/sistemas/g-clin/G-CLIN6.png",
    label: "Pacientes",
    title: "Pacientes",
    text: "Cadastro centralizado com busca por nome, telefone ou e-mail.",
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
      <img src={src} alt={alt} width={1333} height={580} loading={eager ? "eager" : "lazy"} />
    </figure>
  );
}

export function ClinicPreview() {
  const [active, setActive] = useState(0);
  const screen = screens[active] ?? screens[0]!;
  return (
    <div className="showcase">
      <div className="showcase-tabs" role="tablist" aria-label="Telas do G-CLIN">
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
          alt={`Tela "${screen.title}" do G-CLIN com dados de exemplo`}
        />
        <p className="showcase-caption">
          <strong>{screen.title}.</strong> {screen.text}
        </p>
      </div>
      <p className="demo-note">
        Telas reais do sistema. Nomes, contatos e valores são dados de exemplo.
      </p>
    </div>
  );
}
