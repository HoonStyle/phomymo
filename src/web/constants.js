/**
 * Application Constants
 * Single source of truth for all magic numbers and configuration
 */

// =============================================================================
// ZOOM
// =============================================================================
export const ZOOM = {
  MIN: 0.25,
  MAX: 3,
  STEP: 0.25,
  DEFAULT: 1,
};

// =============================================================================
// TEXT ELEMENTS
// =============================================================================
export const TEXT = {
  MIN_FONT_SIZE: 6,
  MAX_FONT_SIZE: 200,
  DEFAULT_FONT_SIZE: 24,
};

// =============================================================================
// IMAGE ELEMENTS
// =============================================================================
export const IMAGE = {
  MIN_SCALE: 10,
  MAX_SCALE: 200,
  DEFAULT_SCALE: 100,
};

// =============================================================================
// ELEMENT DIMENSIONS
// =============================================================================
export const ELEMENT = {
  MIN_WIDTH: 10,
  MIN_HEIGHT: 10,
};

// =============================================================================
// LABEL DIMENSIONS
// =============================================================================
export const LABEL = {
  MIN_WIDTH: 10,
  MAX_WIDTH: 100,
  MIN_HEIGHT: 10,
  MAX_HEIGHT: 200,
};

// =============================================================================
// MULTI-LABEL ROLL CONFIGURATION
// =============================================================================
export const MULTI_LABEL = {
  MIN_LABELS_ACROSS: 1,
  MAX_LABELS_ACROSS: 8,
  DEFAULT_LABELS_ACROSS: 4,
  MIN_GAP: 0,
  MAX_GAP: 10,
  DEFAULT_GAP: 2,
};

// =============================================================================
// PRINT SETTINGS
// =============================================================================
export const PRINT = {
  MIN_COPIES: 1,
  MAX_COPIES: 99,
  DEFAULT_COPIES: 1,
  DEFAULT_DENSITY: 6,
  DEFAULT_FEED: 32,
};

// =============================================================================
// HISTORY (UNDO/REDO)
// =============================================================================
export const HISTORY = {
  MAX_SIZE: 50,
};

// =============================================================================
// ALIGNMENT GUIDES
// =============================================================================
export const GUIDES = {
  SNAP_THRESHOLD: 5, // pixels
};

// =============================================================================
// SELECTION HANDLES
// =============================================================================
export const HANDLES = {
  SIZE: 8,
  HIT_AREA_PADDING: 2,
  ROTATION_DISTANCE: 25,
  ROTATION_RADIUS: 6,
};

// =============================================================================
// TOUCH GESTURES
// =============================================================================
export const TOUCH = {
  LONG_PRESS_DURATION_MS: 500,
  LONG_PRESS_MOVE_TOLERANCE: 10,
  PINCH_MIN_DISTANCE: 50,
  DOUBLE_TAP_DELAY_MS: 300,
};

// =============================================================================
// BLE TRANSPORT
// =============================================================================
export const BLE = {
  // UUIDs are canonical 128-bit strings (not 0xff00-style numbers): numeric
  // UUIDs break Web Bluetooth shims on iOS (Bluefy fails to parse the
  // requestDevice payload), while canonical strings work everywhere.
  SERVICE_UUID: '0000ff00-0000-1000-8000-00805f9b34fb',
  WRITE_CHAR_UUID: '0000ff02-0000-1000-8000-00805f9b34fb',
  NOTIFY_CHAR_UUID: '0000ff03-0000-1000-8000-00805f9b34fb',
  // Alternative service UUIDs for different printer models (PM-241, etc.)
  ALT_SERVICE_UUIDS: [
    '0000ff00-0000-1000-8000-00805f9b34fb', // Standard Phomemo
    '0000ffe0-0000-1000-8000-00805f9b34fb', // Common thermal printer service
    '0000ae30-0000-1000-8000-00805f9b34fb', // Some label printers
    '49535343-fe7d-4ae5-8fa9-9fafd205e455', // ISS (Issc) service
  ],
  CHUNK_SIZE: 128,
  CHUNK_DELAY_MS: 20,
  MAX_RETRIES: 1,
  INITIAL_RETRY_DELAY_MS: 300,
};

