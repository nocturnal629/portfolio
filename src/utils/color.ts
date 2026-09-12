interface RGB {
  r: number;
  g: number;
  b: number;
}

const LIGHT_PAGE_BG: RGB = { r: 220, g: 229, b: 240 }; // #dce5f0
const DARK_PAGE_BG: RGB = { r: 15, g: 23, b: 42 }; // #0f172a
const MIN_CONTRAST = 4.5;

export function hexToRgb(hex: string): RGB {
  const clean = hex.startsWith('#') ? hex.slice(1) : hex;
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;

  return {
    r: parseInt(full.substring(0, 2), 16),
    g: parseInt(full.substring(2, 4), 16),
    b: parseInt(full.substring(4, 6), 16),
  };
}

export function rgbToHex({ r, g, b }: RGB): string {
  const toHex = (n: number) => Math.round(Math.min(255, Math.max(0, n))).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbToHsl({ r, g, b }: RGB): [number, number, number] {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  const delta = max - min;

  let h = 0;
  let s = 0;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));

    switch (max) {
      case rn:
        h = ((gn - bn) / delta) % 6;
        break;
      case gn:
        h = (bn - rn) / delta + 2;
        break;
      default:
        h = (rn - gn) / delta + 4;
    }

    h *= 60;
    if (h < 0) h += 360;
  }

  return [h, s, l];
}

function hslToRgb(h: number, s: number, l: number): RGB {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let [rp, gp, bp] = [0, 0, 0];
  if (h < 60) [rp, gp, bp] = [c, x, 0];
  else if (h < 120) [rp, gp, bp] = [x, c, 0];
  else if (h < 180) [rp, gp, bp] = [0, c, x];
  else if (h < 240) [rp, gp, bp] = [0, x, c];
  else if (h < 300) [rp, gp, bp] = [x, 0, c];
  else [rp, gp, bp] = [c, 0, x];

  return { r: (rp + m) * 255, g: (gp + m) * 255, b: (bp + m) * 255 };
}

function channelLuminance(c: number): number {
  const cs = c / 255;
  return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
}

function relativeLuminance({ r, g, b }: RGB): number {
  return 0.2126 * channelLuminance(r) + 0.7152 * channelLuminance(g) + 0.0722 * channelLuminance(b);
}

function contrastRatio(a: RGB, b: RGB): number {
  const lA = relativeLuminance(a);
  const lB = relativeLuminance(b);
  const lighter = Math.max(lA, lB);
  const darker = Math.min(lA, lB);
  return (lighter + 0.05) / (darker + 0.05);
}

function adjustForContrast(hex: string, bg: RGB, direction: 'darken' | 'lighten'): RGB {
  const [h, s, l] = rgbToHsl(hexToRgb(hex));
  let candidateL = l;

  for (let i = 0; i < 45; i++) {
    const candidate = hslToRgb(h, s, candidateL);
    if (contrastRatio(candidate, bg) >= MIN_CONTRAST) break;
    candidateL = direction === 'darken'
      ? Math.max(0.08, candidateL - 0.02)
      : Math.min(0.92, candidateL + 0.02);
  }

  return hslToRgb(h, s, candidateL);
}

// Darkens `hex` (preserving hue/saturation) until it reads clearly against the light-mode page background.
export function getReadableColorOnLight(hex: string): RGB {
  return adjustForContrast(hex, LIGHT_PAGE_BG, 'darken');
}

// Lightens `hex` (preserving hue/saturation) until it reads clearly against the dark-mode page background.
export function getReadableColorOnDark(hex: string): RGB {
  return adjustForContrast(hex, DARK_PAGE_BG, 'lighten');
}
