import type { CategoryKey } from '../../content/images';
import { site } from '../../content/site';
import type { Dictionary } from '../types';

// Fallback description, generated from the set a photograph belongs to.
const AUTO_ALT: Record<CategoryKey | 'instagram', string> = {
	women: "Frame from a women's session",
	family: 'Frame from a family session',
	couples: 'Frame from a couples session',
	bridal: 'Frame from a hen party or wedding',
	dance: 'Frame from a dance session',
	instagram: 'Frame from Instagram',
};

export const en: Dictionary = {
	meta: {
		htmlLang: 'en',
		name: 'English',
		short: 'EN',
		documentTitle: `${site.logotype} — photography in Warsaw, Tricity and Ełk`,
		description:
			'Portraits of women, family sessions, couples, hen parties and weddings, and dance photography. Warsaw, the Tricity area and Ełk, Poland.',
	},

	common: {
		skipToContent: 'Skip to content',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		scrollDown: 'Scroll',
		languageLabel: 'Language',
		switchTo: (language) => `Switch to ${language}`,
	},

	nav: {
		offer: 'Sessions',
		gallery: 'Gallery',
		about: 'About',
		testimonials: 'Reviews',
		contact: 'Contact',
	},

	hero: {
		eyebrow: 'Photography · Warsaw · Tricity · Ełk',
		title: 'Photographs you come back to for years',
		lead: 'Portraits of women, family sessions, couples, hen parties and weddings — shot in daylight, with no stiff posing.',
		primaryCta: 'See the gallery',
		secondaryCta: 'Check a date',
	},

	manifesto: {
		eyebrow: 'How I work',
		quote: 'I do not arrange you for the photograph. I give you a reason to be close —',
		quoteAccent: 'and I photograph what happens on its own.',
		body: 'A session is usually a walk, a conversation and a lot of laughing. The frames happen in between — once you stop thinking about the camera.',
	},

	offer: {
		eyebrow: 'Sessions',
		title: 'What we can do together',
		intro: 'The five kinds of session I shoot most often. Each one is priced individually — tell me what you have in mind and I will come back with a date and a quote.',
		categories: {
			women: {
				name: 'Portraits of women',
				description:
					'Portrait and boudoir sessions. For yourself, at your own pace.',
			},
			family: {
				name: 'Family',
				description:
					'Outdoors or at your place. The children do not have to sit still.',
			},
			couples: {
				name: 'Couples',
				description:
					'Engagement shoots and sessions for two, in any season.',
			},
			bridal: {
				name: 'Hen parties and weddings',
				description:
					'The hen party and full coverage of the wedding day, unposed throughout.',
			},
			dance: {
				name: 'Dance',
				description:
					'Dancers, sport, personal projects. Studio or industrial spaces.',
			},
		},
	},

	gallery: {
		eyebrow: 'Gallery',
		title: 'Portfolio',
		intro: 'Pick a category or scroll through everything. Click a photo to enlarge it.',
		filterGroupLabel: 'Filter the gallery',
		filterAll: 'Everything',
		empty: 'There are no photographs in this category yet.',
		zoomLabel: (alt) => `Enlarge: ${alt}`,
		showMore: 'Show more',
		counter: (shown, total) =>
			`${shown} of ${total} ${total === 1 ? 'photo' : 'photos'}`,
	},

	lightbox: {
		label: 'Photo preview',
		close: 'Close preview',
		previous: 'Previous photo',
		next: 'Next photo',
	},

	about: {
		eyebrow: 'About',
		title: site.fullName,
		lead: 'Hi! I am Paula. I photograph emotion — so that years from now you can come back to a picture and feel exactly that day again.',
		body: 'It started when my phone stopped being enough and painting with light pulled me in for good. During a session what matters most to me is the rapport and an easy atmosphere — only then do the photographs look like you.',
		signature: site.logotype,
		// PLACEHOLDER — sample figures, to confirm or remove.
		facts: [
			{ value: '5', label: 'kinds of session' },
			{ value: '100%', label: 'natural light' },
			{ value: '14', label: 'days to delivery' },
		],
	},

	testimonials: {
		eyebrow: 'Reviews',
		title: 'What my clients say',
		badge: 'Content to be filled in',
		// PLACEHOLDER — structure is ready, copy to be replaced with real quotes.
		items: [
			{
				quote: 'Space for a real review — paste two or three sentences from a client message here. Ideally one that says how she felt during the session.',
				author: 'First name and initial',
				context: 'Family session · 2025',
			},
			{
				quote: 'A second review. Specifics work well: how long the session ran, how quickly she got the photos, what surprised her.',
				author: 'First name and initial',
				context: 'Hen party · 2025',
			},
			{
				quote: 'A third review. If you have permission, add a name and the kind of session — anonymous quotes build far less trust.',
				author: 'First name and initial',
				context: 'Couple session · 2024',
			},
		],
	},

	ctaBand: {
		title: 'Let us turn your day into something you will come back to',
		lead: 'Write a few sentences about what you want to capture. I reply within a day.',
		action: 'Get in touch',
	},

	instagram: {
		eyebrow: site.instagramHandle,
		title: 'Latest frames',
		intro: 'New sessions go up on Instagram first.',
		action: 'Follow on Instagram',
		tileLabel: (alt) => `${alt} — open Instagram`,
	},

	contact: {
		eyebrow: 'Contact',
		title: 'Tell me what you want to capture',
		intro: 'I usually reply within a day. If you already have a date, include it.',
		form: {
			name: 'Name',
			namePlaceholder: 'What should I call you?',
			email: 'Email',
			emailPlaceholder: 'you@email.com',
			sessionType: 'Kind of session',
			sessionTypePlaceholder: 'Choose…',
			date: 'Approximate date',
			datePlaceholder: 'e.g. June 2026',
			message: 'Message',
			messagePlaceholder:
				'Tell me briefly what you have in mind — the place, the mood, how many of you.',
			submit: 'Send message',
			note: 'In the finished version this form will send through EmailJS — no backend needed.',
			notWired: 'The form is not connected yet. Please write directly to',
		},
		sessionTypes: [
			'Portrait / boudoir',
			'Family',
			'Couple',
			'Hen party or wedding',
			'Dance',
			'Not sure yet',
		],
		channels: {
			emailLabel: 'Email',
			instagramLabel: 'Instagram',
			areaLabel: 'Area',
			areaValue: 'Warsaw, the Tricity area, Ełk and around',
			responseLabel: 'Response time',
			responseValue: 'Usually within 24 hours',
		},
	},

	footer: {
		description:
			'Family, wedding and portrait photography. Warsaw, the Tricity area and Ełk.',
		siteHeading: 'Site',
		contactHeading: 'Contact',
	},

	/* Descriptions of what is actually in the frame, so a screen reader and a
     search engine get content rather than a slot number. */
	imageAlt: {
		'hero-desktop': 'Newlyweds embracing on a lakeshore at dusk',
		'hero-mobile': 'Newlyweds on the beach, vertical frame',

		'offer-women': 'Woman in a blazer and jeans, full-length studio portrait',
		'offer-family': 'Two children snuggled together on a checked blanket',
		'offer-couples': 'Couple embracing on the beach in the morning',
		'offer-bridal': 'Bride-to-be with friends by the Neptune fountain in Gdansk',
		'offer-dance': 'Dancer posed on a studio floor',
		'about-portrait': `${site.fullName} holding a camera`,
		'cta-band': 'Couple standing at the shore, looking out to the water',

		'3-galeria/kobiece/martyna-27':
			'Woman leaning on a cream sofa in a warm interior',
		'3-galeria/kobiece/martyna-29':
			'Portrait of a woman by a cream sofa and olive branches',
		'3-galeria/kobiece/martyna-28': 'Woman reclining on a cream sofa',
		'3-galeria/kobiece/martyna-11':
			'Portrait of a long-haired woman against a pale backdrop',
		'3-galeria/kobiece/martyna-16':
			'Woman kneeling on a white platform in the studio',
		'3-galeria/kobiece/martyna-10':
			'Woman sitting on the studio floor, leaning on one hand',
		'3-galeria/kobiece/julia-7':
			'Boudoir portrait — figure with arms raised in a dark studio',
		'3-galeria/kobiece/julia-51':
			'Boudoir portrait — arched figure in side light',
		'3-galeria/kobiece/julia-54':
			'Boudoir portrait — head tilted back, one arm raised',
		'3-galeria/kobiece/julia':
			'Boudoir portrait — figure in profile within a shaft of light',
		'3-galeria/kobiece/julia-50':
			'Boudoir portrait — figure standing side-on against black',

		'3-galeria/pary/ania-kacper-18':
			'Close-up of a couple resting their foreheads together',
		'3-galeria/pary/ania-kacper-6':
			'Couple standing at the edge of the sea, horizontal frame',
		'3-galeria/pary/ania-kacper-10':
			'Couple on the beach, he holds her from behind',
		'3-galeria/pary/ania-kacper-3': 'Couple kissing against the sea',
		'3-galeria/pary/ania-kacper':
			'Couple on the beach, she leans into his shoulder',
		'3-galeria/pary/ania-kacper-9':
			'Couple looking out to sea, seen from behind',

		'3-galeria/panienskie-i-sluby/panienski-22-06-24-15':
			'Bride-to-be with friends by the Neptune fountain in Gdansk',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-8':
			'Group of friends walking through the Gdansk old town',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-28':
			'Bride-to-be with her arms raised above her head',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-12':
			'Hands of the group stacked together in the middle of a circle',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-11':
			'Hen party in pink dresses in the old town',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-23':
			'Bride-to-be in a white dress in front of a gateway',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-16':
			'Bride-to-be leaning on a railing',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-18':
			'Woman seated outside a florist among hydrangeas',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-9':
			'Bride-to-be under falling confetti by the canal',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-10':
			'Group of friends wearing commemorative sashes',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-24':
			'Hen party beside a vintage carousel',

		'3-galeria/rodzinne/asia-i-rodzinka-20':
			'Parents with their two sons on the grass by the house',
		'3-galeria/rodzinne/asia-i-rodzinka-35':
			'Father wheeling the children in a barrow through a sunlit orchard',
		'3-galeria/rodzinne/asia-i-rodzinka-11':
			'Mother and son lying on a checked blanket',
		'3-galeria/rodzinne/asia-i-rodzinka-13': 'Boy watering the beds with a can',
		'3-galeria/rodzinne/asia-i-rodzinka-3': 'Boy blowing bubbles in the garden',
		'3-galeria/rodzinne/asia-i-rodzinka-15':
			'Boy eating watermelon against a rose-covered wall',
		'3-galeria/rodzinne/asia-i-rodzinka-6': 'Boy resting in a hammock',
		'3-galeria/rodzinne/asia-i-rodzinka-2':
			'Boy walking uphill beside an old greenhouse',
		'3-galeria/rodzinne/asia-i-rodzinka-9':
			'Mother and son lying side by side, seen from above',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-9':
			'Maternity session — woman in a white shirt turning to the camera',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-2':
			'Maternity session — full-length frame on the beach at sunset',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-26':
			'Maternity session — woman with a hand in her hair, cream cardigan',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-33':
			'Maternity session — woman looking out to sea',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-38':
			'Maternity session — one arm raised, wind in her hair',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-12':
			'Maternity session — woman with both arms above her head',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-15':
			'Maternity session — hands forming a heart on the bump',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-3':
			'Maternity session — close-up of hands cradling the bump',
	},

	imageAltAuto: (of, index) => `${AUTO_ALT[of]}, no. ${index}`,

	placeholder: {
		label: (alt) => `Photo slot: ${alt}`,
	},
};