// =============================================================================
// STORAGE KEYS
// =============================================================================
export const STORAGE_KEYS = {
  DEVICE_MAPPING: 'phomymo_device_models',
  DESIGNS: 'phomymo_designs',
  SETTINGS: 'phomymo_settings',
  MULTI_LABEL_PRESETS: 'phomymo_multi_label_presets',
  LOCAL_FONTS_ENABLED: 'phomymo_local_fonts_enabled',
  CUSTOM_PRINTERS: 'phomymo_custom_printers',
  USER_TEMPLATES: 'phomymo_user_templates',
  ICON_FAVORITES: 'phomymo_icon_favorites',
  ICON_RECENTS: 'phomymo_icon_recents',
};

// =============================================================================
// LABEL SIZE PRESETS
// =============================================================================

// M-series printers (M110, M220, etc.) - width x height in mm
export const M_SERIES_LABEL_SIZES = {
  '12x40': { width: 12, height: 40 },
  '15x30': { width: 15, height: 30 },
  '20x30': { width: 20, height: 30 },
  '25x50': { width: 25, height: 50 },
  '30x20': { width: 30, height: 20 },
  '30x40': { width: 30, height: 40 },
  '40x30': { width: 40, height: 30 },
  '40x60': { width: 40, height: 60 },
  '50x25': { width: 50, height: 25 },
  '50x30': { width: 50, height: 30 },
  '50x80': { width: 50, height: 80 },
  '60x40': { width: 60, height: 40 },
};

// Round/circle labels for M-series printers - diameter in mm
export const M_SERIES_ROUND_LABELS = {
  '20mm Round': { width: 20, height: 20, round: true },
  '30mm Round': { width: 30, height: 30, round: true },
  '40mm Round': { width: 40, height: 40, round: true },
  '50mm Round': { width: 50, height: 50, round: true },
};

// D-series printers (D30, D110) - max width is 12-15mm
// User designs in landscape, printer rotates output
export const D_SERIES_LABEL_SIZES = {
  '40x12': { width: 40, height: 12 },
  '30x12': { width: 30, height: 12 },
  '22x12': { width: 22, height: 12 },
  '12x12': { width: 12, height: 12 },
  '30x14': { width: 30, height: 14 },
  '22x14': { width: 22, height: 14 },
  '40x15': { width: 40, height: 15 },
  '30x15': { width: 30, height: 15 },
};

// D-series continuous tape sizes (no die-cut gaps)
export const D_SERIES_CONTINUOUS_SIZES = {
  '40x12 cont': { width: 40, height: 12, continuous: true },
  '30x12 cont': { width: 30, height: 12, continuous: true },
  '22x12 cont': { width: 22, height: 12, continuous: true },
  '40x15 cont': { width: 40, height: 15, continuous: true },
  '30x15 cont': { width: 30, height: 15, continuous: true },
};

// Round/circle labels for D-series printers - diameter in mm
export const D_SERIES_ROUND_LABELS = {
  '14mm Round': { width: 14, height: 14, round: true },
};

// Tape printers (P12, A30) - continuous tape with variable widths
// Height = tape width (12mm, 14mm, 15mm), Width = label length
export const TAPE_LABEL_SIZES = {
  // 12mm tape
  '40x12': { width: 40, height: 12, tapeWidth: 12 },
  '30x12': { width: 30, height: 12, tapeWidth: 12 },
  '22x12': { width: 22, height: 12, tapeWidth: 12 },
  '12x12': { width: 12, height: 12, tapeWidth: 12 },
  // 14mm tape
  '40x14': { width: 40, height: 14, tapeWidth: 14 },
  '30x14': { width: 30, height: 14, tapeWidth: 14 },
  '22x14': { width: 22, height: 14, tapeWidth: 14 },
  '14x14': { width: 14, height: 14, tapeWidth: 14 },
  // 15mm tape
  '40x15': { width: 40, height: 15, tapeWidth: 15 },
  '30x15': { width: 30, height: 15, tapeWidth: 15 },
  '22x15': { width: 22, height: 15, tapeWidth: 15 },
  '15x15': { width: 15, height: 15, tapeWidth: 15 },
};

