import { useMemo, useState, type ReactNode } from 'react';
import {
	CATEGORY_ORDER,
	galleryItems,
	type CategoryKey,
	type GalleryItem,
} from '../content/images';
import { SECTIONS } from '../content/site';
import { useColumnCount } from '../hooks/useColumnCount';
import { altOf } from '../i18n/alt';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';
import { Lightbox } from './Lightbox';
import { Photo } from './Photo';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

type Filter = CategoryKey | 'all';

// How many tiles appear at first, and how many each "show more" adds.
const BATCH_SIZE = 12;

const TILE = cx(
	'group relative block w-full cursor-zoom-in',
	'overflow-hidden border-0 bg-bone-2 p-0',
);

const TILE_PHOTO = cx(
	'saturate-[0.94]',
	'transition-[transform,filter] duration-[850ms] ease-brand',
	'group-hover:scale-105 group-hover:saturate-[1.05]',
);

const TILE_BADGE = cx(
	'pointer-events-none absolute bottom-3 right-3',
	'bg-ink/60 px-3 py-2 backdrop-blur-sm',
	'font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.14em]',
	'translate-y-1.5 text-white opacity-0',
	'transition-[opacity,transform] duration-400 ease-brand',
	'group-hover:translate-y-0 group-hover:opacity-100',
	'group-focus-visible:translate-y-0 group-focus-visible:opacity-100',
);

// "3/2" -> 1.5
function ratioToNumber(ratio: string): number {
	const [width, height] = ratio.split('/').map(Number);
	if (!width || !height) return 1;
	return width / height;
}

/*
Spreads tiles across columns, always adding the next one to whichever
column is currently shortest.
*/
function distribute(items: GalleryItem[], columns: number): GalleryItem[][] {
	const buckets: GalleryItem[][] = Array.from({ length: columns }, () => []);
	const heights = new Array<number>(columns).fill(0);

	for (const item of items) {
		let shortest = 0;
		for (let i = 1; i < columns; i += 1) {
			if (heights[i] < heights[shortest]) shortest = i;
		}

		buckets[shortest].push(item);
		heights[shortest] += 1 / ratioToNumber(item.ratio);
	}

	return buckets;
}

export function Gallery() {
	const { t } = useTranslation();
	const columns = useColumnCount();

	const [filter, setFilter] = useState<Filter>('all');
	const [index, setIndex] = useState<number | null>(null);
	const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

	const filtered = useMemo(
		() =>
			filter === 'all'
				? galleryItems
				: galleryItems.filter((i) => i.category === filter),
		[filter],
	);

	const shown = useMemo(
		() => filtered.slice(0, visibleCount),
		[filtered, visibleCount],
	);
	const buckets = useMemo(() => distribute(shown, columns), [shown, columns]);
	const hasMore = visibleCount < filtered.length;

	const indexById = useMemo(
		() => new Map(filtered.map((item, position) => [item.id, position])),
		[filtered],
	);

	function changeFilter(next: Filter) {
		setFilter(next);
		setIndex(null);
		setVisibleCount(BATCH_SIZE);
	}

	return (
		<section id={SECTIONS.gallery} className="pb-[clamp(4.5rem,10vw,8.5rem)]">
			<div className="wrap">
				<Reveal className="mb-[clamp(2.25rem,5vw,3.5rem)]">
					<SectionHeading
						eyebrow={t.gallery.eyebrow}
						title={t.gallery.title}
						intro={t.gallery.intro}
					/>
				</Reveal>

				<Reveal className="mb-8">
					<div
						role="group"
						aria-label={t.gallery.filterGroupLabel}
						className="flex flex-wrap gap-2"
					>
						<FilterButton
							active={filter === 'all'}
							onClick={() => changeFilter('all')}
						>
							{t.gallery.filterAll}
						</FilterButton>
						{CATEGORY_ORDER.map((key) => (
							<FilterButton
								key={key}
								active={filter === key}
								onClick={() => changeFilter(key)}
							>
								{t.offer.categories[key].name}
							</FilterButton>
						))}
					</div>
				</Reveal>

				{filtered.length === 0 ? (
					<p className="py-12 text-center text-muted">{t.gallery.empty}</p>
				) : (
					<>
						<Reveal>
							<div
								className="grid gap-3"
								style={{
									gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
								}}
							>
								{buckets.map((bucket, column) => (
									<div
										key={column}
										className="grid content-start gap-3"
									>
										{bucket.map((item) => (
											<button
												key={item.id}
												type="button"
												onClick={() =>
													setIndex(
														indexById.get(item.id) ?? 0,
													)
												}
												aria-label={t.gallery.zoomLabel(
													altOf(t, item),
												)}
												className={TILE}
											>
												<Photo
													slot={item}
													sizes="(min-width: 64rem) 360px, (min-width: 26rem) 46vw, 92vw"
													className={TILE_PHOTO}
												/>
												<span className={TILE_BADGE}>
													{
														t.offer.categories[
															item.category
														].name
													}
												</span>
											</button>
										))}
									</div>
								))}
							</div>
						</Reveal>

						<div className="mt-10 grid justify-items-center gap-4">
							<p
								aria-live="polite"
								className={cx(
									'font-sans text-xs font-semibold uppercase',
									'tracking-[0.14em] text-muted tabular-nums',
								)}
							>
								{t.gallery.counter(shown.length, filtered.length)}
							</p>
							{hasMore && (
								<Button
									variant="outline"
									onClick={() =>
										setVisibleCount(
											(count) => count + BATCH_SIZE,
										)
									}
								>
									{t.gallery.showMore}
								</Button>
							)}
						</div>
					</>
				)}
			</div>

			<Lightbox
				items={filtered}
				index={index}
				onClose={() => setIndex(null)}
				onChange={setIndex}
			/>
		</section>
	);
}

function FilterButton({
	children,
	active,
	onClick,
}: {
	children: ReactNode;
	active: boolean;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			aria-pressed={active}
			onClick={onClick}
			className={cx(
				'cursor-pointer rounded-full border px-[1.15rem] py-[0.68rem]',
				'font-sans text-xs font-semibold uppercase leading-none tracking-[0.14em]',
				'transition-[color,border-color,background-color] duration-300 ease-brand',
				active
					? 'border-umber bg-umber text-bone'
					: 'border-line bg-transparent text-muted hover:border-umber hover:text-umber',
			)}
		>
			{children}
		</button>
	);
}
