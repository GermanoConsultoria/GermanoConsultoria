import { media } from "../lib/media";
import { GTechLogo } from "../../../_shared/gtech-logo";

export function BrandLogo({ header = false }: { header?: boolean }) {
  return <div className="gtech-lockup">
    {header ? <GTechLogo src="/sistemas/g-pdv/LOGO_G-TECH.png" /> : <span className="gtech-badge"><img src={media.gtechLogo} alt="Logo G-Tech" className="gtech-logo" width={500} height={500} /></span>}
    <span className="gtech-system"><strong>G-PDV</strong><small>Frente de Caixa e Gestão Comercial</small></span>
  </div>;
}

export function GroupSignature() {
  return <div className="group-signature"><img src={media.germanoLogo} alt="Logo Grupo Germano" width={39} height={32} loading="lazy" /><span>Uma empresa<strong>Grupo Germano</strong></span></div>;
}

export function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M20.5 3.5a11.9 11.9 0 0 0-18.8 14L0 24l6.7-1.8A11.9 11.9 0 0 0 24 11.9c0-3.2-1.2-6.2-3.5-8.4ZM12 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-4 .9 1-3.9-.3-.4a9.8 9.8 0 1 1 8.7 5Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5L9 6.8c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" /></svg>;
}
