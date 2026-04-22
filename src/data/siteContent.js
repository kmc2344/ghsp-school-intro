export const siteMeta = {
  title: '神山まるごと高専 | Wild Signals for New Makers',
  description:
    '神山まるごと高専の世界観、学校概要、カリキュラム、学生生活を大胆なビジュアルで紹介する1ページサイト。',
  ogTitle: '神山まるごと高専 | Wild Signals for New Makers',
  ogDescription:
    'テクノロジー、デザイン、地域実践を横断しながら未来の輪郭を自分でつくるための学校紹介ページ。',
};

export const navigationItems = [
  { label: 'Top', href: '#top' },
  { label: '学校概要', href: '#overview' },
  { label: 'カリキュラム', href: '#curriculum' },
  { label: '学生生活', href: '#life' },
];

export const heroContent = {
  eyebrow: 'Kamiyama Whole College / Prototype Page',
  title: '神山まるごと高専',
  lead: '未来を待つのではなく、未来の側へ踏み込むための学校。',
  summary:
    '神山まるごと高専は、テクノロジー、デザイン、地域との接続を横断しながら、手を動かして価値を立ち上げる感覚を育てるための実験的な学びの場です。',
  actions: [
    { label: 'カリキュラムを見る', href: '#curriculum', kind: 'primary' },
    { label: '学校概要へ進む', href: '#overview', kind: 'secondary' },
  ],
  stickers: [
    'Prototype Everything',
    'Tech x Design x Region',
    'No Official Assets Yet',
  ],
  signalCards: [
    {
      label: 'Vision',
      title: '学ぶ場所ではなく、つくりながら学びを再定義する場所。',
      body: '座学だけで終わらず、試作、検証、発表まで含めて自分の中に回路をつくっていく。',
    },
    {
      label: 'Mode',
      title: '高密度の刺激と、手触りのある実践。',
      body: '抽象と現場、ソフトウェアと表現、個人制作とチーム開発を行き来する。',
    },
  ],
};

export const overviewSection = {
  id: 'overview',
  label: '学校概要',
  heading: '輪郭のはっきりした学校紹介ではなく、進路の解像度を上げるための導入口。',
  text:
    'このページは正式資料の代替ではなく、神山まるごと高専という場が持つ空気感や学びの方向性を先に体感してもらうための仮設プロトタイプです。あとから公式文言、写真、ロゴへ差し替えやすいよう、情報と装飾は分離して設計しています。',
  facts: [
    { value: '1', label: 'ページ構成', note: 'トップから学生生活まで縦に接続' },
    { value: '3', label: '学びの軸', note: '技術 / デザイン / 地域実践' },
    { value: '100%', label: '差し替え前提', note: '文言とビジュアルを後続更新しやすく整理' },
  ],
  bullets: [
    '公式素材が未提供でも公開を始められるよう、SVGとCSSで装飾を内製。',
    '本文は可読性を優先しつつ、見出しと背景で強い熱量を出す構成。',
    '各セクションはデータ定義から差し替え可能で、HTML構造の修正を最小化。',
  ],
};

export const curriculumSection = {
  id: 'curriculum',
  label: 'カリキュラム',
  heading: '技術だけでも、デザインだけでも足りない。越境の回数を増やすための編成。',
  intro:
    '学びを単一科目の列としてではなく、つくる力を立ち上げるための連動した経験として見せる想定です。ここでは仮の紹介項目として、後から正式情報へ差し替えやすい粒度で整理しています。',
  tracks: [
    {
      title: 'Foundation Burst',
      subtitle: '基礎を圧縮しながら広く掴む。',
      items: ['プログラミング基礎', '情報設計の考え方', '観察とリサーチ', 'プレゼンテーション'],
    },
    {
      title: 'Project Studio',
      subtitle: 'チームで実装し、つくったものを外へ出す。',
      items: ['プロトタイピング', 'UI / UX 設計', 'サービス企画', 'レビューと改善サイクル'],
    },
    {
      title: 'Regional Interface',
      subtitle: '地域と接点を持ち、実践を現実へ接続する。',
      items: ['フィールドワーク', '地域課題の読解', '協働プロジェクト', '発表とアーカイブ'],
    },
  ],
  ticker: ['Technology', 'Design', 'Culture', 'Research', 'Prototype', 'Launch'],
};

