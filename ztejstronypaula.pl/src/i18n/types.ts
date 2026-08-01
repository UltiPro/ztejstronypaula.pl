import type { CategoryKey, FixedImageId } from '../content/images';
import type { NavKey } from '../content/site';

export const LANGUAGES = ['pl', 'en'] as const;
export type Language = (typeof LANGUAGES)[number];

/*
The shape every locale must fill.

Missing or misspelled key fails the build instead of silently rendering
nothing in production. Strings taking a value are functions, not templates
with tokens, so the value is checked too.
*/
export type Dictionary = {
	meta: {
		// Value for the lang attribute on <html>.
		htmlLang: string;
		// Language name in its own language, for the switcher.
		name: string;
		short: string;
		documentTitle: string;
		description: string;
	};

	common: {
		skipToContent: string;
		openMenu: string;
		closeMenu: string;
		scrollDown: string;
		languageLabel: string;
		switchTo: (language: string) => string;
	};

	nav: Record<NavKey, string>;

	hero: {
		eyebrow: string;
		title: string;
		lead: string;
		primaryCta: string;
		secondaryCta: string;
	};

	manifesto: {
		eyebrow: string;
		quote: string;
		quoteAccent: string;
		body: string;
	};

	offer: {
		eyebrow: string;
		title: string;
		intro: string;
		categories: Record<CategoryKey, { name: string; description: string }>;
	};

	gallery: {
		eyebrow: string;
		title: string;
		intro: string;
		filterGroupLabel: string;
		filterAll: string;
		empty: string;
		zoomLabel: (alt: string) => string;
		showMore: string;
		// Polish needs three plural forms of "zdjęcie", hence a function.
		counter: (shown: number, total: number) => string;
	};

	lightbox: {
		label: string;
		close: string;
		previous: string;
		next: string;
	};

	about: {
		eyebrow: string;
		title: string;
		lead: string;
		body: string;
		signature: string;
		facts: { value: string; label: string }[];
	};

	testimonials: {
		eyebrow: string;
		title: string;
		badge: string;
		items: { quote: string; author: string; context: string }[];
	};

	ctaBand: {
		title: string;
		lead: string;
		action: string;
	};

	instagram: {
		eyebrow: string;
		title: string;
		intro: string;
		action: string;
		tileLabel: (alt: string) => string;
	};

	contact: {
		eyebrow: string;
		title: string;
		intro: string;
		form: {
			name: string;
			namePlaceholder: string;
			email: string;
			emailPlaceholder: string;
			sessionType: string;
			sessionTypePlaceholder: string;
			date: string;
			datePlaceholder: string;
			message: string;
			messagePlaceholder: string;
			submit: string;
			note: string;
			notWired: string;
		};
		sessionTypes: string[];
		channels: {
			emailLabel: string;
			instagramLabel: string;
			areaLabel: string;
			areaValue: string;
			responseLabel: string;
			responseValue: string;
		};
	};

	footer: {
		description: string;
		siteHeading: string;
		contactHeading: string;
	};

	/*
	Descriptions of the photographs, keyed by image id.
	
	The fixed places are required, so leaving the hero or an offer tile
	undescribed is a compile error. Everything else is optional: a gallery
	photograph can be described by hand under its path, and otherwise falls
	back to `imageAltAuto`.
	*/
	imageAlt: Record<FixedImageId, string> & Partial<Record<string, string>>;

	// Description generated for a photograph nobody described by hand.
	imageAltAuto: (of: CategoryKey | 'instagram', index: number) => string;

	// Shown on placeholders while a slot has no file yet.
	placeholder: { label: (alt: string) => string };
};
