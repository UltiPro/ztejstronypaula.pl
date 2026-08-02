/*
Brand constants that read the same in every language.

Anything that gets translated — including the service area, where
"Trójmiasto" becomes "the Tricity area" in English — belongs in the
locale files instead.
*/
export const site = {
	logotype: 'z tej strony Paula',
	fullName: 'Paulina Wójtowicz',
	instagramHandle: '@ztejstronypaula',
	instagramUrl: 'https://www.instagram.com/ztejstronypaula/',
	email: 'ztejstronypaula@gmail.com',
	domain: 'ztejstronypaula.pl',
} as const;

// Section ids, shared by the nav, the anchors and the footer.
export const SECTIONS = {
	top: 'top',
	manifesto: 'manifesto',
	offer: 'offer',
	gallery: 'gallery',
	about: 'about',
	testimonials: 'testimonials',
	contact: 'contact',
} as const;

// Order of the primary navigation.
export const NAV_ITEMS = [
	{ key: 'offer', href: `#${SECTIONS.offer}` },
	{ key: 'gallery', href: `#${SECTIONS.gallery}` },
	{ key: 'about', href: `#${SECTIONS.about}` },
	{ key: 'testimonials', href: `#${SECTIONS.testimonials}` },
	{ key: 'contact', href: `#${SECTIONS.contact}` },
] as const;

export type NavKey = (typeof NAV_ITEMS)[number]['key'];