export const lifeSection = {
  id: 'life',
  label: '学生生活',
  heading: '静かな学校生活ではなく、刺激の密度が高い日常を想定する。',
  intro:
    '寮、制作、対話、地域、イベント、締切。学生生活は授業外まで含めて学びの延長線上にあります。ここでは正式写真の代わりに抽象ビジュアルを配置し、後から実画像へ差し替えやすい構成にしています。',
  cards: [
    {
      title: 'Living Rhythm',
      copy: '生活と制作が離れすぎない。思いついたらすぐ試せる距離感をつくる。',
    },
    {
      title: 'Peer Feedback',
      copy: '作品やアイデアを途中段階から見せ合い、対話を回し続ける。',
    },
    {
      title: 'Open Atmosphere',
      copy: '学年や専門の境界を固定化せず、混ざることで視点を増やしていく。',
    },
  ],
  gallery: [
    {
      alt: '抽象的なグラデーションと格子で構成したダミービジュアル',
      src: '/dummy-wave.svg',
      caption: 'Photo Slot A / 実画像が届いたら差し替え',
    },
    {
      alt: '立体的な図形で構成したダミービジュアル',
      src: '/dummy-grid.svg',
      caption: 'Photo Slot B / SVG のままでも運用可能',
    },
  ],
};

export const footerNotes = [
  'このページの文言とビジュアルは初回公開用の仮素材です。',
  '公式ロゴ、正式写真、正式紹介文は後から差し替える想定です。',
  'GitHub Pages 向けの静的出力と base 設定を前提に構成しています。',
];
export const siteMeta = {
  title: '神山まるごと高専 | Wild Signals for New Makers',
  description:
    '神山まるごと高専の世界観、学校概要、カリキュラム、学生生活を大胆なビジュアルで紹介する1ページサイト。',
  ogTitle: '神山まるごと高専 | Wild Signals for New Makers',
  ogDescription:
    'テクノロジー、デザイン、地域実践を横断しながら未来の輪郭を自分でつくるための学校紹介ページ。',
};

export const navigationItems = [
  { label: 'Top', href: '#top' },
  { label: '学校概要', href: '#overview' },
  { label: 'カリキュラム', href: '#curriculum' },
  { label: '学生生活', href: '#life' },
];

export const heroContent = {
  eyebrow: 'Kamiyama Whole College / Prototype Page',
  title: '神山まるごと高専',
  lead: '未来を待つのではなく、未来の側へ踏み込むための学校。',
  summary:
    '神山まるごと高専は、テクノロジー、デザイン、地域との接続を横断しながら、手を動かして価値を立ち上げる感覚を育てるための実験的な学びの場です。',
  actions: [
    { label: 'カリキュラムを見る', href: '#curriculum', kind: 'primary' },
    { label: '学校概要へ進む', href: '#overview', kind: 'secondary' },
  ],
  stickers: [
    'Prototype Everything',
    'Tech x Design x Region',
    'No Official Assets Yet',
  ],
  signalCards: [
    {
      label: 'Vision',
      title: '学ぶ場所ではなく、つくりながら学びを再定義する場所。',
      body: '座学だけで終わらず、試作、検証、発表まで含めて自分の中に回路をつくっていく。',
    },
    {
      label: 'Mode',
      title: '高密度の刺激と、手触りのある実践。',
      body: '抽象と現場、ソフトウェアと表現、個人制作とチーム開発を行き来する。',
    },
  ],
};

