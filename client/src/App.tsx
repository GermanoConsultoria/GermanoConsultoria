import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import GCon from "./pages/GCon";
import GTech from "./pages/GTech";
import GConOnline from "./pages/Angelita";
import ThemeToggle from "./components/ThemeToggle";




function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/gcon"} component={GCon} />
      <Route path={"/gtech"} component={GTech} />
      <Route path={"/gcononline"} component={GConOnline} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        {/* Toaster (sonner) e TooltipProvider foram retirados: nenhuma página usa toast() ou <Tooltip>,
            e juntos acrescentavam ~56 KB de JS a todas as páginas. Os componentes continuam em
            components/ui caso sejam necessários no futuro. */}
        <ThemeToggle />
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
export default App;
