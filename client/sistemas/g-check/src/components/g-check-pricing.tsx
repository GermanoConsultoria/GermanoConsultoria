import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import { whatsappLink } from "./g-check-brand";

const plans = [
  {
    id: "mensal",
    name: "Plano Mensal",
    price: "R$ 249,99",
    period: "por mês",
    extras: ["Sem fidelidade — cancele quando quiser"],
    message: "Olá! Quero contratar o G-CHECK no plano mensal de R$ 249,99.",
  },
  {
    id: "anual",
    name: "Plano Anual",
    price: "R$ 4.000,00",
    period: "por ano",
    extras: [],
    message: "Olá! Quero contratar o G-CHECK no plano anual de R$ 4.000,00.",
  },
] as const;

const planIncludes = ["Sem taxa de implantação", "Sem limite de usuários"];

export function GCheckPricing() {
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
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className="pricing-card" key={plan.id} aria-labelledby={`plano-${plan.id}`}>
            <h3 id={`plano-${plan.id}`}>{plan.name}</h3>
            <p className="pricing-price">
              <strong>{plan.price}</strong>
              <span>{plan.period}</span>
            </p>
            <ul>
              {[...plan.extras, ...planIncludes].map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="commercial" asChild>
              <a href={whatsappLink(plan.message)} target="_blank" rel="noopener noreferrer">
                Contratar pelo WhatsApp
                <ArrowUpRight />
              </a>
            </Button>
          </article>
        ))}
      </div>
    </>
  );
}
