import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "./ui/button";

const faqs = [
  ["O que posso gerenciar com o G-PDV?", "Você reúne ponto de venda, vendas, caixa, produtos, financeiro e relatórios em um sistema web. Também pode organizar usuários, permissões e a operação de múltiplas lojas."],
  ["Posso usar um leitor de código de barras?", "O PDV permite buscar produtos pelo nome, SKU ou código de barras. Antes de contratar, consulte nossa equipe sobre a compatibilidade do seu leitor e dos demais equipamentos, incluindo impressoras."],
  ["Como funciona o controle de caixa?", "O sistema contempla abertura, sangria e fechamento de caixa, além do registro de pagamentos e cálculo de troco. Descontos com justificativa, cancelamentos e estornos ajudam a acompanhar a operação."],
  ["Consigo acompanhar mais de uma loja?", "Sim. O G-PDV possui gestão de múltiplas lojas, dashboards e relatórios para centralizar informações da operação. Fale com um consultor sobre a configuração adequada para sua empresa."],
  ["O G-PDV já emite NFC-e?", "A NFC-e ainda está em desenvolvimento. O catálogo possui campos fiscais, mas isso não significa que a emissão de NFC-e esteja disponível. Consulte o status com a equipe comercial antes de contratar."],
  ["O que não está incluído no sistema atualmente?", "Conforme a documentação atual, o G-PDV não oferece estoque completo, CRM ou cadastro de clientes e crediário, integração TEF/maquininha nem integração bancária. O registro de pagamentos não representa integração com os meios de pagamento."],
];

export function ProductFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return <div>{faqs.map(([question, answer], i) => <div className="faq-row" key={question}>
    <Button variant="ghost" className="faq-trigger" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}>{question}{open === i ? <Minus /> : <Plus />}</Button>
    {open === i && <p className="faq-answer" id={`faq-${i}`}>{answer}</p>}
  </div>)}</div>;
}