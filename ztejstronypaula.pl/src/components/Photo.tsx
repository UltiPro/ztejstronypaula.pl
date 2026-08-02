import type { ImageSlot } from '../content/images';
import { altOf } from '../i18n/alt';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';

type Props = {
	slot: ImageSlot;
	/*
	Fills the parent instead of reserving space by ratio.
	The parent needs `relative`. Used by the hero and the CTA band. 
	*/
	fill?: boolean;
	// The hero loads immediately and at high priority.
	priority?: boolean;
	// Small tiles (Instagram).
	compact?: boolean;
	/*
	How wide the photo will be drawn, in CSS terms — the browser needs this
	before layout to pick a variant from `srcSet`.
	*/
	sizes?: string;
	className?: string;
	position?: string;
};

// A photograph, or the space reserved for one.
export function Photo({
	slot,
	fill,
	priority,
	compact,
	sizes,
	className,
	position,
}: Props) {
	const { t } = useTranslation();
	const alt = altOf(t, slot);
	const ratio = fill ? undefined : slot.ratio;

	if (slot.image) {
		return (
			<img
				src={slot.image.src}
				srcSet={slot.image.srcSet}
				sizes={sizes}
				width={slot.image.width}
				height={slot.image.height}
				alt={alt}
				loading={priority ? 'eager' : 'lazy'}
				decoding={priority ? 'sync' : 'async'}
				fetchPriority={priority ? 'high' : 'auto'}
				style={{ aspectRatio: ratio, objectPosition: position }}
				className={cx(
					'h-full w-full object-cover',
					fill && 'absolute inset-0',
					className,
				)}
			/>
		);
	}

	return (
		<div
			role="img"
			aria-label={t.placeholder.label(alt)}
			style={{ aspectRatio: ratio }}
			className={cx(
				'placeholder-hatch grid place-items-center bg-bone-2 px-3 text-center',
				'outline-1 -outline-offset-1 outline-dashed outline-line',
				fill ? 'absolute inset-0 h-full w-full' : 'w-full',
				className,
			)}
		>
			<div className="flex flex-col items-center gap-1.5">
				<FrameMark />
				{!compact && (
					<>
						<span className="font-mono text-[0.6875rem] tracking-wide text-umber">
							{slot.id}
						</span>
						<span className="font-mono text-[0.625rem] leading-relaxed text-muted/80">
							{slot.ratio.replace('/', ':')} · {slot.target}
						</span>
					</>
				)}
			</div>
		</div>
	);
}

function FrameMark() {
	return (
		<svg
			width="26"
			height="26"
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
			className="text-terracotta/45"
		>
			<path
				d="M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="square"
			/>
		</svg>
	);
}
