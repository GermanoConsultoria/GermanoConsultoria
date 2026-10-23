import "./gtech-logo.css";

/**
 * Logo oficial da G-Tech (LOGO_G-TECH.webp) usado no header de todas as landing pages.
 * O arquivo é quadrado com uma borda transparente; o desenho ocupa 384×387 de cada 500×500
 * (o original de 500×500 px está em originais/; o publicado tem 256×256 px, mesma proporção).
 * O componente mostra só o desenho, na proporção original, sem esticar.
 */
export function GTechLogo({ src, className = "" }: { src: string; className?: string }) {
  return (
    <span className={`gtech-header-logo ${className}`}>
      <img src={src} width={500} height={500} alt="G-Tech" />
    </span>
  );
}
