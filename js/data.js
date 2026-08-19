/* ============================================================
   WORKS — the archive loaded into the machine.

   Order is Akif's, not by play count. The OPRAPTI short film sits LAST;
   everything before it is a reel.

   `vid`      a 6s muted loop shown on the PSP screen, trimmed from 0.5s so no
              clip opens on black. Fetched only when its slot is selected, so
              first paint never waits on video — `img` is the poster and it is
              pulled from the clip itself, so the still and the motion match.
   `vertical` read off the actual file, never guessed.
   ============================================================ */
window.SK_WORKS = [
  {
    id: 'Reel1',
    title: 'OPRAPTI',
    sub: 'In honour of the premiere',
    kind: 'REEL',
    year: '2026',
    meta: 'REEL · 365K PLAYS · INSTAGRAM',
    img: 'assets/works/img1.jpg',
    vid: 'assets/reels/Reel1.mp4',
    link: 'https://www.instagram.com/reel/DWZaZOlkxNI/',
    vertical: false,
    featured: true
  },
  {
    id: 'Reel2',
    title: 'OPRAPTI Is Live',
    sub: 'Now streaming on YouTube',
    kind: 'REEL',
    year: '2026',
    meta: 'REEL · 50K PLAYS · INSTAGRAM',
    img: 'assets/works/img2.jpg',
    vid: 'assets/reels/Reel2.mp4',
    link: 'https://www.instagram.com/reel/DWx_-r9ESDo/',
    vertical: false
  },
  {
    id: 'reel3',
    title: 'The Dark Beckons',
    sub: 'Will you answer?',
    kind: 'REEL',
    year: '2025',
    meta: 'REEL · 33K PLAYS · INSTAGRAM',
    img: 'assets/works/img3.jpg',
    vid: 'assets/reels/reel3.mp4',
    link: 'https://www.instagram.com/reel/DLFf20JTonw/',
    vertical: false
  },
  {
    id: 'Reel4',
    title: 'BABYDOLL',
    sub: 'Dir. shutterkif · DOP Angan Sarker',
    kind: 'REEL',
    year: '2026',
    meta: 'REEL · 28K PLAYS · INSTAGRAM',
    img: 'assets/works/img4.jpg',
    vid: 'assets/reels/Reel4.mp4',
    link: 'https://www.instagram.com/reel/DU6DxLykpcI/',
    vertical: false
  },
  {
    id: 'Reel5',
    title: 'Active Hours',
    sub: "I don't post during active hours",
    kind: 'REEL',
    year: '2026',
    meta: 'REEL · 23K PLAYS · INSTAGRAM',
    img: 'assets/works/img5.jpg',
    vid: 'assets/reels/Reel5.mp4',
    link: 'https://www.instagram.com/reel/DXkJtAdk8zE/',
    vertical: false
  },
  {
    id: 'DZa0pdCyD5W',
    title: 'Copa Chowtrish Cup',
    sub: 'Habitrain presents',
    kind: 'REEL',
    year: '2026',
    meta: 'REEL · 18K PLAYS · INSTAGRAM',
    img: 'assets/works/DZa0pdCyD5W.jpg',
    vid: 'assets/reels/DZa0pdCyD5W.mp4',
    link: 'https://www.instagram.com/reel/DZa0pdCyD5W/',
    vertical: false
  }
];
