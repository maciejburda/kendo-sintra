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
  'news',
  'faq',
  'contact',
  'privacy',
] as const;

export const ui = {
  en: {
    'nav.what-is-kendo': 'What is Kendo',
    'nav.beginner-course': 'Course',
    'nav.schedule': 'Schedule',
    'nav.fees': 'Fees',
    'nav.gallery': 'Gallery',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.privacy': 'Privacy',
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
    'hero.next-course': 'Next beginner course',
    'cta.signup': 'Sign up',
    'cta.watch': 'Come and watch',
    'cta.all-news': 'All news',
    'cta.maps': 'Open in Google Maps',

    'course.title': 'Beginner course III',
    'course.total': 'Total cost',
    'course.duration': 'Duration',
    'course.duration.value': '3 months · Wednesdays 19:00',
    'course.shinai': 'Shinai',
    'course.shinai.value': 'Included, yours to keep',
    'course.lead': 'Three months, Wednesdays from 19:00, for adults with no experience. Taught in English with Japanese commands, translated to Portuguese.',

    'facts.sensei': 'Dan sensei',
    'facts.sensei.note': 'Rogier van Bijnen, former Dutch national team',
    'facts.week': 'Per week',
    'facts.week.note': 'Monday and Wednesday, 19:00 — 21:00',
    'facts.fee': 'EUR / month',
    'facts.fee.note': 'Kids and visiting club members 10 EUR',
    'facts.lang': 'Language',
    'facts.lang.note': 'English, Japanese commands, PT translation',

    'gallery.open': 'Open larger',
    'gallery.close': 'Close',
    'gallery.prev': 'Previous photo',
    'gallery.next': 'Next photo',
    'gallery.of': 'of',
    'gallery.hint': 'Click a photo to enlarge. Use the arrow keys to move between photos.',
    'signup.lead': 'Fill in a short form and we will get back to you. No payment and no equipment needed to start.',
    'signup.cta': 'Sign up for the course',
    'signup.newtab': 'Opens a Google form in a new tab.',
    'signup.pending': 'Online sign-up is being set up. In the meantime, write to us and we will save you a place.',
    'signup.write': 'Email the club',
    'map.title': 'Google map showing the location of the dojo',
    'news.title': 'From the dojo',
    'contact.eyebrow': 'Get in touch',
    'contact.title': 'Sign up or ask',
    'contact.hours': 'Training hours',
    'venue.temp': 'We are training at CAISL',
    'venue.temp.body': 'Quinta da Beloura II is unavailable until the end of the year, so all training — including the beginner course — takes place at CAISL, Carlucci American International School of Lisbon.',
    'venue.temp.after': 'We move back to Quinta da Beloura II at the end of the year.',

    'days.mon': 'Monday', 'days.tue': 'Tuesday', 'days.wed': 'Wednesday',
    'days.thu-sun': 'Thursday — Sunday', 'days.closed': 'Closed',
    'footer.club': 'Club', 'footer.contact': 'Contact', 'footer.rights': 'All rights reserved',
    '404.title': 'Page not found',
    '404.lead': 'This page does not exist. It may have moved when the site was rebuilt.',
    '404.home': 'Back to the homepage',
  },
  pt: {
    'nav.what-is-kendo': 'O que é Kendo',
    'nav.beginner-course': 'Curso',
    'nav.schedule': 'Horário',
    'nav.fees': 'Preços',
    'nav.gallery': 'Galeria',
    'nav.news': 'Notícias',
    'nav.contact': 'Contacto',
    'nav.faq': 'FAQ',
    'nav.privacy': 'Privacidade',
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
    'hero.next-course': 'Próximo curso para iniciantes',
    'cta.signup': 'Inscrever-me',
    'cta.watch': 'Venha assistir',
    'cta.all-news': 'Todas as notícias',
    'cta.maps': 'Abrir no Google Maps',

    'course.title': 'Curso para iniciantes III',
    'course.total': 'Custo total',
    'course.duration': 'Duração',
    'course.duration.value': '3 meses · quartas-feiras 19:00',
    'course.shinai': 'Shinai',
    'course.shinai.value': 'Incluído, fica para si',
    'course.lead': 'Três meses, às quartas-feiras a partir das 19:00, para adultos sem experiência. Aulas em inglês com comandos em japonês e tradução para português.',

    'facts.sensei': 'Sensei, dan',
    'facts.sensei.note': 'Rogier van Bijnen, ex-selecção nacional dos Países Baixos',
    'facts.week': 'Por semana',
    'facts.week.note': 'Segunda e quarta-feira, 19:00 — 21:00',
    'facts.fee': 'EUR / mês',
    'facts.fee.note': 'Crianças e membros de outros clubes 10 EUR',
    'facts.lang': 'Idioma',
    'facts.lang.note': 'Inglês, comandos em japonês, tradução PT',

    'gallery.open': 'Ver maior',
    'gallery.close': 'Fechar',
    'gallery.prev': 'Fotografia anterior',
    'gallery.next': 'Fotografia seguinte',
    'gallery.of': 'de',
    'gallery.hint': 'Clique numa fotografia para a ampliar. Use as setas para navegar.',
    'signup.lead': 'Preencha um formulário curto e entraremos em contacto. Não é preciso pagamento nem equipamento para começar.',
    'signup.cta': 'Inscrever-me no curso',
    'signup.newtab': 'Abre um formulário Google num novo separador.',
    'signup.pending': 'A inscrição online está a ser preparada. Entretanto, escreva-nos e guardamos-lhe um lugar.',
    'signup.write': 'Escrever ao clube',
    'map.title': 'Mapa do Google com a localização do dojo',
    'news.title': 'Do dojo',
    'contact.eyebrow': 'Fale connosco',
    'contact.title': 'Inscreva-se ou pergunte',
    'contact.hours': 'Horário de treino',
    'venue.temp': 'Estamos a treinar no CAISL',
    'venue.temp.body': 'A Quinta da Beloura II está indisponível até ao final do ano, pelo que todos os treinos — incluindo o curso para iniciantes — decorrem no CAISL, Carlucci American International School of Lisbon.',
    'venue.temp.after': 'Regressamos à Quinta da Beloura II no final do ano.',

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
