import { en, type Copy, type Language } from "./en";
import { zh } from "./zh";

export const locales: Record<Language, Copy> = {
  en,
  zh,
};

export type { Copy, Language };
