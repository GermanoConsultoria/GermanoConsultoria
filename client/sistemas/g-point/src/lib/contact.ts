/**
 * Contatos oficiais do grupo.
 *
 * Os mesmos canais valem para TODAS as landing pages de produto
 * (G-CRM, G-POINT e as próximas). Nunca duplicar os valores dentro de
 * uma página: importar daqui para que uma troca apareça em todo lugar.
 */

export const WHATSAPP_NUMBER = "+55 19 98164-0280";

export const WHATSAPP_URL = "https://wa.me/5519981640280";

export const INSTAGRAM_HANDLE = "@grupo.germano";

export const INSTAGRAM_URL = "https://www.instagram.com/grupo.germano/";

/**
 * Mensagem pré-preenchida do WhatsApp. Recebe o nome do produto para o
 * time comercial saber de qual landing page veio o contato.
 */
export const whatsappUrlFor = (product: string) =>
  whatsappUrlWithMessage(`Olá! Tenho interesse no ${product}.`);

/** Link do WhatsApp comercial com uma mensagem livre já preenchida. */
export const whatsappUrlWithMessage = (message: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
