export const languages = { en: 'English', pt: 'Português' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Prefiks wdrozenia: '' na wlasnej domenie, '/kendo-sintra' na adresie podgladowym. */
const SITE_BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');

/** Sciezka do tej samej strony w danym jezyku. EN siedzi na /, PT na /pt/. */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const langSeg = lang === defaultLang ? '' : `/${lang}`;
  return `${SITE_BASE}${langSeg}${clean ? `/${clean}` : ''}` || '/';
}

/** Slugi tras — te same w obu jezykach, zeby przelacznik jezyka byl 1:1. */
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
    'nav.menu': 'Menu',

    'hero.tagline': 'The Japanese art of the sword. Trained twice a week in Sintra, under a 6th dan sensei.',
    'hero.next-course': 'Next beginner course',
    'cta.signup': 'Sign up',
    'cta.watch': 'Come and watch',
    'cta.send': 'Send message',
    'cta.all-news': 'All news',
    'cta.read-more': 'Read more',
    'cta.maps': 'Open in Google Maps',

    'course.title': 'Beginner course III',
    'course.total': 'Total cost',
    'course.duration': 'Duration',
    'course.duration.value': '3 months · once a week',
    'course.shinai': 'Shinai',
    'course.shinai.value': 'Included, yours to keep',
    'course.lead': 'Three months, once a week, for adults with no experience. Taught in English with Japanese commands, translated to Portuguese.',

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
    'news.title': 'From the dojo',
    'contact.eyebrow': 'Get in touch',
    'contact.title': 'Sign up or ask',
    'contact.lead': 'Beginners are welcome at any time — you do not need equipment or experience to come and watch a class.',
    'contact.hours': 'Training hours',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.optional': '(optional)',
    'form.interest': 'I am interested in',
    'form.message': 'Message',
    'form.consent': 'I agree to Kendo Club Sintra storing these details in order to reply to me.',
    'form.privacy-link': 'privacy notice',
    'form.interest.course': 'Beginner course (16 Sept 2026)',
    'form.interest.adults': 'Adult classes',
    'form.interest.kids': 'Kids classes',
    'form.interest.visiting': 'Visiting from another club',

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
    'nav.menu': 'Menu',

    'hero.tagline': 'A arte japonesa da espada. Treinos duas vezes por semana em Sintra, com um sensei 6º dan.',
    'hero.next-course': 'Próximo curso para iniciantes',
    'cta.signup': 'Inscrever-me',
    'cta.watch': 'Venha assistir',
    'cta.send': 'Enviar mensagem',
    'cta.all-news': 'Todas as notícias',
    'cta.read-more': 'Ler mais',
    'cta.maps': 'Abrir no Google Maps',

    'course.title': 'Curso para iniciantes III',
    'course.total': 'Custo total',
    'course.duration': 'Duração',
    'course.duration.value': '3 meses · uma vez por semana',
    'course.shinai': 'Shinai',
    'course.shinai.value': 'Incluído, fica para si',
    'course.lead': 'Três meses, uma vez por semana, para adultos sem experiência. Aulas em inglês com comandos em japonês e tradução para português.',

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
    'news.title': 'Do dojo',
    'contact.eyebrow': 'Fale connosco',
    'contact.title': 'Inscreva-se ou pergunte',
    'contact.lead': 'Iniciantes são bem-vindos a qualquer altura — não precisa de equipamento nem de experiência para vir assistir a uma aula.',
    'contact.hours': 'Horário de treino',
    'form.name': 'Nome',
    'form.email': 'Email',
    'form.phone': 'Telefone',
    'form.optional': '(opcional)',
    'form.interest': 'Tenho interesse em',
    'form.message': 'Mensagem',
    'form.consent': 'Autorizo o Kendo Club Sintra a guardar estes dados para me responder.',
    'form.privacy-link': 'política de privacidade',
    'form.interest.course': 'Curso para iniciantes (16 set. 2026)',
    'form.interest.adults': 'Aulas para adultos',
    'form.interest.kids': 'Aulas para crianças',
    'form.interest.visiting': 'Visitante de outro clube',

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
