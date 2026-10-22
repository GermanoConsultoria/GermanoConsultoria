import { useState } from "react";
import { Moon, Sun } from "lucide-react";

// Mesma chave usada pelo site principal: o tema escolhido vale para o site todo.
// O index.html de cada landing aplica a classe "dark" antes da página aparecer.
const STORAGE_KEY = "theme";

function isDark() {
  return typeof document !== "undefined" && document.documentElement.classList.contains("dark");
}

/** Botão de tema claro/escuro. A aparência vem do `className` de cada landing page. */
export function ThemeToggle({ className = "", iconSize = 18 }: { className?: string; iconSize?: number }) {
  const [dark, setDark] = useState(isDark);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // Navegador sem acesso ao armazenamento: o tema só não fica salvo.
    }
    setDark(next);
  };

  const label = dark ? "Ativar tema claro" : "Ativar tema escuro";
  return (
    <button type="button" onClick={toggle} className={className} aria-label={label} title={label}>
      {dark ? <Sun size={iconSize} aria-hidden="true" /> : <Moon size={iconSize} aria-hidden="true" />}
    </button>
  );
}
