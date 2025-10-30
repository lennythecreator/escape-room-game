export interface ImagePromptSpec {
  // Absolute path used by objectives (e.g., "/images/operating-theater.jpg")
  imagePath: string;
  // A concise, directive prompt for an image generation model
  prompt: string;
  // Optional negative prompt to avoid unwanted elements
  negativePrompt?: string;
  // Optional extra style hints to keep visual continuity across rooms
  styleHints?: string[];
  // Suggested aspect ratio for background scenes
  aspectRatio?: "16:9" | "4:3" | "1:1";
}

// Prompts for all image paths referenced in objectives that don't exist in /public yet
// Based on room titles, intros, and stories in lib/objectives.ts
export const imagePrompts: Record<string, ImagePromptSpec> = {
  "/Room6-2.png": {
    imagePath: "/Room6-2.png",
    prompt:
      "Patient Ward, late-evening hospital lighting with a calm, eerie noir vibe. A small wall cabinet of labeled drawers stands slightly open; labels show bold uppercase pronouns like HE and SHE. A minimal puzzle interface glow highlights the ‘HE’ drawer without showing text overlays. Subtle canine detective motif (tiny collar tag or paw-print sticker) as an easter egg, but no characters present. Clean composition, readable props, no blood or gore. Cinematic background artwork suitable for a game scene.",
    negativePrompt:
      "people, blood, gore, medical procedures, gurneys in use, on-screen UI text, watermark, logo",
    styleHints: [
      "moody, whimsical-noir",
      "soft volumetric light",
      "clean game background",
      "crisp labels without legible real brand names"
    ],
    aspectRatio: "16:9",
  },

  "/images/operating-theater.jpg": {
    imagePath: "/images/operating-theater.jpg",
    prompt:
      "Operating Theater with vintage surgical lamps casting cool light. A metal tray holds neatly arranged syringes and letter tiles forming the word HERE (unsorted). A chalk circle or subtle wall mark indicates ‘You are here’ without text, using a pictorial marker. Clinical yet family-friendly: no patients, no gore. Slight noir charm; optional terrier detective sticker on a cabinet. Background composition focused on environment and props, no UI overlay.",
    negativePrompt:
      "blood, surgery in progress, people, excessive grunge, text UI, watermark",
    styleHints: [
      "clean, cinematic hospital set",
      "cool tones with gentle contrast",
      "story-driven props",
      "game-ready background"
    ],
    aspectRatio: "16:9",
  },

  "/images/isolation-chamber.jpg": {
    imagePath: "/images/isolation-chamber.jpg",
    prompt:
      "Isolation Chamber with glass walls and a control pedestal featuring three distinct levers labeled symbolically for AND, OR, BUT (use icons/symbols, not readable text). A scribble on the glass hints at ‘longest thread’ and ‘URN’ via abstract glyphs or cable routing, not words. Industrial sci-fi mood, soft reflections, no characters. Include cables and a faint glow that suggests logic puzzles. Family-friendly; no hazards.",
    negativePrompt:
      "people, legible real text, weapons, debris clutter, watermark",
    styleHints: [
      "sleek industrial sci-fi",
      "glass reflections",
      "symbolic labeling (iconographic)",
      "moody yet readable props"
    ],
    aspectRatio: "16:9",
  },

  "/images/records-room.jpg": {
    imagePath: "/images/records-room.jpg",
    prompt:
      "Records Room lined with filing cabinets and a vintage labeler. Two prominent drawers are opposed like choices; symbolic arrows and iconography convey FROM vs TO without readable text. Nearby, a small sorter shows two article tokens (THE, A) depicted as emblem cards with stylized letters, suggestive but not real text. Warm desk lamp glow, dust motes, mild noir tone. No people. Clean composition for puzzle gameplay background.",
    negativePrompt:
      "people, mess, torn papers, brand logos, watermark, on-screen UI text",
    styleHints: [
      "vintage archival aesthetic",
      "warm key light + cool fill",
      "clean puzzle staging",
      "subtle noir whimsy"
    ],
    aspectRatio: "16:9",
  },

  "/images/server-room.jpg": {
    imagePath: "/images/server-room.jpg",
    prompt:
      "Server Room / Control Nexus with glowing racks and a central console. The console shows two illuminated tiles symbolizing TRUE and FALSE (use iconography/shape coding rather than readable words) and a final sentence assembly strip made of token tiles, preserving original casing style without actual legible text. Cool cyber lighting, slight fog, no characters. Clean, modern, dramatic but readable. Suitable as a game background, no UI overlays.",
    negativePrompt:
      "people, legible real text, messy cables, hazard signage, watermark",
    styleHints: [
      "modern cyber-noir",
      "teal and indigo glow",
      "clean geometry",
      "game environment plate"
    ],
    aspectRatio: "16:9",
  },
};

export function getImagePrompt(path: string): ImagePromptSpec | undefined {
  return imagePrompts[path];
}


