/*
Image slots — everything about a photo except its language-dependent
description, which lives in the locale files.
*/
import {
	IMAGES,
	type GalleryCategory,
	type GeneratedPhoto,
} from './generated/images.generated';

/*
Places that hold exactly one photograph. Their description belongs to the place
rather than to the file, so swapping the hero photo does not drop its alt text.
*/
export const FIXED_IMAGE_IDS = [
	'hero-desktop',
	'hero-mobile',
	'offer-women',
	'offer-family',
	'offer-couples',
	'offer-bridal',
	'offer-dance',
	'about-portrait',
	'cta-band',
] as const;

export type FixedImageId = (typeof FIXED_IMAGE_IDS)[number];

// A fixed place, or the path of a photo that comes and goes.
export type ImageId = FixedImageId | (string & {});

/*
The five kinds of session Paula shoots. Defined by the pipeline, because the
folder names in `images/` are what actually decides them.
*/
export type CategoryKey = GalleryCategory;

// Order in which the offer cards and gallery filters appear.
export const CATEGORY_ORDER: CategoryKey[] = [
	'women',
	'family',
	'couples',
	'bridal',
	'dance',
];

export type PhotoSource = {
	src: string;
	srcSet: string;
	width: number;
	height: number;
};

export type ImageSlot = {
	id: ImageId;
	// CSS aspect ratio, e.g. "3/2". Reserves the box so layout never jumps.
	ratio: string;
	// Target widths, shown on the placeholder while the slot is empty.
	target: string;
	// Present once the photo has been generated.
	image?: PhotoSource;
	// Set where the description is generated: from which set, and which frame.
	auto?: { of: CategoryKey | 'instagram'; index: number };
};

// Turns a manifest entry into addresses the browser can fetch.
function source(photo: GeneratedPhoto): PhotoSource {
	const base = import.meta.env.BASE_URL;
	return {
		src: `${base}${photo.path}-${photo.widths[photo.widths.length - 1]}.webp`,
		srcSet: photo.widths
			.map((w) => `${base}${photo.path}-${w}.webp ${w}w`)
			.join(', '),
		width: photo.width,
		height: photo.height,
	};
}

// A fixed place, filled or still waiting.
function fixed(
	id: FixedImageId,
	photo: GeneratedPhoto | null,
	ratio: string,
	target: string,
): ImageSlot {
	return photo
		? { id, ratio: photo.ratio, target, image: source(photo) }
		: { id, ratio, target };
}

/* ---------------------------------------------------------------- hero */

export const heroDesktop = fixed(
	'hero-desktop',
	IMAGES.hero.landscape,
	'3/2',
	'1280 · 1920 · 2560 · 3840 px',
);
export const heroMobile = fixed(
	'hero-mobile',
	IMAGES.hero.portrait,
	'9/16',
	'1080 · 1440 px',
);

/* --------------------------------------------------------------- offer */

const OFFER_TARGET = '500 · 1000 px';

export const offerSlots: Record<CategoryKey, ImageSlot> = {
	women: fixed('offer-women', IMAGES.offer.women, '2/3', OFFER_TARGET),
	family: fixed('offer-family', IMAGES.offer.family, '2/3', OFFER_TARGET),
	couples: fixed('offer-couples', IMAGES.offer.couples, '2/3', OFFER_TARGET),
	bridal: fixed('offer-bridal', IMAGES.offer.bridal, '2/3', OFFER_TARGET),
	dance: fixed('offer-dance', IMAGES.offer.dance, '2/3', OFFER_TARGET),
};

/* --------------------------------------------------------- about / cta */

export const aboutPortrait = fixed(
	'about-portrait',
	IMAGES.about,
	'4/5',
	'600 · 1200 px',
);
export const ctaBandImage = fixed(
	'cta-band',
	IMAGES.cta,
	'2/1',
	'1280 · 1920 · 2880 px',
);

/* ------------------------------------------------------------- gallery */

export type GalleryItem = ImageSlot & { category: CategoryKey };

const GALLERY_TARGET = '400 · 800 · 1200 · 1600 · 2400 px';

export const galleryItems: GalleryItem[] = interleave(
	CATEGORY_ORDER.flatMap((category) =>
		IMAGES.gallery[category].map((photo, index) => ({
			id: photo.id,
			ratio: photo.ratio,
			target: GALLERY_TARGET,
			image: source(photo),
			auto: { of: category, index: index + 1 },
			category,
		})),
	),
);

function interleave(items: GalleryItem[]): GalleryItem[] {
	const queues = CATEGORY_ORDER.map((key) =>
		items.filter((item) => item.category === key),
	);
	const out: GalleryItem[] = [];

	for (let round = 0; out.length < items.length; round += 1) {
		for (const queue of queues) {
			if (round < queue.length) out.push(queue[round]);
		}
	}

	return out;
}

/* ----------------------------------------------------------- instagram */

const INSTAGRAM_TARGET = '300 · 600 px';

// How many empty squares to hold open while the folder is still empty.
const INSTAGRAM_PLACEHOLDERS = 6;

export const instagramTiles: ImageSlot[] = IMAGES.instagram.length
	? IMAGES.instagram.map((photo, index) => ({
			id: photo.id,
			ratio: photo.ratio,
			target: INSTAGRAM_TARGET,
			image: source(photo),
			auto: { of: 'instagram', index: index + 1 },
		}))
	: Array.from({ length: INSTAGRAM_PLACEHOLDERS }, (_, index) => ({
			id: `6-instagram/${index + 1}`,
			ratio: '1/1',
			target: INSTAGRAM_TARGET,
			auto: { of: 'instagram' as const, index: index + 1 },
		}));
