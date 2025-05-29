// メニューの型
export type MenuType = {
  id?: string; // メニューのID
  // idは自動生成されるので、オプショナルにしておく
  name: string;
  description: string;
  price: number;
  category: CategoryType;
  isSeasonal?: boolean;
  options?: OptionType[];
  img?: string; // 画像のURL
  // 画像のURLも自動生成されるのでオプショナルにしておく
};

// メニューのオプションの型
export type OptionType =
  | "temperature" // 温度(hot/cold)
  | "size" // サイズ(s/m/l)
  | "sugar" // 砂糖の量
  | "milk" // ミルクの量
  | "cream" // クリームの量
  | "sweetener" // 甘さ
  | "topping"; // トッピング

// カテゴリーの型
export type CategoryType = "coffee" | "tea" | "sweets";

const coffeeOptions: OptionType[] = ["size", "sugar", "milk"];
const teaOptions: OptionType[] = ["temperature", "size", "sweetener"];
const sweetsOptions: OptionType[] = ["topping", "sweetener"];

export type MenuID =
  // コーヒー
  | "espresso"
  | "americano"
  | "cafe_latte"
  | "cappuccino"
  | "caramel_macchiato"
  | "cafe_mocha"
  | "vanilla_latte"
  | "hazelnut_latte"
  | "irish_coffee"
  | "vienna_coffee"
  | "affogato"
  | "flat_white"
  | "cortado"
  | "doppio"
  | "nitro_cold_brew"
  | "iced_coffee"
  | "decaf_coffee"

  // 茶
  | "lemon_tea"
  | "straight_tea"
  | "sencha"
  | "hojicha"
  | "genmaicha"
  | "matcha_latte"
  | "gyokuro"

  // スイーツ
  | "yokan"
  | "ichigo_daifuku"
  | "sakura_mochi"
  | "hot_choco_parfait"
  | "hotcakes"
  | "daifuku"
  | "mont_blanc"
  | "monaka"
  | "chisato_special"
  | "nama_chocolate"
  | "shortcake"
  | "kakigori"
  | "fruit_parfait"
  | "cheesecake"
  | "dorayaki_burger"
  | "mame_daifuku"
  | "sanshoku_dango"
  | "lemon_cheesecake"
  | "ohagi"
  | "kuri_yokan";