// PM-241 series printers (PM-241-BT) - 4-inch (102mm) shipping label printer
// Standard shipping label sizes in mm
export const PM241_LABEL_SIZES = {
  '102x152': { width: 102, height: 152 },  // 4x6" - standard shipping label
  '102x102': { width: 102, height: 102 },  // 4x4" - square label
  '102x76': { width: 102, height: 76 },    // 4x3" - smaller shipping label
  '102x51': { width: 102, height: 51 },    // 4x2" - return address label
  '100x150': { width: 100, height: 150 },  // Common metric size
  '100x100': { width: 100, height: 100 },  // Square metric
};

// =============================================================================
// DEFAULT ELEMENT VALUES
// =============================================================================
export const DEFAULTS = {
  text: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    textAlign: 'center',
    verticalAlign: 'top',
    color: 'black',
    background: 'transparent',
    noWrap: false,
    clipOverflow: false,
    autoScale: false,
  },
  image: {
    lockAspectRatio: true,
  },
  barcode: {
    format: 'CODE128',
  },
  qr: {
    errorCorrection: 'M',
  },
  shape: {
    shapeType: 'rectangle',
    fill: 'none',
    stroke: 'black',
    strokeWidth: 2,
    cornerRadius: 0,
  },
};

// =============================================================================
// SHAPE CONSTRAINTS
// =============================================================================
export const SHAPE = {
  MIN_STROKE_WIDTH: 1,
  MAX_STROKE_WIDTH: 20,
  DEFAULT_STROKE_WIDTH: 2,
  MIN_CORNER_RADIUS: 0,
  MAX_CORNER_RADIUS: 50,
};

// =============================================================================
// BARCODE VALIDATION
// =============================================================================
export const BARCODE = {
  MAX_LENGTH: {
    CODE128: 80,
    EAN13: 13,
    CODE39: 43,
    UPC: 12,
  },
  PATTERNS: {
    EAN13: /^\d{0,13}$/,
    UPC: /^\d{0,12}$/,
    CODE39: /^[A-Z0-9\-. $/+%]*$/i,
    CODE128: /^[\x00-\x7F]*$/, // ASCII only
  },
};

// =============================================================================
// QR CODE CONSTRAINTS
// =============================================================================
export const QR = {
  MAX_DATA_LENGTH: 2953, // QR version 40, error correction L
};

// =============================================================================
// CANVAS RENDERING
// =============================================================================
export const CANVAS = {
  SELECTION_COLOR: '#3b82f6',
  SELECTION_LINE_WIDTH: 1,
  GUIDE_COLOR: '#3b82f6',
  GUIDE_LINE_WIDTH: 1,
  BACKGROUND_PATTERN_SIZE: 10,
};

