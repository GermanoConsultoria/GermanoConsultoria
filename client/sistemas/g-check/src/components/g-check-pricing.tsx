import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import { whatsappLink } from "./g-check-brand";

type Period = "mensal" | "anual";

const plan = {
  name: "Plano G-CHECK Completo",
  mensal: "249,99",
  anual: "2.499,99",
  perMonth: "208,33",
  savings: "499,89", // 12 × R$ 249,99 = R$ 2.999,88
};

const planIncludes = ["Sem taxa de implantação", "Sem limite de usuários"];

export function GCheckPricing() {
  const [period, setPeriod] = useState<Period>("mensal");
  const price = period === "mensal" ? plan.mensal : plan.anual;
  const extras = period === "mensal" ? ["Sem fidelidade — cancele quando quiser"] : [];

  return (
    <>
      <div className="section-heading">
        <span className="eyebrow">PLANOS E VALORES</span>
        <h2>Investimento simples e transparente.</h2>
        <p>
          Sem taxa de implantação e sem limite de usuários. Escolha o plano ideal para sua operação.
        </p>
      </div>
      <div className="pricing-highlights">
        {planIncludes.map((item) => (
          <span key={item}>
            <Check />
            {item}
          </span>
        ))}
      </div>
      <div className="period-toggle" role="group" aria-label="Período de pagamento">
        {(["mensal", "anual"] as Period[]).map((p) => (
          <button key={p} type="button" aria-pressed={period === p} onClick={() => setPeriod(p)}>
            {p === "mensal" ? "Mensal" : "Anual"}
          </button>
        ))}
      </div>
      <div className="pricing-grid pricing-grid-single">
        <article className="pricing-card" aria-labelledby="plano-gcheck">
          <h3 id="plano-gcheck">{plan.name}</h3>
          <p className="pricing-price">
            <strong>R$ {price}</strong>
            <span>{period === "mensal" ? "por mês" : "por ano"}</span>
          </p>
          <p className="pricing-note">
            {period === "anual"
              ? `Equivale a R$ ${plan.perMonth}/mês · economia de R$ ${plan.savings}`
              : `ou R$ ${plan.anual} no plano anual`}
          </p>
          <ul>
            {[...extras, ...planIncludes].map((item) => (
              <li key={item}>
                <Check />
                {item}
              </li>
            ))}
          </ul>
          <Button variant="commercial" asChild>
            <a
              href={whatsappLink(
                `Olá! Quero contratar o G-CHECK no plano ${period} de R$ ${price}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contratar pelo WhatsApp
              <ArrowUpRight />
            </a>
          </Button>
        </article>
      </div>
    </>
  );
}
