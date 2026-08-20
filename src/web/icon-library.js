/**
 * Editable label icon library.
 * Paths are derived from Lucide Icons (ISC), pinned at commit
 * 59978cecf84986af59f1f9f503bcebdc89c6d166.
 */

export const ICON_CATEGORIES = [
  {
    "id": "shipping",
    "label": "Shipping",
    "labelKo": "배송"
  },
  {
    "id": "retail",
    "label": "Retail",
    "labelKo": "판매"
  },
  {
    "id": "food",
    "label": "Food",
    "labelKo": "식품"
  },
  {
    "id": "home",
    "label": "Home",
    "labelKo": "생활"
  },
  {
    "id": "safety",
    "label": "Safety",
    "labelKo": "안전"
  },
  {
    "id": "office",
    "label": "Office",
    "labelKo": "사무"
  },
  {
    "id": "health",
    "label": "Health",
    "labelKo": "건강"
  },
  {
    "id": "craft",
    "label": "Craft",
    "labelKo": "공예"
  },
  {
    "id": "lifestyle",
    "label": "Lifestyle",
    "labelKo": "라이프"
  },
  {
    "id": "communication",
    "label": "Communication",
    "labelKo": "소통"
  }
];

export const ICONS = [
  {
    "id": "package",
    "category": "shipping",
    "label": "Package",
    "labelKo": "택배 상자",
    "tags": [
      "package",
      "Package",
      "택배 상자",
      "Shipping",
      "배송"
    ],
    "paths": [
      "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      "M12 22V12",
      "M3.29 7L12 12L20.71 7",
      "m7.5 4.27 9 5.15"
    ]
  },
  {
    "id": "package-check",
    "category": "shipping",
    "label": "Package Check",
    "labelKo": "배송 완료",
    "tags": [
      "package check",
      "Package Check",
      "배송 완료",
      "Shipping",
      "배송"
    ],
    "paths": [
      "M12 22V12",
      "m16 17 2 2 4-4",
      "M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",
      "M3.29 7 12 12l8.71-5",
      "m7.5 4.27 8.997 5.148"
    ]
  },
  {
    "id": "package-open",
    "category": "shipping",
    "label": "Open Package",
    "labelKo": "개봉 상자",
    "tags": [
      "package open",
      "Open Package",
      "개봉 상자",
      "Shipping",
      "배송"
    ],
    "paths": [
      "M12 22v-9",
      "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
      "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
      "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"
    ]
  },
  {
    "id": "truck",
    "category": "shipping",
    "label": "Truck",
    "labelKo": "배송 트럭",
    "tags": [
      "truck",
      "Truck",
      "배송 트럭",
      "Shipping",
      "배송"
    ],
    "paths": [
      "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
      "M15 18H9",
      "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      "M15 18A2 2 0 1 0 19 18A2 2 0 1 0 15 18",
      "M5 18A2 2 0 1 0 9 18A2 2 0 1 0 5 18"
    ]
  },
  {
    "id": "container",
    "category": "shipping",
    "label": "Container",
    "labelKo": "화물 컨테이너",
    "tags": [
      "container",
      "Container",
      "화물 컨테이너",
      "Shipping",
      "배송"
    ],
    "paths": [
      "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
      "M10 21.9V14L2.1 9.1",
      "m10 14 11.9-6.9",
      "M14 19.8v-8.1",
      "M18 17.5V9.4"
    ]
  },
  {
    "id": "map-pin",
    "category": "shipping",
    "label": "Map Pin",
    "labelKo": "위치",
    "tags": [
      "map pin",
      "Map Pin",
      "위치",
      "Shipping",
      "배송"
    ],
    "paths": [
      "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      "M9 10A3 3 0 1 0 15 10A3 3 0 1 0 9 10"
    ]
  },
  {
    "id": "navigation",
    "category": "shipping",
    "label": "Navigation",
    "labelKo": "방향",
    "tags": [
      "navigation",
      "Navigation",
      "방향",
      "Shipping",
      "배송"
    ],
    "paths": [
      "M3 11L22 2L13 21L11 13L3 11Z"
    ]
  },
  {
    "id": "route",
    "category": "shipping",
    "label": "Route",
    "labelKo": "배송 경로",
    "tags": [
      "route",
      "Route",
      "배송 경로",
      "Shipping",
      "배송"
    ],
    "paths": [
      "M3 19A3 3 0 1 0 9 19A3 3 0 1 0 3 19",
      "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",
      "M15 5A3 3 0 1 0 21 5A3 3 0 1 0 15 5"
    ]
  },
  {
    "id": "scale",
    "category": "shipping",
    "label": "Scale",
    "labelKo": "무게",
    "tags": [
      "scale",
      "Scale",
      "무게",
      "Shipping",
      "배송"
    ],
    "paths": [
      "M12 3v18",
      "m19 8 3 8a5 5 0 0 1-6 0zV7",
      "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",
      "m5 8 3 8a5 5 0 0 1-6 0zV7",
      "M7 21h10"
    ]
  },
  {
    "id": "scan-barcode",
    "category": "shipping",
    "label": "Scan Barcode",
    "labelKo": "바코드 스캔",
    "tags": [
      "scan barcode",
      "Scan Barcode",
      "바코드 스캔",
      "Shipping",
      "배송"
    ],
    "paths": [
      "M3 7V5a2 2 0 0 1 2-2h2",
      "M17 3h2a2 2 0 0 1 2 2v2",
      "M21 17v2a2 2 0 0 1-2 2h-2",
      "M7 21H5a2 2 0 0 1-2-2v-2",
      "M8 7v10",
      "M12 7v10",
      "M17 7v10"
    ]
  },
  {
    "id": "shopping-cart",
    "category": "retail",
    "label": "Shopping Cart",
    "labelKo": "장바구니",
    "tags": [
      "shopping cart",
      "Shopping Cart",
      "장바구니",
      "Retail",
      "판매"
    ],
    "paths": [
      "M7 21A1 1 0 1 0 9 21A1 1 0 1 0 7 21",
      "M18 21A1 1 0 1 0 20 21A1 1 0 1 0 18 21",
      "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
    ]
  },
  {
    "id": "shopping-bag",
    "category": "retail",
    "label": "Shopping Bag",
    "labelKo": "쇼핑백",
    "tags": [
      "shopping bag",
      "Shopping Bag",
      "쇼핑백",
      "Retail",
      "판매"
    ],
    "paths": [
      "M16 10a4 4 0 0 1-8 0",
      "M3.103 6.034h17.794",
      "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"
    ]
  },
  {
    "id": "store",
    "category": "retail",
    "label": "Store",
    "labelKo": "매장",
    "tags": [
      "store",
      "Store",
      "매장",
      "Retail",
      "판매"
    ],
    "paths": [
      "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",
      "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
      "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"
    ]
  },
  {
    "id": "tag",
    "category": "retail",
    "label": "Tag",
    "labelKo": "가격표",
    "tags": [
      "tag",
      "Tag",
      "가격표",
      "Retail",
      "판매"
    ],
    "paths": [
      "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      "M7 7.5A0.5 0.5 0 1 0 8 7.5A0.5 0.5 0 1 0 7 7.5"
    ]
  },
  {
    "id": "badge-percent",
    "category": "retail",
    "label": "Discount",
    "labelKo": "할인",
    "tags": [
      "badge percent",
      "Discount",
      "할인",
      "Retail",
      "판매"
    ],
    "paths": [
      "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      "m15 9-6 6",
      "M9 9h.01",
      "M15 15h.01"
    ]
  },
  {
    "id": "receipt",
    "category": "retail",
    "label": "Receipt",
    "labelKo": "영수증",
    "tags": [
      "receipt",
      "Receipt",
      "영수증",
      "Retail",
      "판매"
    ],
    "paths": [
      "M12 17V7",
      "M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8",
      "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    ]
  },
  {
    "id": "credit-card",
    "category": "retail",
    "label": "Credit Card",
    "labelKo": "카드",
    "tags": [
      "credit card",
      "Credit Card",
      "카드",
      "Retail",
      "판매"
    ],
    "paths": [
      "M4 5H20A2 2 0 0 1 22 7V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17V7A2 2 0 0 1 4 5Z",
      "M2 10L22 10"
    ]
  },
  {
    "id": "wallet",
    "category": "retail",
    "label": "Wallet",
    "labelKo": "지갑",
    "tags": [
      "wallet",
      "Wallet",
      "지갑",
      "Retail",
      "판매"
    ],
    "paths": [
      "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"
    ]
  },
  {
    "id": "gift",
    "category": "retail",
    "label": "Gift",
    "labelKo": "선물",
    "tags": [
      "gift",
      "Gift",
      "선물",
      "Retail",
      "판매"
    ],
    "paths": [
      "M12 7v14",
      "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",
      "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",
      "M4 7H20A1 1 0 0 1 21 8V10A1 1 0 0 1 20 11H4A1 1 0 0 1 3 10V8A1 1 0 0 1 4 7Z"
    ]
  },
  {
    "id": "ticket",
    "category": "retail",
    "label": "Ticket",
    "labelKo": "티켓",
    "tags": [
      "ticket",
      "Ticket",
      "티켓",
      "Retail",
      "판매"
    ],
    "paths": [
      "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      "M13 5v2",
      "M13 17v2",
      "M13 11v2"
    ]
  },
  {
    "id": "apple",
    "category": "food",
    "label": "Apple",
    "labelKo": "사과",
    "tags": [
      "apple",
      "Apple",
      "사과",
      "Food",
      "식품"
    ],
    "paths": [
      "M12 6.528V3a1 1 0 0 1 1-1h0",
      "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"
    ]
  },
  {
    "id": "banana",
    "category": "food",
    "label": "Banana",
    "labelKo": "바나나",
    "tags": [
      "banana",
      "Banana",
      "바나나",
      "Food",
      "식품"
    ],
    "paths": [
      "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",
      "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
    ]
  },
  {
    "id": "cherry",
    "category": "food",
    "label": "Cherry",
    "labelKo": "체리",
    "tags": [
      "cherry",
      "Cherry",
      "체리",
      "Food",
      "식품"
    ],
    "paths": [
      "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
      "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
      "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",
      "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"
    ]
  },
  {
    "id": "carrot",
    "category": "food",
    "label": "Carrot",
    "labelKo": "당근",
    "tags": [
      "carrot",
      "Carrot",
      "당근",
      "Food",
      "식품"
    ],
    "paths": [
      "M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3",
      "M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7",
      "m8 15-2.58-2.58"
    ]
  },
  {
    "id": "coffee",
    "category": "food",
    "label": "Coffee",
    "labelKo": "커피",
    "tags": [
      "coffee",
      "Coffee",
      "커피",
      "Food",
      "식품"
    ],
    "paths": [
      "M10 2v2",
      "M14 2v2",
      "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      "M6 2v2"
    ]
  },
  {
    "id": "cup-soda",
    "category": "food",
    "label": "Cold Drink",
    "labelKo": "음료",
    "tags": [
      "cup soda",
      "Cold Drink",
      "음료",
      "Food",
      "식품"
    ],
    "paths": [
      "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",
      "M5 8h14",
      "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
      "m12 8 1-6h2"
    ]
  },
  {
    "id": "utensils",
    "category": "food",
    "label": "Utensils",
    "labelKo": "식기",
    "tags": [
      "utensils",
      "Utensils",
      "식기",
      "Food",
      "식품"
    ],
    "paths": [
      "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",
      "M7 2v20",
      "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
    ]
  },
  {
    "id": "chef-hat",
    "category": "food",
    "label": "Chef Hat",
    "labelKo": "요리사",
    "tags": [
      "chef hat",
      "Chef Hat",
      "요리사",
      "Food",
      "식품"
    ],
    "paths": [
      "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
      "M6 17h12"
    ]
  },
  {
    "id": "cooking-pot",
    "category": "food",
    "label": "Cooking Pot",
    "labelKo": "냄비",
    "tags": [
      "cooking pot",
      "Cooking Pot",
      "냄비",
      "Food",
      "식품"
    ],
    "paths": [
      "M2 12h20",
      "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",
      "m4 8 16-4",
      "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"
    ]
  },
  {
    "id": "cake-slice",
    "category": "food",
    "label": "Cake",
    "labelKo": "케이크",
    "tags": [
      "cake slice",
      "Cake",
      "케이크",
      "Food",
      "식품"
    ],
    "paths": [
      "M16 13H3",
      "M16 17H3",
      "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6",
      "M7 7A2 2 0 1 0 11 7A2 2 0 1 0 7 7"
    ]
  },
  {
    "id": "house",
    "category": "home",
    "label": "House",
    "labelKo": "집",
    "tags": [
      "house",
      "House",
      "집",
      "Home",
      "생활"
    ],
    "paths": [
      "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
      "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    ]
  },
  {
    "id": "archive",
    "category": "home",
    "label": "Archive",
    "labelKo": "보관",
    "tags": [
      "archive",
      "Archive",
      "보관",
      "Home",
      "생활"
    ],
    "paths": [
      "M3 3H21A1 1 0 0 1 22 4V7A1 1 0 0 1 21 8H3A1 1 0 0 1 2 7V4A1 1 0 0 1 3 3Z",
      "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
      "M10 12h4"
    ]
  },
  {
    "id": "box",
    "category": "home",
    "label": "Storage Box",
    "labelKo": "수납 상자",
    "tags": [
      "box",
      "Storage Box",
      "수납 상자",
      "Home",
      "생활"
    ],
    "paths": [
      "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      "m3.3 7 8.7 5 8.7-5",
      "M12 22V12"
    ]
  },
  {
    "id": "boxes",
    "category": "home",
    "label": "Boxes",
    "labelKo": "여러 상자",
    "tags": [
      "boxes",
      "Boxes",
      "여러 상자",
      "Home",
      "생활"
    ],
    "paths": [
      "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      "m7 16.5-4.74-2.85",
      "m7 16.5 5-3",
      "M7 16.5v5.17",
      "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      "m17 16.5-5-3",
      "m17 16.5 4.74-2.85",
      "M17 16.5v5.17",
      "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      "M12 8 7.26 5.15",
      "m12 8 4.74-2.85",
      "M12 13.5V8"
    ]
  },
  {
    "id": "bed",
    "category": "home",
    "label": "Bed",
    "labelKo": "침실",
    "tags": [
      "bed",
      "Bed",
      "침실",
      "Home",
      "생활"
    ],
    "paths": [
      "M2 4v16",
      "M2 8h18a2 2 0 0 1 2 2v10",
      "M2 17h20",
      "M6 8v9"
    ]
  },
  {
    "id": "lamp",
    "category": "home",
    "label": "Lamp",
    "labelKo": "조명",
    "tags": [
      "lamp",
      "Lamp",
      "조명",
      "Home",
      "생활"
    ],
    "paths": [
      "M12 12v6",
      "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z",
      "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"
    ]
  },
  {
    "id": "key-round",
    "category": "home",
    "label": "Key",
    "labelKo": "열쇠",
    "tags": [
      "key round",
      "Key",
      "열쇠",
      "Home",
      "생활"
    ],
    "paths": [
      "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      "M16 7.5A0.5 0.5 0 1 0 17 7.5A0.5 0.5 0 1 0 16 7.5"
    ]
  },
  {
    "id": "lock",
    "category": "home",
    "label": "Lock",
    "labelKo": "잠금",
    "tags": [
      "lock",
      "Lock",
      "잠금",
      "Home",
      "생활"
    ],
    "paths": [
      "M5 11H19A2 2 0 0 1 21 13V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V13A2 2 0 0 1 5 11Z",
      "M7 11V7a5 5 0 0 1 10 0v4"
    ]
  },
  {
    "id": "shower-head",
    "category": "home",
    "label": "Shower",
    "labelKo": "욕실",
    "tags": [
      "shower head",
      "Shower",
      "욕실",
      "Home",
      "생활"
    ],
    "paths": [
      "m4 4 2.5 2.5",
      "M13.5 6.5a4.95 4.95 0 0 0-7 7",
      "M15 5 5 15",
      "M14 17v.01",
      "M10 16v.01",
      "M13 13v.01",
      "M16 10v.01",
      "M11 20v.01",
      "M17 14v.01",
      "M20 11v.01"
    ]
  },
  {
    "id": "washing-machine",
    "category": "home",
    "label": "Washing Machine",
    "labelKo": "세탁기",
    "tags": [
      "washing machine",
      "Washing Machine",
      "세탁기",
      "Home",
      "생활"
    ],
    "paths": [
      "M3 6h3",
      "M17 6h.01",
      "M5 2H19A2 2 0 0 1 21 4V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V4A2 2 0 0 1 5 2Z",
      "M7 13A5 5 0 1 0 17 13A5 5 0 1 0 7 13",
      "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"
    ]
  },
  {
    "id": "triangle-alert",
    "category": "safety",
    "label": "Warning",
    "labelKo": "경고",
    "tags": [
      "triangle alert",
      "Warning",
      "경고",
      "Safety",
      "안전"
    ],
    "paths": [
      "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      "M12 9v4",
      "M12 17h.01"
    ]
  },
  {
    "id": "circle-alert",
    "category": "safety",
    "label": "Attention",
    "labelKo": "주의",
    "tags": [
      "circle alert",
      "Attention",
      "주의",
      "Safety",
      "안전"
    ],
    "paths": [
      "M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12",
      "M12 8L12 12",
      "M12 16L12.01 16"
    ]
  },
  {
    "id": "shield-check",
    "category": "safety",
    "label": "Safety Approved",
    "labelKo": "안전 확인",
    "tags": [
      "shield check",
      "Safety Approved",
      "안전 확인",
      "Safety",
      "안전"
    ],
    "paths": [
      "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      "m9 12 2 2 4-4"
    ]
  },
  {
    "id": "shield-alert",
    "category": "safety",
    "label": "Safety Alert",
    "labelKo": "안전 경고",
    "tags": [
      "shield alert",
      "Safety Alert",
      "안전 경고",
      "Safety",
      "안전"
    ],
    "paths": [
      "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      "M12 8v4",
      "M12 16h.01"
    ]
  },
  {
    "id": "flame",
    "category": "safety",
    "label": "Flammable",
    "labelKo": "인화성",
    "tags": [
      "flame",
      "Flammable",
      "인화성",
      "Safety",
      "안전"
    ],
    "paths": [
      "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"
    ]
  },
  {
    "id": "biohazard",
    "category": "safety",
    "label": "Biohazard",
    "labelKo": "생물 위험",
    "tags": [
      "biohazard",
      "Biohazard",
      "생물 위험",
      "Safety",
      "안전"
    ],
    "paths": [
      "M10 11.9A2 2 0 1 0 14 11.9A2 2 0 1 0 10 11.9",
      "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",
      "m8.9 10.1 1.4.8",
      "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",
      "m15.1 10.1-1.4.8",
      "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",
      "M12 13.9v1.6",
      "M13.5 5.4c-1-.2-2-.2-3 0",
      "M17 16.4c.7-.7 1.2-1.6 1.5-2.5",
      "M5.5 13.9c.3.9.8 1.8 1.5 2.5"
    ]
  },
  {
    "id": "radiation",
    "category": "safety",
    "label": "Radiation",
    "labelKo": "방사선",
    "tags": [
      "radiation",
      "Radiation",
      "방사선",
      "Safety",
      "안전"
    ],
    "paths": [
      "M12 12h.01",
      "M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z",
      "M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z",
      "M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z"
    ]
  },
  {
    "id": "hard-hat",
    "category": "safety",
    "label": "Hard Hat",
    "labelKo": "안전모",
    "tags": [
      "hard hat",
      "Hard Hat",
      "안전모",
      "Safety",
      "안전"
    ],
    "paths": [
      "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",
      "M14 6a6 6 0 0 1 6 6v3",
      "M4 15v-3a6 6 0 0 1 6-6",
      "M3 15H21A1 1 0 0 1 22 16V18A1 1 0 0 1 21 19H3A1 1 0 0 1 2 18V16A1 1 0 0 1 3 15Z"
    ]
  },
  {
    "id": "construction",
    "category": "safety",
    "label": "Construction",
    "labelKo": "공사",
    "tags": [
      "construction",
      "Construction",
      "공사",
      "Safety",
      "안전"
    ],
    "paths": [
      "M3 6H21A1 1 0 0 1 22 7V13A1 1 0 0 1 21 14H3A1 1 0 0 1 2 13V7A1 1 0 0 1 3 6Z",
      "M17 14v7",
      "M7 14v7",
      "M17 3v3",
      "M7 3v3",
      "M10 14 2.3 6.3",
      "m14 6 7.7 7.7",
      "m8 6 8 8"
    ]
  },
  {
    "id": "octagon-x",
    "category": "safety",
    "label": "Do Not",
    "labelKo": "금지",
    "tags": [
      "octagon x",
      "Do Not",
      "금지",
      "Safety",
      "안전"
    ],
    "paths": [
      "m15 9-6 6",
      "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      "m9 9 6 6"
    ]
  },
  {
    "id": "file",
    "category": "office",
    "label": "File",
    "labelKo": "문서",
    "tags": [
      "file",
      "File",
      "문서",
      "Office",
      "사무"
    ],
    "paths": [
      "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      "M14 2v5a1 1 0 0 0 1 1h5"
    ]
  },
  {
    "id": "folder",
    "category": "office",
    "label": "Folder",
    "labelKo": "폴더",
    "tags": [
      "folder",
      "Folder",
      "폴더",
      "Office",
      "사무"
    ],
    "paths": [
      "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    ]
  },
  {
    "id": "printer",
    "category": "office",
    "label": "Printer",
    "labelKo": "프린터",
    "tags": [
      "printer",
      "Printer",
      "프린터",
      "Office",
      "사무"
    ],
    "paths": [
      "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
      "M7 14H17A1 1 0 0 1 18 15V21A1 1 0 0 1 17 22H7A1 1 0 0 1 6 21V15A1 1 0 0 1 7 14Z"
    ]
  },
  {
    "id": "laptop",
    "category": "office",
    "label": "Laptop",
    "labelKo": "노트북",
    "tags": [
      "laptop",
      "Laptop",
      "노트북",
      "Office",
      "사무"
    ],
    "paths": [
      "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
      "M20.054 15.987H3.946"
    ]
  },
  {
    "id": "smartphone",
    "category": "office",
    "label": "Smartphone",
    "labelKo": "스마트폰",
    "tags": [
      "smartphone",
      "Smartphone",
      "스마트폰",
      "Office",
      "사무"
    ],
    "paths": [
      "M7 2H17A2 2 0 0 1 19 4V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V4A2 2 0 0 1 7 2Z",
      "M12 18h.01"
    ]
  },
  {
    "id": "monitor",
    "category": "office",
    "label": "Monitor",
    "labelKo": "모니터",
    "tags": [
      "monitor",
      "Monitor",
      "모니터",
      "Office",
      "사무"
    ],
    "paths": [
      "M4 3H20A2 2 0 0 1 22 5V15A2 2 0 0 1 20 17H4A2 2 0 0 1 2 15V5A2 2 0 0 1 4 3Z",
      "M8 21L16 21",
      "M12 17L12 21"
    ]
  },
  {
    "id": "keyboard",
    "category": "office",
    "label": "Keyboard",
    "labelKo": "키보드",
    "tags": [
      "keyboard",
      "Keyboard",
      "키보드",
      "Office",
      "사무"
    ],
    "paths": [
      "M10 8h.01",
      "M12 12h.01",
      "M14 8h.01",
      "M16 12h.01",
      "M18 8h.01",
      "M6 8h.01",
      "M7 16h10",
      "M8 12h.01",
      "M4 4H20A2 2 0 0 1 22 6V18A2 2 0 0 1 20 20H4A2 2 0 0 1 2 18V6A2 2 0 0 1 4 4Z"
    ]
  },
  {
    "id": "mouse",
    "category": "office",
    "label": "Mouse",
    "labelKo": "마우스",
    "tags": [
      "mouse",
      "Mouse",
      "마우스",
      "Office",
      "사무"
    ],
    "paths": [
      "M12 2H12A7 7 0 0 1 19 9V15A7 7 0 0 1 12 22H12A7 7 0 0 1 5 15V9A7 7 0 0 1 12 2Z",
      "M12 6v4"
    ]
  },
  {
    "id": "cable",
    "category": "office",
    "label": "Cable",
    "labelKo": "케이블",
    "tags": [
      "cable",
      "Cable",
      "케이블",
      "Office",
      "사무"
    ],
    "paths": [
      "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z",
      "M17 21v-2",
      "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10",
      "M21 21v-2",
      "M3 5V3",
      "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z",
      "M7 5V3"
    ]
  },
  {
    "id": "wifi",
    "category": "office",
    "label": "Wi-Fi",
    "labelKo": "와이파이",
    "tags": [
      "wifi",
      "Wi-Fi",
      "와이파이",
      "Office",
      "사무"
    ],
    "paths": [
      "M12 20h.01",
      "M2 8.82a15 15 0 0 1 20 0",
      "M5 12.859a10 10 0 0 1 14 0",
      "M8.5 16.429a5 5 0 0 1 7 0"
    ]
  },
  {
    "id": "heart-pulse",
    "category": "health",
    "label": "Heart Health",
    "labelKo": "심장 건강",
    "tags": [
      "heart pulse",
      "Heart Health",
      "심장 건강",
      "Health",
      "건강"
    ],
    "paths": [
      "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
    ]
  },
  {
    "id": "cross",
    "category": "health",
    "label": "Medical Cross",
    "labelKo": "의료",
    "tags": [
      "cross",
      "Medical Cross",
      "의료",
      "Health",
      "건강"
    ],
    "paths": [
      "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"
    ]
  },
  {
    "id": "pill",
    "category": "health",
    "label": "Medicine",
    "labelKo": "약",
    "tags": [
      "pill",
      "Medicine",
      "약",
      "Health",
      "건강"
    ],
    "paths": [
      "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
      "m8.5 8.5 7 7"
    ]
  },
  {
    "id": "syringe",
    "category": "health",
    "label": "Syringe",
    "labelKo": "주사기",
    "tags": [
      "syringe",
      "Syringe",
      "주사기",
      "Health",
      "건강"
    ],
    "paths": [
      "m18 2 4 4",
      "m17 7 3-3",
      "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",
      "m9 11 4 4",
      "m5 19-3 3",
      "m14 4 6 6"
    ]
  },
  {
    "id": "stethoscope",
    "category": "health",
    "label": "Stethoscope",
    "labelKo": "청진기",
    "tags": [
      "stethoscope",
      "Stethoscope",
      "청진기",
      "Health",
      "건강"
    ],
    "paths": [
      "M11 2v2",
      "M5 2v2",
      "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
      "M8 15a6 6 0 0 0 12 0v-3",
      "M18 10A2 2 0 1 0 22 10A2 2 0 1 0 18 10"
    ]
  },
  {
    "id": "thermometer",
    "category": "health",
    "label": "Thermometer",
    "labelKo": "체온계",
    "tags": [
      "thermometer",
      "Thermometer",
      "체온계",
      "Health",
      "건강"
    ],
    "paths": [
      "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
    ]
  },
  {
    "id": "bandage",
    "category": "health",
    "label": "Bandage",
    "labelKo": "밴드",
    "tags": [
      "bandage",
      "Bandage",
      "밴드",
      "Health",
      "건강"
    ],
    "paths": [
      "M10 10.01h.01",
      "M10 14.01h.01",
      "M14 10.01h.01",
      "M14 14.01h.01",
      "M18 6v12",
      "M6 6v12",
      "M4 6H20A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6Z"
    ]
  },
  {
    "id": "hospital",
    "category": "health",
    "label": "Hospital",
    "labelKo": "병원",
    "tags": [
      "hospital",
      "Hospital",
      "병원",
      "Health",
      "건강"
    ],
    "paths": [
      "M12 7v4",
      "M14 21v-3a2 2 0 0 0-4 0v3",
      "M14 9h-4",
      "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
      "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"
    ]
  },
  {
    "id": "accessibility",
    "category": "health",
    "label": "Accessibility",
    "labelKo": "접근성",
    "tags": [
      "accessibility",
      "Accessibility",
      "접근성",
      "Health",
      "건강"
    ],
    "paths": [
      "M15 4A1 1 0 1 0 17 4A1 1 0 1 0 15 4",
      "m18 19 1-7-6 1",
      "m5 8 3-3 5.5 3-2.36 3.5",
      "M4.24 14.5a5 5 0 0 0 6.88 6",
      "M13.76 17.5a5 5 0 0 0-6.88-6"
    ]
  },
  {
    "id": "baby",
    "category": "health",
    "label": "Baby",
    "labelKo": "아기",
    "tags": [
      "baby",
      "Baby",
      "아기",
      "Health",
      "건강"
    ],
    "paths": [
      "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",
      "M15 12h.01",
      "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
      "M9 12h.01"
    ]
  },
  {
    "id": "leaf",
    "category": "craft",
    "label": "Leaf",
    "labelKo": "잎",
    "tags": [
      "leaf",
      "Leaf",
      "잎",
      "Craft",
      "공예"
    ],
    "paths": [
      "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
    ]
  },
  {
    "id": "flower-2",
    "category": "craft",
    "label": "Flower",
    "labelKo": "꽃",
    "tags": [
      "flower 2",
      "Flower",
      "꽃",
      "Craft",
      "공예"
    ],
    "paths": [
      "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
      "M10 8A2 2 0 1 0 14 8A2 2 0 1 0 10 8",
      "M12 10v12",
      "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",
      "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"
    ]
  },
  {
    "id": "tree-pine",
    "category": "craft",
    "label": "Pine Tree",
    "labelKo": "나무",
    "tags": [
      "tree pine",
      "Pine Tree",
      "나무",
      "Craft",
      "공예"
    ],
    "paths": [
      "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
      "M12 22v-3"
    ]
  },
  {
    "id": "sprout",
    "category": "craft",
    "label": "Sprout",
    "labelKo": "새싹",
    "tags": [
      "sprout",
      "Sprout",
      "새싹",
      "Craft",
      "공예"
    ],
    "paths": [
      "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
      "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",
      "M5 21h14"
    ]
  },
  {
    "id": "scissors",
    "category": "craft",
    "label": "Scissors",
    "labelKo": "가위",
    "tags": [
      "scissors",
      "Scissors",
      "가위",
      "Craft",
      "공예"
    ],
    "paths": [
      "M3 6A3 3 0 1 0 9 6A3 3 0 1 0 3 6",
      "M8.12 8.12 12 12",
      "M20 4 8.12 15.88",
      "M3 18A3 3 0 1 0 9 18A3 3 0 1 0 3 18",
      "M14.8 14.8 20 20"
    ]
  },
  {
    "id": "paintbrush",
    "category": "craft",
    "label": "Paintbrush",
    "labelKo": "붓",
    "tags": [
      "paintbrush",
      "Paintbrush",
      "붓",
      "Craft",
      "공예"
    ],
    "paths": [
      "m14.622 17.897-10.68-2.913",
      "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
      "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
    ]
  },
  {
    "id": "palette",
    "category": "craft",
    "label": "Palette",
    "labelKo": "팔레트",
    "tags": [
      "palette",
      "Palette",
      "팔레트",
      "Craft",
      "공예"
    ],
    "paths": [
      "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      "M13 6.5A0.5 0.5 0 1 0 14 6.5A0.5 0.5 0 1 0 13 6.5",
      "M17 10.5A0.5 0.5 0 1 0 18 10.5A0.5 0.5 0 1 0 17 10.5",
      "M6 12.5A0.5 0.5 0 1 0 7 12.5A0.5 0.5 0 1 0 6 12.5",
      "M8 7.5A0.5 0.5 0 1 0 9 7.5A0.5 0.5 0 1 0 8 7.5"
    ]
  },
  {
    "id": "hammer",
    "category": "craft",
    "label": "Hammer",
    "labelKo": "망치",
    "tags": [
      "hammer",
      "Hammer",
      "망치",
      "Craft",
      "공예"
    ],
    "paths": [
      "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",
      "m18 15 4-4",
      "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
    ]
  },
  {
    "id": "wrench",
    "category": "craft",
    "label": "Wrench",
    "labelKo": "렌치",
    "tags": [
      "wrench",
      "Wrench",
      "렌치",
      "Craft",
      "공예"
    ],
    "paths": [
      "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
    ]
  },
  {
    "id": "ruler",
    "category": "craft",
    "label": "Ruler",
    "labelKo": "자",
    "tags": [
      "ruler",
      "Ruler",
      "자",
      "Craft",
      "공예"
    ],
    "paths": [
      "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      "m14.5 12.5 2-2",
      "m11.5 9.5 2-2",
      "m8.5 6.5 2-2",
      "m17.5 15.5 2-2"
    ]
  },
  {
    "id": "paw-print",
    "category": "lifestyle",
    "label": "Paw",
    "labelKo": "발바닥",
    "tags": [
      "paw print",
      "Paw",
      "발바닥",
      "Lifestyle",
      "라이프"
    ],
    "paths": [
      "M9 4A2 2 0 1 0 13 4A2 2 0 1 0 9 4",
      "M16 8A2 2 0 1 0 20 8A2 2 0 1 0 16 8",
      "M18 16A2 2 0 1 0 22 16A2 2 0 1 0 18 16",
      "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
    ]
  },
  {
    "id": "dog",
    "category": "lifestyle",
    "label": "Dog",
    "labelKo": "강아지",
    "tags": [
      "dog",
      "Dog",
      "강아지",
      "Lifestyle",
      "라이프"
    ],
    "paths": [
      "M11.25 16.25h1.5L12 17z",
      "M16 14v.5",
      "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",
      "M8 14v.5",
      "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
    ]
  },
  {
    "id": "cat",
    "category": "lifestyle",
    "label": "Cat",
    "labelKo": "고양이",
    "tags": [
      "cat",
      "Cat",
      "고양이",
      "Lifestyle",
      "라이프"
    ],
    "paths": [
      "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",
      "M8 14v.5",
      "M16 14v.5",
      "M11.25 16.25h1.5L12 17l-.75-.75Z"
    ]
  },
  {
    "id": "fish",
    "category": "lifestyle",
    "label": "Fish",
    "labelKo": "물고기",
    "tags": [
      "fish",
      "Fish",
      "물고기",
      "Lifestyle",
      "라이프"
    ],
    "paths": [
      "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
      "M18 12v.5",
      "M16 17.93a9.77 9.77 0 0 1 0-11.86",
      "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
      "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",
      "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"
    ]
  },
  {
    "id": "bird",
    "category": "lifestyle",
    "label": "Bird",
    "labelKo": "새",
    "tags": [
      "bird",
      "Bird",
      "새",
      "Lifestyle",
      "라이프"
    ],
    "paths": [
      "M16 7h.01",
      "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",
      "m20 7 2 .5-2 .5",
      "M10 18v3",
      "M14 17.75V21",
      "M7 18a6 6 0 0 0 3.84-10.61"
    ]
  },
  {
    "id": "bone",
    "category": "lifestyle",
    "label": "Bone",
    "labelKo": "뼈다귀",
    "tags": [
      "bone",
      "Bone",
      "뼈다귀",
      "Lifestyle",
      "라이프"
    ],
    "paths": [
      "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
    ]
  },
  {
    "id": "bike",
    "category": "lifestyle",
    "label": "Bicycle",
    "labelKo": "자전거",
    "tags": [
      "bike",
      "Bicycle",
      "자전거",
      "Lifestyle",
      "라이프"
    ],
    "paths": [
      "M15 17.5A3.5 3.5 0 1 0 22 17.5A3.5 3.5 0 1 0 15 17.5",
      "M2 17.5A3.5 3.5 0 1 0 9 17.5A3.5 3.5 0 1 0 2 17.5",
      "M14 5A1 1 0 1 0 16 5A1 1 0 1 0 14 5",
      "M12 17.5V14l-3-3 4-3 2 3h2"
    ]
  },
  {
    "id": "tent",
    "category": "lifestyle",
    "label": "Tent",
    "labelKo": "텐트",
    "tags": [
      "tent",
      "Tent",
      "텐트",
      "Lifestyle",
      "라이프"
    ],
    "paths": [
      "M3.5 21 14 3",
      "M20.5 21 10 3",
      "M15.5 21 12 15l-3.5 6",
      "M2 21h20"
    ]
  },
  {
    "id": "umbrella",
    "category": "lifestyle",
    "label": "Umbrella",
    "labelKo": "우산",
    "tags": [
      "umbrella",
      "Umbrella",
      "우산",
      "Lifestyle",
      "라이프"
    ],
    "paths": [
      "M12 13v7a2 2 0 0 0 4 0",
      "M12 2v2",
      "M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z"
    ]
  },
  {
    "id": "luggage",
    "category": "lifestyle",
    "label": "Luggage",
    "labelKo": "여행 가방",
    "tags": [
      "luggage",
      "Luggage",
      "여행 가방",
      "Lifestyle",
      "라이프"
    ],
    "paths": [
      "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",
      "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",
      "M10 20h4",
      "M14 20A2 2 0 1 0 18 20A2 2 0 1 0 14 20",
      "M6 20A2 2 0 1 0 10 20A2 2 0 1 0 6 20"
    ]
  },
  {
    "id": "phone",
    "category": "communication",
    "label": "Phone",
    "labelKo": "전화",
    "tags": [
      "phone",
      "Phone",
      "전화",
      "Communication",
      "소통"
    ],
    "paths": [
      "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    ]
  },
  {
    "id": "mail",
    "category": "communication",
    "label": "Mail",
    "labelKo": "메일",
    "tags": [
      "mail",
      "Mail",
      "메일",
      "Communication",
      "소통"
    ],
    "paths": [
      "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
      "M4 4H20A2 2 0 0 1 22 6V18A2 2 0 0 1 20 20H4A2 2 0 0 1 2 18V6A2 2 0 0 1 4 4Z"
    ]
  },
  {
    "id": "message-circle",
    "category": "communication",
    "label": "Message",
    "labelKo": "메시지",
    "tags": [
      "message circle",
      "Message",
      "메시지",
      "Communication",
      "소통"
    ],
    "paths": [
      "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
    ]
  },
  {
    "id": "at-sign",
    "category": "communication",
    "label": "At Sign",
    "labelKo": "골뱅이",
    "tags": [
      "at sign",
      "At Sign",
      "골뱅이",
      "Communication",
      "소통"
    ],
    "paths": [
      "M8 12A4 4 0 1 0 16 12A4 4 0 1 0 8 12",
      "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
    ]
  },
  {
    "id": "globe",
    "category": "communication",
    "label": "Globe",
    "labelKo": "웹",
    "tags": [
      "globe",
      "Globe",
      "웹",
      "Communication",
      "소통"
    ],
    "paths": [
      "M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12",
      "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
      "M2 12h20"
    ]
  },
  {
    "id": "link",
    "category": "communication",
    "label": "Link",
    "labelKo": "링크",
    "tags": [
      "link",
      "Link",
      "링크",
      "Communication",
      "소통"
    ],
    "paths": [
      "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    ]
  },
  {
    "id": "share-2",
    "category": "communication",
    "label": "Share",
    "labelKo": "공유",
    "tags": [
      "share 2",
      "Share",
      "공유",
      "Communication",
      "소통"
    ],
    "paths": [
      "M15 5A3 3 0 1 0 21 5A3 3 0 1 0 15 5",
      "M3 12A3 3 0 1 0 9 12A3 3 0 1 0 3 12",
      "M15 19A3 3 0 1 0 21 19A3 3 0 1 0 15 19",
      "M8.59 13.51L15.42 17.49",
      "M15.41 6.51L8.59 10.49"
    ]
  },
  {
    "id": "camera",
    "category": "communication",
    "label": "Camera",
    "labelKo": "카메라",
    "tags": [
      "camera",
      "Camera",
      "카메라",
      "Communication",
      "소통"
    ],
    "paths": [
      "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      "M9 13A3 3 0 1 0 15 13A3 3 0 1 0 9 13"
    ]
  },
  {
    "id": "calendar",
    "category": "communication",
    "label": "Calendar",
    "labelKo": "달력",
    "tags": [
      "calendar",
      "Calendar",
      "달력",
      "Communication",
      "소통"
    ],
    "paths": [
      "M8 2v3",
      "M16 2v3",
      "M5 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3Z",
      "M3 9h18"
    ]
  },
  {
    "id": "clock",
    "category": "communication",
    "label": "Clock",
    "labelKo": "시계",
    "tags": [
      "clock",
      "Clock",
      "시계",
      "Communication",
      "소통"
    ],
    "paths": [
      "M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12",
      "M12 6v6l4 2"
    ]
  }
];

const ICON_BY_ID = new Map(ICONS.map(icon => [icon.id, icon]));
const CATEGORY_BY_ID = new Map(ICON_CATEGORIES.map(category => [category.id, category]));

export function getIconById(id) {
  return ICON_BY_ID.get(id) || ICONS[0];
}

export function getIconCategory(id) {
  return CATEGORY_BY_ID.get(id) || null;
}

export function filterIcons(query = '', category = 'all', favoriteIds = new Set(), recentIds = []) {
  let icons = ICONS;
  if (category === 'favorites') icons = icons.filter(icon => favoriteIds.has(icon.id));
  else if (category === 'recent') {
    const order = new Map(recentIds.map((id, index) => [id, index]));
    icons = icons.filter(icon => order.has(icon.id)).sort((a, b) => order.get(a.id) - order.get(b.id));
  } else if (category !== 'all') icons = icons.filter(icon => icon.category === category);

  const needle = query.trim().toLocaleLowerCase();
  if (!needle) return icons;
  return icons.filter(icon => icon.tags.some(tag => tag.toLocaleLowerCase().includes(needle)));
}

export function iconToSvg(iconOrId, { size = 48, strokeWidth = 1.8, className = '' } = {}) {
  const icon = typeof iconOrId === 'string' ? getIconById(iconOrId) : iconOrId;
  const paths = icon.paths.map(path => `<path d="${path.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}"/>`).join('');
  return `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}