// =============================================================================
// AVAILABLE FONTS
// =============================================================================
export const FONTS = [
  { group: 'sans', label: 'Inter', value: 'Inter, sans-serif' },
  { group: 'sans', label: 'Roboto', value: 'Roboto, sans-serif' },
  { group: 'sans', label: 'Open Sans', value: 'Open Sans, sans-serif' },
  { group: 'sans', label: 'Lato', value: 'Lato, sans-serif' },
  { group: 'sans', label: 'Montserrat', value: 'Montserrat, sans-serif' },
  { group: 'sans', label: 'Oswald', value: 'Oswald, sans-serif' },
  { group: 'sans', label: 'Poppins', value: 'Poppins, sans-serif' },
  { group: 'sans', label: 'Nunito', value: 'Nunito, sans-serif' },
  { group: 'sans', label: 'Raleway', value: 'Raleway, sans-serif' },
  { group: 'sans', label: 'Work Sans', value: 'Work Sans, sans-serif' },
  { group: 'sans', label: 'DM Sans', value: 'DM Sans, sans-serif' },
  { group: 'sans', label: 'Manrope', value: 'Manrope, sans-serif' },
  { group: 'sans', label: 'Space Grotesk', value: 'Space Grotesk, sans-serif' },
  { group: 'sans', label: 'Arial', value: 'Arial, sans-serif' },
  { group: 'sans', label: 'Helvetica', value: 'Helvetica, sans-serif' },
  { group: 'sans', label: 'IBM Plex Sans', value: 'IBM Plex Sans, sans-serif' },
  { group: 'sans', label: 'Verdana', value: 'Verdana, sans-serif' },
  { group: 'sans', label: 'Trebuchet', value: 'Trebuchet MS, sans-serif' },
  { group: 'serif', label: 'Playfair Display', value: 'Playfair Display, serif' },
  { group: 'serif', label: 'Merriweather', value: 'Merriweather, serif' },
  { group: 'serif', label: 'Lora', value: 'Lora, serif' },
  { group: 'serif', label: 'Libre Baskerville', value: 'Libre Baskerville, serif' },
  { group: 'serif', label: 'Cormorant Garamond', value: 'Cormorant Garamond, serif' },
  { group: 'serif', label: 'DM Serif Display', value: 'DM Serif Display, serif' },
  { group: 'serif', label: 'Bodoni Moda', value: 'Bodoni Moda, serif' },
  { group: 'serif', label: 'Georgia', value: 'Georgia, serif' },
  { group: 'serif', label: 'Times', value: 'Times New Roman, serif' },
  { group: 'display', label: 'Bebas Neue', value: 'Bebas Neue, sans-serif' },
  { group: 'display', label: 'Anton', value: 'Anton, sans-serif' },
  { group: 'display', label: 'Abril Fatface', value: 'Abril Fatface, serif' },
  { group: 'display', label: 'Lobster', value: 'Lobster, cursive' },
  { group: 'display', label: 'Pacifico', value: 'Pacifico, cursive' },
  { group: 'display', label: 'Caveat', value: 'Caveat, cursive' },
  { group: 'display', label: 'Permanent Marker', value: 'Permanent Marker, cursive' },
  { group: 'display', label: 'Cinzel', value: 'Cinzel, serif' },
  { group: 'display', label: 'Josefin Sans', value: 'Josefin Sans, sans-serif' },
  { group: 'display', label: 'Quicksand', value: 'Quicksand, sans-serif' },
  { group: 'display', label: 'Comfortaa', value: 'Comfortaa, sans-serif' },
  { group: 'mono', label: 'Roboto Mono', value: 'Roboto Mono, monospace' },
  { group: 'mono', label: 'Source Code Pro', value: 'Source Code Pro, monospace' },
  { group: 'mono', label: 'IBM Plex Mono', value: 'IBM Plex Mono, monospace' },
  { group: 'mono', label: 'Courier', value: 'Courier New, monospace' },
  { group: 'mono', label: 'JetBrains Mono', value: 'JetBrains Mono, monospace' },
  { group: 'sans', label: 'Roboto Condensed', value: 'Roboto Condensed, sans-serif' },
  { group: 'sans', label: 'Urbanist', value: 'Urbanist, sans-serif' },
  { group: 'sans', label: 'Sora', value: 'Sora, sans-serif' },
  { group: 'sans', label: 'Outfit', value: 'Outfit, sans-serif' },
  { group: 'sans', label: 'Lexend', value: 'Lexend, sans-serif' },
  { group: 'sans', label: 'Plus Jakarta Sans', value: 'Plus Jakarta Sans, sans-serif' },
  { group: 'sans', label: 'Bricolage Grotesque', value: 'Bricolage Grotesque, sans-serif' },
  { group: 'serif', label: 'Roboto Slab', value: 'Roboto Slab, serif' },
  { group: 'serif', label: 'Fraunces', value: 'Fraunces, serif' },
  { group: 'display', label: 'Montserrat Alternates', value: 'Montserrat Alternates, sans-serif' },
  { group: 'koreanSans', label: 'Jua', value: 'Jua, sans-serif' },
  { group: 'koreanDisplay', label: 'Gugi', value: 'Gugi, sans-serif' },
  { group: 'koreanSans', label: 'Gulim', value: 'Gulim, sans-serif' },
  { group: 'koreanDisplay', label: 'Dokdo', value: 'Dokdo, sans-serif' },
  { group: 'koreanHand', label: 'Gaegu', value: 'Gaegu, cursive' },
  { group: 'koreanSans', label: 'Orbit', value: 'Orbit, sans-serif' },
  { group: 'koreanSans', label: 'Dotum', value: 'Dotum, sans-serif' },
  { group: 'koreanSerif', label: 'Batang', value: 'Batang, serif' },
  { group: 'koreanSans', label: 'Dongle', value: 'Dongle, sans-serif' },
  { group: 'koreanSerif', label: 'Gungsuh', value: 'Gungsuh, serif' },
  { group: 'koreanSans', label: 'Stylish', value: 'Stylish, sans-serif' },
  { group: 'koreanSans', label: 'Do Hyeon', value: 'Do Hyeon, sans-serif' },
  { group: 'koreanSerif', label: 'Hahmlet', value: 'Hahmlet, serif' },
  { group: 'koreanSans', label: 'GulimChe', value: 'GulimChe, sans-serif' },
  { group: 'koreanDisplay', label: 'Cute Font', value: 'Cute Font, sans-serif' },
  { group: 'koreanSans', label: 'Gothic A1', value: 'Gothic A1, sans-serif' },
  { group: 'koreanHand', label: 'Hi Melody', value: 'Hi Melody, cursive' },
  { group: 'koreanSans', label: 'DotumChe', value: 'DotumChe, sans-serif' },
  { group: 'koreanSans', label: 'Asta Sans', value: 'Asta Sans, sans-serif' },
  { group: 'koreanDisplay', label: 'Yeon Sung', value: 'Yeon Sung, sans-serif' },
  { group: 'koreanSans', label: 'Gasoek One', value: 'Gasoek One, sans-serif' },
  { group: 'koreanSans', label: '42dot Sans', value: '42dot Sans, sans-serif' },
  { group: 'koreanSerif', label: 'Song Myung', value: 'Song Myung, serif' },
  { group: 'koreanSerif', label: 'BatangChe', value: 'BatangChe, serif' },
  { group: 'koreanSans', label: 'Sunflower', value: 'Sunflower, sans-serif' },
  { group: 'koreanDisplay', label: 'Moirai One', value: 'Moirai One, sans-serif' },
  { group: 'koreanDisplay', label: 'Poor Story', value: 'Poor Story, sans-serif' },
  { group: 'koreanDisplay', label: 'Single Day', value: 'Single Day, sans-serif' },
  { group: 'koreanSerif', label: 'Diphylleia', value: 'Diphylleia, serif' },
  { group: 'koreanSans', label: 'Gowun Dodum', value: 'Gowun Dodum, sans-serif' },
  { group: 'koreanSerif', label: 'GungsuhChe', value: 'GungsuhChe, serif' },
  { group: 'koreanSans', label: 'Noto Sans KR', value: 'Noto Sans KR, sans-serif' },
  { group: 'koreanSerif', label: 'Noto Serif KR', value: 'Noto Serif KR, serif' },
  { group: 'koreanSerif', label: 'Gowun Batang', value: 'Gowun Batang, serif' },
  { group: 'koreanDisplay', label: 'Bagel Fat One', value: 'Bagel Fat One, sans-serif' },
  { group: 'koreanHand', label: 'Gamja Flower', value: 'Gamja Flower, cursive' },
  { group: 'koreanSans', label: 'Nanum Gothic', value: 'Nanum Gothic, sans-serif' },
  { group: 'koreanHand', label: 'East Sea Dokdo', value: 'East Sea Dokdo, cursive' },
  { group: 'koreanSans', label: 'Black Han Sans', value: 'Black Han Sans, sans-serif' },
  { group: 'koreanDisplay', label: 'Kirang Haerang', value: 'Kirang Haerang, sans-serif' },
  { group: 'koreanSans', label: 'IBM Plex Sans KR', value: 'IBM Plex Sans KR, sans-serif' },
  { group: 'koreanSerif', label: 'Nanum Myeongjo', value: 'Nanum Myeongjo, serif' },
  { group: 'koreanSerif', label: 'Grandiflora One', value: 'Grandiflora One, serif' },
  { group: 'koreanHand', label: 'Nanum Pen Script', value: 'Nanum Pen Script, cursive' },
  { group: 'koreanHand', label: 'Nanum Brush Script', value: 'Nanum Brush Script, cursive' },
  { group: 'koreanMono', label: 'Nanum Gothic Coding', value: 'Nanum Gothic Coding, monospace' },
  { group: 'koreanDisplay', label: 'Black And White Picture', value: 'Black And White Picture, sans-serif' },
];