export const overviewSection = {
  id: 'overview',
  label: '学校概要',
  heading: '輪郭のはっきりした学校紹介ではなく、進路の解像度を上げるための導入口。',
  text:
    'このページは正式資料の代替ではなく、神山まるごと高専という場が持つ空気感や学びの方向性を先に体感してもらうための仮設プロトタイプです。あとから公式文言、写真、ロゴへ差し替えやすいよう、情報と装飾は分離して設計しています。',
  facts: [
    { value: '1', label: 'ページ構成', note: 'トップから学生生活まで縦に接続' },
    { value: '3', label: '学びの軸', note: '技術 / デザイン / 地域実践' },
    { value: '100%', label: '差し替え前提', note: '文言とビジュアルを後続更新しやすく整理' },
  ],
  bullets: [
    '公式素材が未提供でも公開を始められるよう、SVGとCSSで装飾を内製。',
    '本文は可読性を優先しつつ、見出しと背景で強い熱量を出す構成。',
    '各セクションはデータ定義から差し替え可能で、HTML構造の修正を最小化。',
  ],
};

export const curriculumSection = {
  id: 'curriculum',
  label: 'カリキュラム',
  heading: '技術だけでも、デザインだけでも足りない。越境の回数を増やすための編成。',
  intro:
    '学びを単一科目の列としてではなく、つくる力を立ち上げるための連動した経験として見せる想定です。ここでは仮の紹介項目として、後から正式情報へ差し替えやすい粒度で整理しています。',
  tracks: [
    {
      title: 'Foundation Burst',
      subtitle: '基礎を圧縮しながら広く掴む。',
      items: ['プログラミング基礎', '情報設計の考え方', '観察とリサーチ', 'プレゼンテーション'],
    },
    {
      title: 'Project Studio',
      subtitle: 'チームで実装し、つくったものを外へ出す。',
      items: ['プロトタイピング', 'UI / UX 設計', 'サービス企画', 'レビューと改善サイクル'],
    },
    {
      title: 'Regional Interface',
      subtitle: '地域と接点を持ち、実践を現実へ接続する。',
      items: ['フィールドワーク', '地域課題の読解', '協働プロジェクト', '発表とアーカイブ'],
    },
  ],
  ticker: ['Technology', 'Design', 'Culture', 'Research', 'Prototype', 'Launch'],
};

export const lifeSection = {
  id: 'life',
  label: '学生生活',
  heading: '静かな学校生活ではなく、刺激の密度が高い日常を想定する。',
  intro:
    '寮、制作、対話、地域、イベント、締切。学生生活は授業外まで含めて学びの延長線上にあります。ここでは正式写真の代わりに抽象ビジュアルを配置し、後から実画像へ差し替えやすい構成にしています。',
  cards: [
    {
      title: 'Living Rhythm',
      copy: '生活と制作が離れすぎない。思いついたらすぐ試せる距離感をつくる。',
    },
    {
      title: 'Peer Feedback',
      copy: '作品やアイデアを途中段階から見せ合い、対話を回し続ける。',
    },
    {
      title: 'Open Atmosphere',
      copy: '学年や専門の境界を固定化せず、混ざることで視点を増やしていく。',
    },
  ],
  gallery: [
    {
      alt: '抽象的なグラデーションと格子で構成したダミービジュアル',
      src: '/dummy-wave.svg',
      caption: 'Photo Slot A / 実画像が届いたら差し替え',
    },
    {
      alt: '立体的な図形で構成したダミービジュアル',
      src: '/dummy-grid.svg',
      caption: 'Photo Slot B / SVG のままでも運用可能',
    },
  ],
};

export const footerNotes = [
  'このページの文言とビジュアルは初回公開用の仮素材です。',
  '公式ロゴ、正式写真、正式紹介文は後から差し替える想定です。',
  'GitHub Pages 向けの静的出力と base 設定を前提に構成しています。',
];
