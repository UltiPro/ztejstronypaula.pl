import type { ImageSlot } from '../content/images';
import { altOf } from '../i18n/alt';
import { useTranslation } from '../i18n/useTranslation';
import { Photo } from './Photo';

type Props = {
	desktop: ImageSlot;
	mobile: ImageSlot;
	// Width at which the layout switches frames — Tailwind's `md`.
	breakpoint?: string;
};

/*
The hero photograph, desktop and mobile frame in one component.

The design needs two different crops, and `<picture>` is the mechanism built for
exactly that: the browser weighs the `media` condition before it chooses, so only
one of the two files is ever requested.
*/
export function HeroPhoto({ desktop, mobile, breakpoint = '48rem' }: Props) {
	const { t } = useTranslation();

	if (!desktop.image || !mobile.image) {
		return (
			<>
				<div className="absolute inset-0 hidden md:block">
					<Photo
						slot={desktop}
						fill
						priority
						sizes="100vw"
						position="50% 42%"
					/>
				</div>
				<div className="absolute inset-0 md:hidden">
					<Photo
						slot={mobile}
						fill
						priority
						sizes="100vw"
						position="50% 38%"
					/>
				</div>
			</>
		);
	}

	return (
		<picture>
			<source
				media={`(min-width: ${breakpoint})`}
				srcSet={desktop.image.srcSet}
				sizes="100vw"
				width={desktop.image.width}
				height={desktop.image.height}
			/>
			<img
				src={mobile.image.src}
				srcSet={mobile.image.srcSet}
				sizes="100vw"
				width={mobile.image.width}
				height={mobile.image.height}
				alt={altOf(t, desktop)}
				// The first thing on screen, so it decides the LCP score — the browser
				// has to fetch and paint it before it gets to anything else.
				loading="eager"
				decoding="sync"
				fetchPriority="high"
				className="absolute inset-0 h-full w-full object-cover"
				style={{ objectPosition: '50% 42%' }}
			/>
		</picture>
	);
}
