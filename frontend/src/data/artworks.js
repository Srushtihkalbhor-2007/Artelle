/**
 * ARTWORKS DATA
 * -------------
 * This is the ONLY file you need to touch to add a new painting.
 *
 * How to add a new artwork:
 *  1. Copy your image into  public/artworks/  (e.g. public/artworks/my-new-piece.jpg)
 *  2. Add a new object to the array below with a unique `id`.
 *
 * The Home page automatically shows the first 3 artworks.
 * The Gallery page automatically shows all of them.
 * The Collections page automatically groups them by the `collection` field.
 * Nothing else needs to change.
 */

export const artworks = [
  {
    id: 'sunlit-field',
    title: 'Sunlit Field',
    image: '/artworks/sunlit-field.svg',
    caption: 'a bouquet caught mid-morning light',
    description: 'Warm sunflowers rendered in loose, confident strokes, catching the first light of the morning.',
    story:
      "I painted this the week I moved into my first studio. The window faced east, and every morning the light would fall exactly like this across my desk.",
    year: 2023,
    medium: 'Digital Painting',
    collection: 'Nature',
  },
  {
    id: 'quiet-bloom',
    title: 'Quiet Bloom',
    image: '/artworks/quiet-bloom.svg',
    caption: 'a single flower, unhurried',
    description: 'A study in patience — one small bloom given all the space on the page.',
    story:
      'Some days the most honest thing I can paint is one flower, slowly, without trying to fill the whole canvas.',
    year: 2023,
    medium: 'Watercolor',
    collection: 'Watercolor',
  },
  {
    id: 'butterfly-drift',
    title: 'Butterfly Drift',
    image: '/artworks/butterfly-drift.svg',
    caption: 'blue wings, mid-flight',
    description: 'A cobalt butterfly suspended mid-flutter, wings caught between open and closed.',
    story: 'I keep coming back to butterflies — they feel like little proof that soft things can still move fast.',
    year: 2024,
    medium: 'Digital Painting',
    collection: 'Nature',
  },
  {
    id: 'chai-and-thoughts',
    title: 'Chai & Thoughts',
    image: '/artworks/chai-and-thoughts.svg',
    caption: 'a cup, a window, a Tuesday',
    description: 'A quiet still life of a chai cup on a windowsill, painted from a real Tuesday afternoon.',
    story: 'This is almost exactly my desk. I painted it because I wanted to remember this particular kind of ordinary.',
    year: 2022,
    medium: 'Gouache',
    collection: 'Sketches',
  },
  {
    id: 'paper-portrait-no1',
    title: 'Paper Portrait No. 1',
    image: '/artworks/paper-portrait-no1.svg',
    caption: 'a face made of soft lines',
    description: 'The first in an ongoing series of gentle, unfinished-feeling portraits.',
    story: "I never plan these faces. I just start with an eye and let the rest follow.",
    year: 2022,
    medium: 'Ink & Watercolor',
    collection: 'Portraits',
  },
  {
    id: 'paper-portrait-no2',
    title: 'Paper Portrait No. 2',
    image: '/artworks/paper-portrait-no2.svg',
    caption: 'the second, a little braver',
    description: 'A companion piece to Paper Portrait No. 1, with slightly bolder linework.',
    story: 'By the second portrait I stopped being afraid of getting the nose wrong.',
    year: 2022,
    medium: 'Ink & Watercolor',
    collection: 'Portraits',
  },
  {
    id: 'evening-garden',
    title: 'Evening Garden',
    image: '/artworks/evening-garden.svg',
    caption: 'dusk settling over the leaves',
    description: 'Cooler tones and longer shadows — a garden just before the light goes.',
    story: 'Dusk is my favourite hour to paint outdoors, when the colours go a little unreliable.',
    year: 2024,
    medium: 'Acrylic',
    collection: 'Acrylic',
  },
  {
    id: 'sketchbook-fragment',
    title: 'Sketchbook Fragment',
    image: '/artworks/sketchbook-fragment.svg',
    caption: 'a page I almost didn\u2019t keep',
    description: 'An unfinished page from my sketchbook, kept exactly as it was.',
    story: 'I almost tore this page out. I\u2019m glad I didn\u2019t.',
    year: 2021,
    medium: 'Graphite',
    collection: 'Sketches',
  },
  {
    id: 'terracotta-still-life',
    title: 'Terracotta Still Life',
    image: '/artworks/terracotta-still-life.svg',
    caption: 'clay pots, warm light',
    description: 'A still life built entirely around one warm terracotta pot and the shadow it casts.',
    story: 'I collect little clay pots from every place I visit. This one is from a market near my grandmother\u2019s house.',
    year: 2023,
    medium: 'Acrylic',
    collection: 'Acrylic',
  },
  {
    id: 'moth-study',
    title: 'Moth Study',
    image: '/artworks/moth-study.svg',
    caption: 'night wings, quiet patterns',
    description: 'A close study of a moth\u2019s wing pattern, painted slower than I paint anything else.',
    story: 'Moths get less love than butterflies. I wanted to give one a proper portrait.',
    year: 2024,
    medium: 'Watercolor',
    collection: 'Watercolor',
  },
  {
    id: 'digital-dreamscape',
    title: 'Digital Dreamscape',
    image: '/artworks/digital-dreamscape.svg',
    caption: 'a landscape that isn\u2019t quite real',
    description: 'An experiment in painting entirely on-screen — softer edges, impossible colours.',
    story: 'My first real attempt at trusting a tablet as much as I trust paper.',
    year: 2025,
    medium: 'Digital Painting',
    collection: 'Digital',
  },
  {
    id: 'wildflower-page',
    title: 'Wildflower Page',
    image: '/artworks/wildflower-page.svg',
    caption: 'pressed flowers, remembered',
    description: 'A scattered arrangement of small wildflowers, like a page from a pressed-flower journal.',
    story: 'Every flower here is one I actually pressed between the pages of an old book.',
    year: 2023,
    medium: 'Watercolor',
    collection: 'Nature',
  },
];

// Convenience: unique, ordered list of collection names derived from the data above
export const collectionNames = [...new Set(artworks.map((a) => a.collection))];
