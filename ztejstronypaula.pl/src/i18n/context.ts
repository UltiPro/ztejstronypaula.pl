import { createContext } from 'react';
import type { Dictionary, Language } from './types';

type LanguageContextValue = {
	language: Language;
	setLanguage: (language: Language) => void;
	// The active dictionary. Accessed as `t.hero.title` — no string keys.
	t: Dictionary;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
