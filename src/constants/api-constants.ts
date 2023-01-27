export const FILTER_COLOR = {
  KOR: "색상",
  ENG: "color",
};

export const FILTER_PRICE = {
  KOR: "가격",
  ENG: "price",
};

export const GI_COLORS = {
  ALL: "All",
  BLACK: "Black",
  BLUE: "Blue",
  WHITE: "White",
  DARK: "Dark",
  BRIGHT: "Bright",
};

export const GI_COLORS_ARRAY = Object.values(GI_COLORS);

export const QUERY_COLORS = [
  "",
  ...[...GI_COLORS_ARRAY].slice(1).map((color) => `color=${color}`),
];

export const GI_PRICES = {
  ALL: "All",
  RANGE_1: "15 만원 이하",
  RANGE_2: "15 만원 ~ 20 만원",
  RANGE_3: "20 만원 ~ 25 만원",
  RANGE_4: "25 만원 이상",
};

export const GI_PRICES_ARRAY = Object.values(GI_PRICES);

export const QUERY_PRICES = [
  "",
  "max_price=150000",
  "min_price=150001&max_price=200000",
  "min_price=200001&max_price=250000",
  "min_price=250001",
];

export const CACHE_STORAGE = {
  GIS: "DDobod-gis",
  BRANDS: "DDobod-brands",
};

export const QUERY = {
  [FILTER_COLOR.ENG]: QUERY_COLORS,
  [FILTER_PRICE.ENG]: QUERY_PRICES,
};
