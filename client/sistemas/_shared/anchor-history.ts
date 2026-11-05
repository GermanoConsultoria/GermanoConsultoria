/**
 * Links internos (#recursos, #planos, #faq...) rolam a página sem criar
 * novas entradas no histórico do navegador. Assim, o botão "voltar" sai da
 * landing page direto para a página anterior (a página inicial do site),
 * em vez de passar por cada seção clicada.
 */
document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const link = (event.target as Element | null)?.closest?.("a[href^='#']");
  if (!(link instanceof HTMLAnchorElement)) return;
  if (link.target && link.target !== "_self") return;

  const hash = link.getAttribute("href") ?? "#";
  const id = decodeURIComponent(hash.slice(1));
  const target = id ? document.getElementById(id) : null;
  if (id && !target) return;

  event.preventDefault();
  // Troca o endereço sem criar entrada nova no histórico.
  history.replaceState(history.state, "", id ? hash : location.pathname + location.search);
  if (target) target.scrollIntoView();
  else window.scrollTo({ top: 0 });
});
