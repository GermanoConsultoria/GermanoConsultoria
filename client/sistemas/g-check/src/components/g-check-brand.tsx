// Image files kept in /public.
// g-tech-logo.png is LOGO_G-TECH.png with the empty transparent border cropped off (no other change).
export const gtechLogoUrl = '/sistemas/g-check/g-tech-logo.png';
export const groupLogoUrl = '/sistemas/g-check/Logo_Germano.png';
export const dashboardImageUrl = '/sistemas/g-check/g-check-dashboard-sem-dados.jpg';
export const checklistsImageUrl = '/sistemas/g-check/g-check-checklists-sem-dados.jpg';
export function GCheckBrand() { return <a href="#inicio" className="brand-lockup" aria-label="G-CHECK by G-Tech — início"><img src={gtechLogoUrl} alt="Logo G-Tech" className="brand-logo" width={396} height={398}/><div><div className="brand-name">G-CHECK</div><div className="brand-caption">by G-Tech · Uma empresa Grupo Germano</div></div></a> }
export function WhatsAppIcon({className}:{className?:string}) {return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.45 0 .08 5.36.08 11.96c0 2.1.55 4.16 1.59 5.97L0 24l6.23-1.63a11.96 11.96 0 0 0 5.8 1.48h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.24-6.2-3.48-8.41ZM12.04 21.83a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.9 9.9 0 0 1-1.52-5.27c0-5.48 4.46-9.94 9.95-9.94a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.03c0 5.48-4.46 9.87-10 9.87Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.12 4.52.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg>}
export const whatsappNumberUrl = 'https://wa.me/5519981640280';
export const whatsappLink = (message: string) => whatsappNumberUrl + '?text=' + encodeURIComponent(message);
export const whatsappUrl = whatsappLink('Olá! Quero conhecer o G-CHECK e agendar uma demonstração gratuita.');