// =============================================================================
// BORDER PRESETS
// =============================================================================
export const BORDER_PRESETS = [
  { group: 'classic', label: 'Classic Thin', value: 'classic-thin' },
  { group: 'classic', label: 'Classic Medium', value: 'classic-medium' },
  { group: 'classic', label: 'Classic Bold', value: 'classic-bold' },
  { group: 'classic', label: 'Double Thin', value: 'double-thin' },
  { group: 'classic', label: 'Double Bold', value: 'double-bold' },
  { group: 'classic', label: 'Triple Line', value: 'triple-line' },
  { group: 'classic', label: 'Inset Fine', value: 'inset-fine' },
  { group: 'classic', label: 'Inset Bold', value: 'inset-bold' },
  { group: 'classic', label: 'Rounded Thin', value: 'rounded-thin' },
  { group: 'classic', label: 'Rounded Double', value: 'rounded-double' },
  { group: 'classic', label: 'Pill Frame', value: 'pill-frame' },
  { group: 'dash', label: 'Dashed Fine', value: 'dashed-fine' },
  { group: 'dash', label: 'Dashed Medium', value: 'dashed-medium' },
  { group: 'dash', label: 'Dashed Wide', value: 'dashed-wide' },
  { group: 'dash', label: 'Dotted Fine', value: 'dotted-fine' },
  { group: 'dash', label: 'Dotted Bold', value: 'dotted-bold' },
  { group: 'dash', label: 'Dash Dot', value: 'dash-dot' },
  { group: 'dash', label: 'Long Dash', value: 'long-dash' },
  { group: 'dash', label: 'Railroad', value: 'railroad' },
  { group: 'dash', label: 'Perforated', value: 'perforated' },
  { group: 'paper', label: 'Ticket Stub', value: 'ticket' },
  { group: 'paper', label: 'Coupon', value: 'coupon' },
  { group: 'paper', label: 'Postage Stamp', value: 'postage' },
  { group: 'paper', label: 'Rubber Stamp', value: 'stamp' },
  { group: 'paper', label: 'Notebook', value: 'notebook' },
  { group: 'paper', label: 'Ledger', value: 'ledger' },
  { group: 'paper', label: 'Blueprint', value: 'blueprint' },
  { group: 'paper', label: 'Index Card', value: 'index-card' },
  { group: 'corner', label: 'Corner Brackets', value: 'corner-brackets' },
  { group: 'corner', label: 'Rounded Corners', value: 'corner-round' },
  { group: 'corner', label: 'Square Corners', value: 'corner-square' },
  { group: 'corner', label: 'Crop Marks', value: 'crop-marks' },
  { group: 'corner', label: 'Art Deco Steps', value: 'deco-step' },
  { group: 'corner', label: 'Art Deco Diamond', value: 'deco-diamond' },
  { group: 'corner', label: 'Art Deco Fan', value: 'deco-fan' },
  { group: 'corner', label: 'Art Deco Sunburst', value: 'deco-sunburst' },
  { group: 'corner', label: 'Vintage Single', value: 'vintage-single' },
  { group: 'corner', label: 'Vintage Double', value: 'vintage-double' },
  { group: 'corner', label: 'Victorian Corners', value: 'victorian-corners' },
  { group: 'decorative', label: 'Small Scallop', value: 'scallop-small' },
  { group: 'decorative', label: 'Large Scallop', value: 'scallop-large' },
  { group: 'decorative', label: 'Zigzag', value: 'zigzag' },
  { group: 'decorative', label: 'Sawtooth', value: 'sawtooth' },
  { group: 'decorative', label: 'Confetti', value: 'confetti' },
  { group: 'decorative', label: 'Stars', value: 'stars' },
  { group: 'decorative', label: 'Hearts', value: 'hearts' },
  { group: 'decorative', label: 'Botanical', value: 'botanical' },
  { group: 'utility', label: 'Industrial', value: 'industrial' },
  { group: 'utility', label: 'Caution Stripe', value: 'caution' },
  { group: 'utility', label: 'Circuit Board', value: 'circuit' },
  { group: 'silhouette', label: 'Tag Left', value: 'tag-left' },
  { group: 'silhouette', label: 'Tag Right', value: 'tag-right' },
  { group: 'silhouette', label: 'Price Tag', value: 'price-tag' },
  { group: 'silhouette', label: 'Hang Tag', value: 'hang-tag' },
  { group: 'silhouette', label: 'Notched Label', value: 'notch-label' },
  { group: 'silhouette', label: 'Top Tab', value: 'tab-top' },
  { group: 'silhouette', label: 'Bottom Tab', value: 'tab-bottom' },
  { group: 'silhouette', label: 'Left Tab', value: 'tab-left' },
  { group: 'silhouette', label: 'Right Tab', value: 'tab-right' },
  { group: 'silhouette', label: 'Cut Corners', value: 'cut-corners' },
  { group: 'silhouette', label: 'Hexagon Label', value: 'hex-label' },
  { group: 'silhouette', label: 'Octagon Label', value: 'octagon-label' },
  { group: 'badge', label: 'Round Badge', value: 'badge-round' },
  { group: 'badge', label: 'Oval Badge', value: 'badge-oval' },
  { group: 'badge', label: 'Capsule Badge', value: 'badge-capsule' },
  { group: 'badge', label: 'Shield Badge', value: 'badge-shield' },
  { group: 'badge', label: 'Crest Badge', value: 'badge-crest' },
  { group: 'badge', label: 'Diamond Badge', value: 'badge-diamond' },
  { group: 'badge', label: 'Cloud Badge', value: 'badge-cloud' },
  { group: 'badge', label: 'Starburst Badge', value: 'badge-burst' },
  { group: 'badge', label: 'Double Seal', value: 'badge-seal' },
  { group: 'badge', label: 'Medallion', value: 'badge-medallion' },
  { group: 'arch', label: 'Classic Arch', value: 'arch-top' },
  { group: 'arch', label: 'Double Arch', value: 'arch-double' },
  { group: 'arch', label: 'Arch Window', value: 'arch-window' },
  { group: 'arch', label: 'Scalloped Arch', value: 'arch-scallop' },
  { group: 'arch', label: 'Dome', value: 'dome' },
  { group: 'arch', label: 'Tombstone', value: 'tombstone' },
  { group: 'arch', label: 'Keyhole', value: 'keyhole' },
  { group: 'arch', label: 'Cathedral', value: 'cathedral' },
  { group: 'ribbon', label: 'Classic Ribbon', value: 'ribbon-classic' },
  { group: 'ribbon', label: 'Folded Ribbon', value: 'ribbon-folded' },
  { group: 'ribbon', label: 'Ribbon Tails', value: 'ribbon-tail' },
  { group: 'ribbon', label: 'Wave Banner', value: 'ribbon-wave' },
  { group: 'ribbon', label: 'Point Banner', value: 'banner-point' },
  { group: 'ribbon', label: 'Left Flag', value: 'flag-left' },
  { group: 'ribbon', label: 'Right Flag', value: 'flag-right' },
  { group: 'ribbon', label: 'Pennant', value: 'pennant' },
  { group: 'media', label: 'Round Speech', value: 'speech-round' },
  { group: 'media', label: 'Square Speech', value: 'speech-square' },
  { group: 'media', label: 'Cloud Speech', value: 'speech-cloud' },
  { group: 'media', label: 'Polaroid', value: 'polaroid' },
  { group: 'media', label: 'Photo Corners', value: 'photo-corners' },
  { group: 'media', label: 'Film Frame', value: 'film-frame' },
  { group: 'organic', label: 'Organic Blob', value: 'blob' },
  { group: 'organic', label: 'Pebble', value: 'pebble' },
  { group: 'organic', label: 'Leaf', value: 'leaf' },
  { group: 'organic', label: 'Flower', value: 'flower' },
  { group: 'organic', label: 'Four-Leaf Clover', value: 'clover' },
  { group: 'organic', label: 'Round Postage', value: 'postage-round' },
];

// =============================================================================
// SHAPE TYPES
// =============================================================================
export const SHAPE_TYPES = [
  { value: 'rectangle', label: 'Rectangle' },
  { value: 'ellipse', label: 'Ellipse' },
  { value: 'triangle', label: 'Triangle' },
  { value: 'line', label: 'Line' },
  { value: 'border', label: 'Border / Frame' },
];

// =============================================================================
// BARCODE FORMATS
// =============================================================================
export const BARCODE_FORMATS = [
  { value: 'CODE128', label: 'Code 128' },
  { value: 'EAN13', label: 'EAN-13' },
  { value: 'CODE39', label: 'Code 39' },
  { value: 'UPC', label: 'UPC-A' },
];
