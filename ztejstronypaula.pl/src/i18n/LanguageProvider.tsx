/*
A stored choice wins, then Polish browsers get Polish and everyone else English.
Read as the initial state, so the first paint is already in the right language.
*/

import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext } from './context';
import { dictionaries } from './locales';
import { LANGUAGES, type Language } from './types';

const STORAGE_KEY = 'ztsp:language';

function isLanguage(value: unknown): value is Language {
	return (
		typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value)
	);
}

function detectLanguage(): Language {
	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (isLanguage(stored)) return stored;
	} catch {
		// Private browsing can throw on localStorage access; fall through.
	}

	return window.navigator.language.toLowerCase().startsWith('pl') ? 'pl' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>(detectLanguage);

	const setLanguage = useCallback((next: Language) => {
		setLanguageState(next);
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {
			// Not being able to remember the choice is not worth breaking on.
		}
	}, []);

	const t = dictionaries[language];

	// The lang attribute drives screen readers, hyphenation and search engines, so
	// it has to follow the switcher instead of staying at the index.html value.
	useEffect(() => {
		document.documentElement.lang = t.meta.htmlLang;
		document.title = t.meta.documentTitle;
		document
			.querySelector('meta[name="description"]')
			?.setAttribute('content', t.meta.description);
	}, [t]);

	const value = useMemo(
		() => ({ language, setLanguage, t }),
		[language, setLanguage, t],
	);

	return <LanguageContext value={value}>{children}</LanguageContext>;
}
