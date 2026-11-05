import "./faq.css";

export type FaqItem = { q: string; a: string };

/**
 * Lista de perguntas frequentes usada nas landing pages dos sistemas.
 * Usa <details> nativo (abre e fecha sem JavaScript) e as cores da página
 * (--border, --muted-foreground, --heading/--foreground, --primary).
 * Para trocar a cor de destaque, defina --faq-accent na página.
 */
export function Faq({ items, className = "" }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={`gtech-faq ${className}`}>
      {items.map(({ q, a }) => (
        <details key={q}>
          <summary>
            {q}
            <span className="gtech-faq-icon" aria-hidden="true" />
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
