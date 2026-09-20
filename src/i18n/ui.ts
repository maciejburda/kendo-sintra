export const languages = { en: 'English', pt: 'Português' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Deployment prefix: '' on the custom domain, '/kendo-sintra' on the preview URL. */
const SITE_BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');

/** Path to the same page in a given language. EN lives at /, PT at /pt/. */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const langSeg = lang === defaultLang ? '' : `/${lang}`;
  return `${SITE_BASE}${langSeg}${clean ? `/${clean}` : ''}` || '/';
}

/** Route slugs — identical in both languages, so the language switch is 1:1. */
export const routes = [
  'what-is-kendo',
  'beginner-course',
  'schedule',
  'fees',
  'gallery',
  'faq',
  'contact',
  'privacy',
] as const;

export const ui = {
  en: {
    'nav.what-is-kendo': 'What is Kendo',
    'nav.beginner-course': 'Try Kendo',
    'nav.schedule': 'Schedule',
    'nav.fees': 'Fees',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.skip': 'Skip to content',
    'consent.title': 'Cookies on this site',
    'consent.body': 'We would like to load Google Analytics and a Google Map. Both set cookies in your browser. The site works fully without them.',
    'consent.accept': 'Accept',
    'consent.decline': 'Decline',
    'consent.more': 'Privacy notice',
    'consent.settings': 'Cookie settings',
    'consent.blocked.map': 'The map is not loaded because you declined cookies.',
    'consent.load': 'Load it anyway',
    'nav.menu': 'Menu',

    'hero.tagline': 'Kendo is a traditional Japanese martial art. Bamboo swords, armour, and a great deal of noise.',
    'cta.try': 'Try Kendo',
    'cta.email': 'Email us',
    'cta.call': 'Call us',
    'try.title': 'Try Kendo',
    'try.lead': 'We organise beginner courses a few times per year, and it is always possible to come and watch a practice. Just email or call us first to check the schedule.',
    'cta.maps': 'Open in Google Maps',

    'facts.week': 'Sessions a week',
    'facts.week.note': 'Monday and Wednesday, 19:00 — 21:00',
    'facts.fee': 'EUR / month',
    'facts.fee.note': 'Membership. Kids and visiting club members 10 EUR',
    'facts.lang': 'Language',
    'facts.lang.note': 'English, Japanese commands, PT translation',

    'gallery.open': 'Open larger',
    'gallery.close': 'Close',
    'gallery.prev': 'Previous photo',
    'gallery.next': 'Next photo',
    'gallery.of': 'of',
    'gallery.hint': 'Click a photo to enlarge. Use the arrow keys to move between photos.',
    'map.title': 'Google map showing the location of the dojo',
    'contact.hours': 'Training hours',
    'contact.visit': 'Where to find us',
    'contact.reach': 'Get in touch',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',

    'days.mon': 'Monday', 'days.tue': 'Tuesday', 'days.wed': 'Wednesday',
    'days.thu-sun': 'Thursday — Sunday', 'days.closed': 'Closed',
    'footer.club': 'Club', 'footer.contact': 'Contact', 'footer.rights': 'All rights reserved',
    '404.title': 'Page not found',
    '404.lead': 'This page does not exist. It may have moved when the site was rebuilt.',
    '404.home': 'Back to the homepage',
  },
  pt: {
    'nav.what-is-kendo': 'O que é Kendo',
    'nav.beginner-course': 'Experimente',
    'nav.schedule': 'Horário',
    'nav.fees': 'Preços',
    'nav.gallery': 'Galeria',
    'nav.contact': 'Contacto',
    'nav.faq': 'FAQ',
    'nav.skip': 'Saltar para o conteúdo',
    'consent.title': 'Cookies neste site',
    'consent.body': 'Gostaríamos de carregar o Google Analytics e um mapa do Google. Ambos guardam cookies no seu navegador. O site funciona na íntegra sem eles.',
    'consent.accept': 'Aceitar',
    'consent.decline': 'Recusar',
    'consent.more': 'Política de privacidade',
    'consent.settings': 'Definições de cookies',
    'consent.blocked.map': 'O mapa não foi carregado porque recusou os cookies.',
    'consent.load': 'Carregar mesmo assim',
    'nav.menu': 'Menu',

    'hero.tagline': 'O Kendo é uma arte marcial japonesa tradicional. Espadas de bambu, armadura e muito barulho.',
    'cta.try': 'Experimente Kendo',
    'cta.email': 'Envie-nos email',
    'cta.call': 'Telefone-nos',
    'try.title': 'Experimente Kendo',
    'try.lead': 'Organizamos cursos para iniciantes algumas vezes por ano e é sempre possível vir assistir a um treino. Basta contactar-nos primeiro por email ou telefone para confirmar o horário.',
    'cta.maps': 'Abrir no Google Maps',

    'facts.week': 'Sessões por semana',
    'facts.week.note': 'Segunda e quarta-feira, 19:00 — 21:00',
    'facts.fee': 'EUR / mês',
    'facts.fee.note': 'Mensalidade. Crianças e membros de outros clubes 10 EUR',
    'facts.lang': 'Idioma',
    'facts.lang.note': 'Inglês, comandos em japonês, tradução PT',

    'gallery.open': 'Ver maior',
    'gallery.close': 'Fechar',
    'gallery.prev': 'Fotografia anterior',
    'gallery.next': 'Fotografia seguinte',
    'gallery.of': 'de',
    'gallery.hint': 'Clique numa fotografia para a ampliar. Use as setas para navegar.',
    'map.title': 'Mapa do Google com a localização do dojo',
    'contact.hours': 'Horário de treino',
    'contact.visit': 'Onde nos encontrar',
    'contact.reach': 'Fale connosco',
    'contact.phone': 'Telefone',
    'contact.email': 'Email',
    'contact.address': 'Morada',

    'days.mon': 'Segunda-feira', 'days.tue': 'Terça-feira', 'days.wed': 'Quarta-feira',
    'days.thu-sun': 'Quinta-feira — Domingo', 'days.closed': 'Encerrado',
    'footer.club': 'Clube', 'footer.contact': 'Contacto', 'footer.rights': 'Todos os direitos reservados',
    '404.title': 'Página não encontrada',
    '404.lead': 'Esta página não existe. Pode ter mudado de endereço na reconstrução do site.',
    '404.home': 'Voltar à página inicial',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui.en as Record<string, string>)[key];
  };
}
