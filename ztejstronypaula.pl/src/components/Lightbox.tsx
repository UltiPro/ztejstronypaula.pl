import { useCallback, useEffect, useRef, type ReactNode, type Ref } from 'react';
import type { GalleryItem } from '../content/images';
import { useScrollLock } from '../hooks/useScrollLock';
import { altOf } from '../i18n/alt';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';
import { Photo } from './Photo';

type Props = {
	items: GalleryItem[];
	index: number | null;
	onClose: () => void;
	onChange: (index: number) => void;
};

// "3/2" -> 1.5. Needed to derive the frame width from a height limit.
function ratioToNumber(ratio: string): number {
	const [width, height] = ratio.split('/').map(Number);
	if (!width || !height) return 1;
	return width / height;
}

export function Lightbox({ items, index, onClose, onChange }: Props) {
	const { t } = useTranslation();
	const open = index !== null;
	const dialogRef = useRef<HTMLDivElement | null>(null);
	const closeRef = useRef<HTMLButtonElement | null>(null);

	useScrollLock(open);

	const goNext = useCallback(() => {
		if (index === null || items.length === 0) return;
		onChange((index + 1) % items.length);
	}, [index, items.length, onChange]);

	const goPrevious = useCallback(() => {
		if (index === null || items.length === 0) return;
		onChange((index - 1 + items.length) % items.length);
	}, [index, items.length, onChange]);

	useEffect(() => {
		if (!open) return;

		const previouslyFocused = document.activeElement as HTMLElement | null;
		closeRef.current?.focus();

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
				return;
			}
			if (event.key === 'ArrowLeft') {
				goPrevious();
				return;
			}
			if (event.key === 'ArrowRight') {
				goNext();
				return;
			}
			if (event.key !== 'Tab') return;

			const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
				'button:not([disabled])',
			);
			if (!focusable || focusable.length === 0) return;

			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		};

		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('keydown', onKeyDown);
			previouslyFocused?.focus();
		};
	}, [open, onClose, goNext, goPrevious]);

	const item = index !== null ? items[index] : undefined;
	const ratio = item ? ratioToNumber(item.ratio) : 1;
	const position = (index ?? 0) + 1;

	return (
		<div
			ref={dialogRef}
			role="dialog"
			aria-modal="true"
			aria-label={t.lightbox.label}
			onClick={(event) => {
				if (event.target === event.currentTarget) onClose();
			}}
			className={cx(
				'fixed inset-0 z-90 grid place-items-center',
				'bg-[rgb(20_18_17/0.95)] p-[clamp(1rem,4vw,3rem)]',
				'transition-opacity duration-400 ease-brand',
				open ? 'visible opacity-100' : 'invisible opacity-0',
			)}
		>
			{item && (
				<>
					<div
						className="shadow-[0_30px_80px_rgb(0_0_0/0.6)]"
						style={{
							aspectRatio: item.ratio,
							width: `min(90vw, 60rem, ${(80 * ratio).toFixed(2)}vh)`,
						}}
					>
						<Photo
							slot={item}
							sizes="(min-width: 68rem) 960px, 90vw"
							className="h-full"
						/>
					</div>

					<span
						className={cx(
							'pointer-events-none absolute left-1/2 -translate-x-1/2',
							'bottom-[clamp(1rem,3vw,2rem)]',
							'font-sans text-xs font-semibold uppercase tracking-[0.18em]',
							'text-white/70',
						)}
					>
						{altOf(t, item)} · {position} / {items.length}
					</span>
				</>
			)}

			<LightboxButton
				ref={closeRef}
				label={t.lightbox.close}
				onClick={onClose}
				className="right-[clamp(1rem,3vw,2rem)] top-[clamp(1rem,3vw,2rem)]"
			>
				&#10005;
			</LightboxButton>

			<LightboxButton
				label={t.lightbox.previous}
				onClick={goPrevious}
				className="left-[clamp(0.6rem,3vw,2rem)] top-1/2 -mt-6"
			>
				&#8249;
			</LightboxButton>

			<LightboxButton
				label={t.lightbox.next}
				onClick={goNext}
				className="right-[clamp(0.6rem,3vw,2rem)] top-1/2 -mt-6"
			>
				&#8250;
			</LightboxButton>
		</div>
	);
}

function LightboxButton({
	ref,
	children,
	label,
	onClick,
	className,
}: {
	ref?: Ref<HTMLButtonElement>;
	children: ReactNode;
	label: string;
	onClick: () => void;
	className: string;
}) {
	return (
		<button
			ref={ref}
			type="button"
			aria-label={label}
			onClick={onClick}
			className={cx(
				'absolute grid h-12 w-12 cursor-pointer place-items-center rounded-full',
				'border border-white/30 bg-white/10 text-xl text-white',
				'transition-[background-color,transform] duration-300 ease-brand',
				'hover:scale-105 hover:bg-white/25',
				className,
			)}
		>
			{children}
		</button>
	);
}