// メニュー(IDで指定するためIDそのものはついていない)
const MenuRecordRow: Record<MenuID, MenuType> = {
  espresso: {
    name: "エスプレッソ",
    description:
      "濃厚で芳醇な香りが特徴のエスプレッソは、厳選された豆を高圧で抽出し、短時間で深いコクを生み出します。少量ながらも味わいは非常に力強く、コーヒー本来の旨味と苦味をしっかりと楽しめる一杯です。朝の目覚めや集中したい時に最適です。",
    price: 320,
    category: "coffee",
    options: coffeeOptions,
  },
  americano: {
    name: "アメリカーノ",
    description:
      "エスプレッソをお湯で割ることで、すっきりとした飲み口に仕上げたアメリカーノ。エスプレッソのコクはそのままに、軽やかな後味が特徴です。飲みやすさと深みを両立させた一杯で、コーヒー初心者にもおすすめのメニューです。",
    price: 350,
    category: "coffee",
    options: coffeeOptions,
  },
  cafe_latte: {
    name: "カフェラテ",
    description:
      "エスプレッソにたっぷりのスチームミルクを加えたカフェラテは、まろやかな味わいが魅力です。ミルクの甘さとコーヒーの苦味が絶妙に調和し、やさしい口当たりに仕上がっています。リラックスタイムにぴったりの定番ドリンクです。",
    price: 400,
    category: "coffee",
    options: coffeeOptions,
  },
  cappuccino: {
    name: "カプチーノ",
    description:
      "エスプレッソにスチームミルクとミルクフォームをバランス良く加えたカプチーノは、クリーミーな泡と香ばしい香りが楽しめる一杯。フォームの口当たりとコーヒーの苦味が調和し、軽やかながらも満足感のある仕上がりです。",
    price: 420,
    category: "coffee",
    options: coffeeOptions,
    isSeasonal: true,
  },
  caramel_macchiato: {
    name: "カフェモカ",
    description:
      "チョコレートの甘さとエスプレッソの苦味が絶妙に融合したカフェモカは、デザート感覚で楽しめる人気メニューです。スチームミルクが全体をやさしく包み込み、ホイップクリームをトッピングすればさらに贅沢な一杯に。",
    price: 470,
    category: "coffee",
    options: [...coffeeOptions, "cream"],
  },
  cafe_mocha: {
    name: "キャラメルラテ",
    description:
      "とろけるようなキャラメルソースを加えたカフェラテ。甘さの中にもコーヒーのコクがしっかり感じられ、デザート感覚でも楽しめます。ホイップクリームの追加や、甘さの調整で自分好みにカスタマイズ可能です。",
    price: 480,
    category: "coffee",
    options: [...coffeeOptions, "cream", "sweetener"],
  },
  vanilla_latte: {
    name: "バニララテ",
    description:
      "バニラシロップの甘く優しい香りが広がるバニララテは、ミルクとの相性も抜群で、口当たりも滑らか。飲みやすく、カフェタイムをより一層リラックスさせてくれる一杯です。甘さの調整も可能です。",
    price: 460,
    category: "coffee",
    options: [...coffeeOptions, "sweetener"],
  },
  hazelnut_latte: {
    name: "ヘーゼルナッツラテ",
    description: "ヘーゼルナッツの香ばしい風味が特徴のラテです。",
    price: 480,
    category: "coffee",
    options: [...coffeeOptions, "sweetener"],
    isSeasonal: true,
  },
  irish_coffee: {
    name: "アイリッシュコーヒー",
    description:
      "アイリッシュウイスキーを使用した、体が温まるコーヒーカクテルです。",
    price: 600,
    category: "coffee",
    options: ["cream"],
  },
  vienna_coffee: {
    name: "ウインナーコーヒー",
    description:
      "ホットコーヒーにたっぷりのホイップクリームをのせたウインナーコーヒーは、まろやかな甘さとコーヒーの苦味が絶妙にマッチした一杯。クリームの滑らかさが口の中に広がり、贅沢なひとときを演出します。",
    price: 460,
    category: "coffee",
    options: [...coffeeOptions, "cream"],
  },
  affogato: {
    name: "アフォガート",
    description:
      "濃厚なエスプレッソをバニラアイスにかけて楽しむアフォガートは、温かさと冷たさ、苦味と甘味のコントラストが絶妙なスイーツ系ドリンク。食後のデザートとしてもおすすめです。",
    price: 500,
    category: "coffee",
    options: [...coffeeOptions, "topping"],
  },
  flat_white: {
    name: "フラットホワイト",
    description:
      "エスプレッソに少量のスチームミルクを加えたフラットホワイトは、ミルクの滑らかさとコーヒーの力強さをバランス良く味わえる一杯です。ラテよりも濃厚で、クリーミーな口当たりが特徴です。コーヒー通にもおすすめです。",
    price: 430,
    category: "coffee",
    options: coffeeOptions,
  },
  cortado: {
    name: "コルタード",
    description:
      "エスプレッソとスチームミルクを1:1の割合で合わせたコルタードは、しっかりとしたコーヒー感を楽しみつつ、ミルクで角を取ったまろやかな味わい。小さめのカップで提供され、濃密な時間を楽しめます。",
    price: 390,
    category: "coffee",
    options: coffeeOptions,
  },
  doppio: {
    name: "ドッピオ",
    description:
      "エスプレッソのダブルショットです。より濃厚なコーヒーの風味を楽しめます。",
    price: 350,
    category: "coffee",
    options: coffeeOptions,
  },
  nitro_cold_brew: {
    name: "ナイトロコールドブリュー",
    description:
      "窒素を加えることで、まるでビールのようななめらかな泡と口当たりを実現したナイトロコールドブリュー。見た目も美しく、微細な泡が香りと味を閉じ込め、コーヒーの深い味わいをゆっくり楽しめます。",
    price: 520,
    category: "coffee",
    options: [...coffeeOptions, "temperature"],
  },
  iced_coffee: {
    name: "アイスコーヒー",
    description:
      "深煎り豆を使用し、キリッとした苦味とスッキリとした後味が特徴のアイスコーヒー。冷たく爽やかで、暑い季節にぴったりなドリンクです。甘さやミルクの量を調整して、お好みの味に仕上げることができます。",
    price: 360,
    category: "coffee",
    options: [...coffeeOptions, "temperature"],
  },
  decaf_coffee: {
    name: "デカフェコーヒー",
    description:
      "カフェインを取り除いたコーヒーです。カフェインを控えたい方におすすめです。",
    price: 380,
    category: "coffee",
    options: coffeeOptions,
  },

  // 茶
  lemon_tea: {
    name: "レモンティー",
    description:
      "爽やかな香りと酸味が特徴のレモンティーは、紅茶の渋みとレモンの爽快さが絶妙に調和した一杯です。ホットでもアイスでも楽しめ、リフレッシュしたい時や食後の口直しにぴったり。甘さを加えることで、よりマイルドな味わいにも調整可能です。",
    price: 400,
    category: "tea",
    options: teaOptions,
    isSeasonal: true,
  },
  straight_tea: {
    name: "ストレートティー",
    description:
      "茶葉本来の香りと味わいをじっくり楽しめるストレートティー。クセがなくすっきりとした飲み口で、食事やスイーツとも相性抜群。甘みを加えることで、自分好みに調整可能です。シンプルながらも奥深い一杯です。",
    price: 380,
    category: "tea",
    options: teaOptions,
  },
  sencha: {
    name: "煎茶",
    description:
      "日本の伝統的なお茶である煎茶は、爽やかな渋みと香りが特徴。温かい煎茶は心を落ち着かせ、冷たい煎茶はスッキリとした後味が楽しめます。食事中やリラックスタイムにぴったりの一杯です。",
    price: 500,
    category: "tea",
    options: teaOptions,
  },
  hojicha: {
    name: "ほうじ茶",
    description:
      "茶葉を焙煎することで生まれる香ばしさが特徴のほうじ茶。苦味が少なく、口当たりがまろやかで、温かくして飲むと特に香りが引き立ちます。リラックスタイムや就寝前にもおすすめの一杯です。",
    price: 390,
    category: "tea",
    options: teaOptions,
    isSeasonal: true,
  },
  genmaicha: {
    name: "玄米茶",
    description:
      "炒った玄米の香ばしさが広がる玄米茶は、煎茶の爽やかさと絶妙にマッチ。すっきりとした飲み口ながら、香り高く心が落ち着く味わいです。和菓子や軽食とも相性が良く、幅広いシーンで楽しめます。",
    price: 390,
    category: "tea",
    options: teaOptions,
    isSeasonal: true,
  },
  matcha_latte: {
    name: "抹茶ラテ",
    description:
      "濃厚な抹茶とミルクのまろやかさが融合した抹茶ラテは、やさしい甘みと奥深い苦味が楽しめる一杯。リラックスしたいときや、スイーツとの相性も抜群。アイスでもホットでも美味しくいただけます。",
    price: 460,
    category: "tea",
    options: [...teaOptions, "milk"],
  },
  gyokuro: {
    name: "玉露",
    description:
      "日本茶の中でも最高級品の一つ。独特の旨味と香り、甘みが特徴です。",
    price: 550,
    category: "tea",
    options: ["temperature", "size"],
    isSeasonal: true,
  },

  // スイーツ
  yokan: {
    name: "羊羹",
    description:
      "練り上げた小豆を寒天で固めた羊羹は、しっかりとした甘さと滑らかな口当たりが特徴。日本茶との相性も抜群で、古くから親しまれてきた和菓子です。切り分けやすく見た目も上品なため、贈り物やお茶請けにも最適です。",
    price: 320,
    category: "sweets",
    options: sweetsOptions,
  },
  ichigo_daifuku: {
    name: "イチゴ大福",
    description:
      "もっちりとした求肥の中に甘酸っぱいイチゴとあんこを包んだイチゴ大福は、フレッシュな味わいが魅力の和洋折衷スイーツ。いちごのジューシーさと餡のやさしい甘さが口の中で絶妙に溶け合います。",
    price: 350,
    category: "sweets",
    options: sweetsOptions,
    isSeasonal: true,
  },
  sakura_mochi: {
    name: "桜餅",
    description:
      "春の風物詩として親しまれる桜餅は、桜の葉の香りと塩味がアクセントになった上品な一品。もっちりとした生地と餡の甘さが絶妙で、季節を感じながら楽しめる日本の伝統菓子です。",
    price: 330,
    category: "sweets",
    options: sweetsOptions,
    isSeasonal: true,
  },
  hot_choco_parfait: {
    name: "ホットチョコパフェ",
    description:
      "温かいチョコレートソースをたっぷりとかけたホットチョコパフェは、冷たいアイスやフルーツとの温冷のコントラストが楽しめる贅沢なスイーツ。濃厚でリッチな味わいが口いっぱいに広がります。",
    price: 1200,
    category: "sweets",
    options: sweetsOptions,
    isSeasonal: true,
  },
  hotcakes: {
    name: "ホットケーキ",
    description:
      "ふんわり焼き上げたホットケーキは、バターとメープルシロップの組み合わせが絶品の定番スイーツ。生クリームやフルーツを添えて、自分好みのトッピングで楽しめます。食事代わりにもおすすめです。",
    price: 500,
    category: "sweets",
    options: sweetsOptions,
  },
  daifuku: {
    name: "大福",
    description:
      "もち米で作った柔らかな皮の中に、たっぷりの餡が包まれた大福。シンプルながらも奥深い味わいで、素朴な甘さが魅力です。飽きのこない美味しさで、日本茶との相性も抜群の和菓子です。",
    price: 300,
    category: "sweets",
    options: sweetsOptions,
  },
  mont_blanc: {
    name: "モンブラン",
    description:
      "濃厚な栗のクリームをたっぷり絞ったモンブランは、しっとりとしたスポンジと口溶けの良いクリームが絶妙にマッチ。秋の味覚を贅沢に堪能できる人気の洋菓子です。紅茶との相性も良好です。",
    price: 550,
    category: "sweets",
    options: sweetsOptions,
  },
  monaka: {
    name: "モナカ",
    description:
      "サクッとした最中の皮に餡をたっぷり詰めたモナカは、軽やかな食感と濃厚な甘さが楽しめる一品。アイスや栗を加えたアレンジも可能で、和菓子の中でも個性豊かな存在です。",
    price: 320,
    category: "sweets",
    options: sweetsOptions,
  },
  chisato_special: {
    name: "エレガントパフェ",
    description:
      "エレガントなパフェをイメージしたオリジナルスイーツ。ピンクのストロベリームースとピスタチオのクリーム、ハート型のチョコレートをあしらったビジュアルも楽しい特別な一皿。",
    price: 1200,
    category: "sweets",
    options: sweetsOptions,
  },
  nama_chocolate: {
    name: "生チョコレート",
    description:
      "口の中でとろけるような滑らかさが魅力の生チョコレートは、濃厚なカカオの香りとリッチな味わいが特徴。冷やしても常温でも楽しめ、お茶やコーヒーのお供にぴったりの上品なスイーツです。",
    price: 480,
    category: "sweets",
    options: sweetsOptions,
  },
  shortcake: {
    name: "ショートケーキ",
    description:
      "ふわふわのスポンジに甘酸っぱいイチゴとたっぷりの生クリームを重ねた王道のショートケーキ。どの世代からも愛される安心感のある味で、特別な日やティータイムにも最適なスイーツです。",
    price: 520,
    category: "sweets",
    options: sweetsOptions,
  },
  kakigori: {
    name: "かき氷",
    description:
      "ふわふわの氷にシロップをたっぷりとかけたかき氷は、夏に欠かせない定番スイーツ。イチゴ、メロン、抹茶などバリエーションも豊富で、練乳やあずきのトッピングでアレンジも可能です。",
    price: 450,
    category: "sweets",
    options: sweetsOptions,
    isSeasonal: true,
  },
  fruit_parfait: {
    name: "フルーツパフェ",
    description:
      "季節のフルーツをふんだんに使ったフルーツパフェは、見た目も華やかで満足感たっぷり。アイスやクリーム、グラノーラなどが層になっており、スプーンを進めるごとに違った味と食感が楽しめます。",
    price: 600,
    category: "sweets",
    options: sweetsOptions,
  },
  cheesecake: {
    name: "チーズケーキ",
    description:
      "しっとり濃厚なチーズケーキは、クリームチーズの風味とやさしい甘さが魅力。ベイクドやレアタイプなどスタイルによって異なる食感を楽しめます。コーヒーとの相性も抜群の洋菓子です。",
    price: 480,
    category: "sweets",
    options: sweetsOptions,
    isSeasonal: true,
  },
  dorayaki_burger: {
    name: "どら焼きバーガー",
    description:
      "ふわっと焼き上げたどら焼きの生地に餡やホイップ、フルーツなどを挟んだ新感覚のスイーツ。見た目はまるでハンバーガーのようで、味は本格的な和菓子。食べやすく、ボリュームも満点です。",
    price: 600,
    category: "sweets",
    options: sweetsOptions,
  },
  mame_daifuku: {
    name: "豆大福",
    description:
      "もちもちの皮に塩味の効いた赤えんどう豆を練り込み、甘さ控えめの餡を包んだ豆大福は、塩気と甘味のバランスが絶妙な伝統菓子。素朴ながらも飽きのこない味わいです。",
    price: 340,
    category: "sweets",
    options: sweetsOptions,
  },
  sanshoku_dango: {
    name: "団子三兄弟",
    description:
      "ピンク、白、緑の三色団子は、見た目にも楽しく、やさしい甘さともちもち食感が楽しめる定番の和スイーツ。季節を問わず人気で、お花見やイベントにもぴったりの一品です。",
    price: 500,
    category: "sweets",
    options: sweetsOptions,
  },
  lemon_cheesecake: {
    name: "レモンチーズケーキ",
    description:
      "爽やかなレモンの香りとクリームチーズのコクが絶妙に調和したレモンチーズケーキは、夏にぴったりの爽快スイーツ。後味も軽やかで、濃厚なのに食べやすい仕上がりです。",
    price: 490,
    category: "sweets",
    options: sweetsOptions,
    isSeasonal: true,
  },
  ohagi: {
    name: "おはぎ",
    description:
      "もち米を使ったご飯に粒あんを包んだおはぎは、家庭の味としても親しまれる和スイーツ。甘すぎず、しっかりとした食べ応えがあり、お茶との相性も抜群。懐かしさを感じる素朴な美味しさです。",
    price: 600,
    category: "sweets",
    options: sweetsOptions,
  },
  kuri_yokan: {
    name: "栗ようかん",
    description:
      "栗の風味を贅沢に閉じ込めた栗ようかんは、上品な甘さとコクのある味わいが特徴。小豆と栗の相性も抜群で、お茶うけや贈り物にも最適な、秋の定番和菓子です。",
    price: 350,
    category: "sweets",
    options: sweetsOptions,
    isSeasonal: true,
  },
};

// idをキーにしてメニューを取得する
export const MenuRecord = Object.entries(MenuRecordRow).reduce(
  (acc, [id, menu]) => {
    acc[id as MenuID] = { id, img: getMenuImg(id as MenuID), ...menu };
    return acc;
  },
  {} as Record<MenuID, MenuType>
);

// すべてのメニューを配列で取得する
export const MenuList = getMenuFilter(() => true);

// カテゴリーごとのメニューを取得する
export function CategoryMenu(category: CategoryType): MenuType[] {
  return getMenuFilter((menu) => menu.category === category);
}

// 季節限定メニューを取得する
export function getSeasonalMenu(): MenuType[] {
  return getMenuFilter((menu) => menu.isSeasonal === true);
}

// フィルターを使ってメニューを取得する
// Example: getMenuFilter((menu) => menu.price > 400)
export function getMenuFilter(filter: (menu: MenuType) => boolean): MenuType[] {
  return Object.entries(MenuRecord)
    .filter(([id, menu]) => filter({ id, ...menu }))
    .map(([id, menu]) => {
      return { id, img: getMenuImg(id as MenuID), ...menu };
    });
}

function getMenuImg(menuID: MenuID): string {
  return `/img/menu/${menuID}.jpeg`;
}
