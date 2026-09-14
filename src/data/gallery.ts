/**
 * Gallery photo descriptions. Alt text is written by hand — text generated from
 * filenames is not accessibility; a screen reader would read out "aip 09".
 *
 * `faces: true` = an identifiable face of a minor is visible outside the men (mask).
 * See README, section "Likeness and minors".
 */
/**
 * Gallery categories. Adding one is two steps: a key here, and a label pair in
 * src/i18n/ui.ts under 'gallery.cat.<key>'. A category with no photos is not
 * rendered, so a key can be added before its photos are assigned.
 *
 * TODO (club): the competition set is currently one bucket. Confirm which event
 * (or events) those 44 photos are from, and which of them are the ambassador
 * visit, and they can be split out.
 */
export type Category = 'training' | 'competition';

export type Photo = { file: string; en: string; pt: string; faces?: true; cat: Category };

/** AiP Photography shoot, 2025-12-10 — everyone in bogu, faces behind masks. */
const aip: Photo[] = [
  { file: 'aip-09.jpg', en: 'Two kendoka sparring, one lunging forward with raised shinai', pt: 'Dois kendoka em combate, um avançando com o shinai erguido', cat: 'training' },
  { file: 'aip-10.jpg', en: 'Two kendoka in bogu facing each other, seen from behind', pt: 'Dois kendoka de bogu frente a frente, vistos por trás', cat: 'training' },
  { file: 'aip-12.jpg', en: 'The sports hall in Sintra with kendoka lined up in the distance', pt: 'O pavilhão em Sintra com os kendoka alinhados ao fundo', cat: 'training' },
  { file: 'aip-16.jpg', en: 'Close view of two kendoka with shinai raised to strike', pt: 'Vista próxima de dois kendoka com os shinai erguidos para golpear', cat: 'training' },
  { file: 'aip-22.jpg', en: 'Three kendoka with shinai crossed high above their heads', pt: 'Três kendoka com os shinai cruzados acima das cabeças', cat: 'training' },
  { file: 'aip-26.jpg', en: 'Two kendoka mid-strike, shinai overhead, seen from behind', pt: 'Dois kendoka a meio do golpe, shinai no alto, vistos por trás', cat: 'training' },
  { file: 'aip-28.jpg', en: 'Two kendoka facing off across the court', pt: 'Dois kendoka posicionados frente a frente no recinto', cat: 'training' },
  { file: 'aip-30.jpg', en: 'Close combat between two kendoka, one striking', pt: 'Combate próximo entre dois kendoka, um a golpear', cat: 'training' },
  { file: 'aip-31.jpg', en: 'Two kendoka in kamae, holding distance', pt: 'Dois kendoka em kamae, a manter a distância', cat: 'training' },
  { file: 'aip-33.jpg', en: 'Two kendoka close together, one delivering a strike', pt: 'Dois kendoka juntos, um a executar um golpe', cat: 'training' },
  { file: 'aip-38.jpg', en: 'Two kendoka on the court, one lunging into an attack', pt: 'Dois kendoka no recinto, um a avançar para o ataque', cat: 'training' },
  { file: 'aip-42.jpg', en: 'Three kendoka standing in line with shinai extended', pt: 'Três kendoka alinhados com os shinai estendidos', cat: 'training' },
  { file: 'aip-44.jpg', en: 'Two kendoka mid-strike over the centre circle', pt: 'Dois kendoka a meio do golpe sobre o círculo central', cat: 'training' },
  { file: 'aip-48.jpg', en: 'Group training in the hall, red and blue drapes overhead', pt: 'Treino de grupo no pavilhão, com as telas vermelhas e azuis no tecto', cat: 'training' },
  { file: 'aip-50.jpg', en: 'Four kendoka sparring, one dropping into a low stance', pt: 'Quatro kendoka em combate, um a baixar a guarda', cat: 'training' },
  { file: 'aip-52.jpg', en: 'Three kendoka with shinai crossed at close quarters', pt: 'Três kendoka com os shinai cruzados a curta distância', cat: 'training' },
  { file: 'aip-53.jpg', en: 'Several pairs training across the hall', pt: 'Vários pares a treinar ao longo do pavilhão', cat: 'training' },
  { file: 'aip-54.jpg', en: 'A kendoka in full bogu seen from behind, club name on the tare', pt: 'Um kendoka de bogu completo visto por trás, o nome do clube no tare', cat: 'training' },
  { file: 'aip-64.jpg', en: 'A kendoka raising the shinai overhead before a strike', pt: 'Um kendoka a erguer o shinai antes do golpe', cat: 'training' },
  { file: 'aip-65.jpg', en: 'Two kendoka lunging into an exchange', pt: 'Dois kendoka a avançar numa troca de golpes', cat: 'training' },
  { file: 'aip-73.jpg', en: 'Two kendoka with shinai locked high', pt: 'Dois kendoka com os shinai travados no alto', cat: 'training' },
  { file: 'aip-76.jpg', en: 'Two kendoka holding distance in kamae', pt: 'Dois kendoka a manter a distância em kamae', cat: 'training' },
  { file: 'aip-77.jpg', en: 'Bare feet and shinai on the wooden floor during a drill', pt: 'Pés descalços e shinai no soalho durante um exercício', cat: 'training' },
  { file: 'aip-79.jpg', en: 'A kendoka in men seen from behind, others training beyond', pt: 'Um kendoka de men visto por trás, outros a treinar ao fundo', cat: 'training' },
];

