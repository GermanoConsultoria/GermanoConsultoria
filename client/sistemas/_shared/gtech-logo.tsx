import "./gtech-logo.css";

/**
 * Logo oficial da G-Tech (LOGO_G-TECH.png) usado no header de todas as landing pages.
 * O arquivo tem 500×500 px com uma borda transparente; o desenho ocupa 384×387 px.
 * O componente mostra só o desenho, na proporção original, sem esticar.
 */
export function GTechLogo({ src, className = "" }: { src: string; className?: string }) {
  return (
    <span className={`gtech-header-logo ${className}`}>
      <img src={src} width={500} height={500} alt="G-Tech" />
    </span>
  );
}