/** Competition, April 2025 — children and adults. */
const dojo: Photo[] = [
  { file: 'dojo-2103-1.jpg', en: 'Club group photo, kendoka seated and kneeling together', pt: 'Fotografia de grupo do clube, kendoka sentados e ajoelhados', faces: true, cat: 'competition' },
  { file: 'dojo-2103.jpg', en: 'Club group photo, young kendoka standing in bogu', pt: 'Fotografia de grupo, jovens kendoka de bogu', faces: true, cat: 'competition' },
  { file: 'dojo-2105-1.jpg', en: 'Two kendoka close together, shinai held upright', pt: 'Dois kendoka juntos, shinai na vertical', cat: 'competition' },
  { file: 'dojo-2105-2.jpg', en: 'A young kendoka raising the shinai during practice', pt: 'Um jovem kendoka a erguer o shinai durante o treino', cat: 'competition' },
  { file: 'dojo-2105-3.jpg', en: 'A young kendoka in profile, shinai in hand', pt: 'Uma jovem kendoka de perfil, shinai na mão', faces: true, cat: 'competition' },
  { file: 'dojo-2105.jpg', en: 'Kendoka spread across the training hall', pt: 'Kendoka espalhados pelo pavilhão de treino', cat: 'competition' },
  { file: 'dojo-2106-1.jpg', en: 'A sparring exchange during the competition', pt: 'Uma troca de golpes durante a competição', cat: 'competition' },
  { file: 'dojo-2106-2.jpg', en: 'Close view of a kendoka in bogu, club name on the tare', pt: 'Vista próxima de um kendoka de bogu, o nome do clube no tare', cat: 'competition' },
  { file: 'dojo-2107-1.jpg', en: 'Two kendoka sparring in front of the wall bars', pt: 'Dois kendoka em combate frente às espaldares', cat: 'competition' },
  { file: 'dojo-2107-2.jpg', en: 'A match in progress, a young kendoka kneeling at the side', pt: 'Um combate a decorrer, um jovem kendoka ajoelhado ao lado', cat: 'competition' },
  { file: 'dojo-2107-3.jpg', en: 'Two kendoka exchanging strikes', pt: 'Dois kendoka a trocar golpes', cat: 'competition' },
  { file: 'dojo-2108-1.jpg', en: 'Two kendoka in a close exchange', pt: 'Dois kendoka numa troca próxima', cat: 'competition' },
  { file: 'dojo-2108-2.jpg', en: 'An instructor watching a match from the side', pt: 'Um instrutor a observar um combate ao lado', cat: 'competition' },
  { file: 'dojo-2108-3.jpg', en: 'Several kendoka sparring at once', pt: 'Vários kendoka em combate ao mesmo tempo', cat: 'competition' },
  { file: 'dojo-2108.jpg', en: 'A kendoka in bogu beside the wall bars', pt: 'Um kendoka de bogu junto às espaldares', cat: 'competition' },
  { file: 'dojo-2109-1.jpg', en: 'Two kendoka pressed close in tsuba-zeriai', pt: 'Dois kendoka encostados em tsuba-zeriai', cat: 'competition' },
  { file: 'dojo-2109-2.jpg', en: 'A kendoka striking, climbing wall in the background', pt: 'Um kendoka a golpear, com a parede de escalada ao fundo', cat: 'competition' },
  { file: 'dojo-2109.jpg', en: 'A match watched by seated spectators', pt: 'Um combate observado por espectadores sentados', cat: 'competition' },
  { file: 'dojo-2110-1.jpg', en: 'Two young kendoka facing each other in bogu', pt: 'Dois jovens kendoka frente a frente, de bogu', cat: 'competition' },
  { file: 'dojo-2110-2.jpg', en: 'Two young club members smiling after their matches', pt: 'Dois jovens membros do clube a sorrir depois dos combates', faces: true, cat: 'competition' },
  { file: 'dojo-2110-3.jpg', en: 'Wide view of the competition hall with all competitors', pt: 'Vista ampla do pavilhão de competição com todos os participantes', cat: 'competition' },
  { file: 'dojo-2110.jpg', en: 'Kendoka moving through the hall between matches', pt: 'Kendoka a atravessar o pavilhão entre combates', cat: 'competition' },
  { file: 'dojo-2111-1.jpg', en: 'Team photo after the competition, medals and certificates', pt: 'Fotografia da equipa após a competição, com medalhas e diplomas', faces: true, cat: 'competition' },
  { file: 'dojo-2111-2.jpg', en: 'Two adult kendoka training together', pt: 'Dois kendoka adultos a treinar juntos', cat: 'competition' },
  { file: 'dojo-2111-3.jpg', en: 'A line of kendoka waiting their turn', pt: 'Uma fila de kendoka a aguardar a sua vez', cat: 'competition' },
  { file: 'dojo-2111.jpg', en: 'Team photo with the club members and their awards', pt: 'Fotografia da equipa com os membros do clube e os seus prémios', faces: true, cat: 'competition' },
  { file: 'dojo-2112-1.jpg', en: 'Kendoka seated in seiza with bogu laid out', pt: 'Kendoka sentados em seiza com o bogu disposto no chão', cat: 'competition' },
  { file: 'dojo-2112-2.jpg', en: 'Kendoka seated before the opening ceremony, seen from behind', pt: 'Kendoka sentados antes da cerimónia de abertura, vistos por trás', cat: 'competition' },
  { file: 'dojo-2112.jpg', en: 'Bogu lined up along the edge of the hall', pt: 'Bogu alinhado ao longo da borda do pavilhão', cat: 'competition' },
  { file: 'dojo-2113-1.jpg', en: 'Kendoka kneeling in seiza before practice', pt: 'Kendoka ajoelhados em seiza antes do treino', cat: 'competition' },
  { file: 'dojo-2114-1.jpg', en: 'The group seated together at the side of the hall', pt: 'O grupo sentado em conjunto ao lado do pavilhão', cat: 'competition' },
  { file: 'dojo-2114-2.jpg', en: 'Kendoka seated watching a match, seen from behind', pt: 'Kendoka sentados a ver um combate, vistos por trás', cat: 'competition' },
  { file: 'dojo-2114.jpg', en: 'Kendoka standing in line across the hall', pt: 'Kendoka em fila ao longo do pavilhão', cat: 'competition' },
  { file: 'dojo-2115-2.jpg', en: 'An instructor guiding young kendoka through a drill', pt: 'Um instrutor a orientar jovens kendoka num exercício', cat: 'competition' },
  { file: 'dojo-2115-3.jpg', en: 'Young kendoka lined up for practice', pt: 'Jovens kendoka alinhados para o treino', cat: 'competition' },
  { file: 'dojo-2115.jpg', en: 'Young club members during a break in training', pt: 'Jovens membros do clube durante uma pausa no treino', faces: true, cat: 'competition' },
  { file: 'dojo-2116-1.jpg', en: 'The group seated together in the hall', pt: 'O grupo sentado em conjunto no pavilhão', cat: 'competition' },
  { file: 'dojo-2116.jpg', en: 'Club team photo taken on the competition floor', pt: 'Fotografia da equipa do clube no recinto de competição', faces: true, cat: 'competition' },
  { file: 'dojo-2117-2.jpg', en: 'Two kendoka in a close exchange of strikes', pt: 'Dois kendoka numa troca próxima de golpes', cat: 'competition' },
  { file: 'dojo-2117-3.jpg', en: 'Wide view of the hall with many kendoka training', pt: 'Vista ampla do pavilhão com muitos kendoka a treinar', cat: 'competition' },
  { file: 'dojo-2117.jpg', en: 'Kendoka spread across the competition floor', pt: 'Kendoka espalhados pelo recinto de competição', cat: 'competition' },
  { file: 'dojo-2118-1.jpg', en: 'A club member and a young kendoka after the competition', pt: 'Uma membro do clube e um jovem kendoka após a competição', faces: true, cat: 'competition' },
  { file: 'dojo-2118.jpg', en: 'The empty hall before training begins', pt: 'O pavilhão vazio antes de o treino começar', cat: 'competition' },
  { file: 'dojo-2119.jpg', en: 'Full club team photo at the competition', pt: 'Fotografia completa da equipa do clube na competição', faces: true, cat: 'competition' },
];

export const photos: Photo[] = [...aip, ...dojo];
