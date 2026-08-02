import { CATEGORY_ORDER, offerSlots } from '../content/images';
import { SECTIONS } from '../content/site';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';
import { Photo } from './Photo';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const CARD = cx(
	'group relative isolate block overflow-hidden bg-bone-2 no-underline',
	'min-w-[68%] snap-start sm:min-w-0',
);

const CARD_PHOTO = cx(
	'saturate-[0.94]',
	'transition-[transform,filter] duration-[850ms] ease-brand',
	'group-hover:scale-[1.055] group-hover:saturate-[1.04]',
);

const CARD_NAME = cx(
	'font-serif text-xl leading-tight',
	'tracking-[-0.01em] text-white',
);

const CARD_DESCRIPTION = cx(
	'overflow-hidden text-xs leading-relaxed text-white/90',
	'transition-[max-height,opacity] duration-600 ease-brand',
	'sm:max-h-0 sm:opacity-0',
	'sm:group-hover:max-h-28 sm:group-hover:opacity-100',
	'sm:group-focus-visible:max-h-28 sm:group-focus-visible:opacity-100',
);

export function Offer() {
	const { t } = useTranslation();

	return (
		<section id={SECTIONS.offer} className="section">
			<div className="wrap">
				<Reveal className="mb-[clamp(2.25rem,5vw,3.5rem)]">
					<SectionHeading
						eyebrow={t.offer.eyebrow}
						title={t.offer.title}
						intro={t.offer.intro}
					/>
				</Reveal>

				<Reveal>
					<div
						className={cx(
							'no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2',
							'-mx-[clamp(1.25rem,5vw,3rem)] px-[clamp(1.25rem,5vw,3rem)]',
							'sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0',
							'lg:grid-cols-5',
						)}
					>
						{CATEGORY_ORDER.map((key) => {
							const category = t.offer.categories[key];

							return (
								<a
									key={key}
									href={`#${SECTIONS.contact}`}
									className={CARD}
								>
									<Photo
										slot={offerSlots[key]}
										sizes="(min-width: 64rem) 216px, (min-width: 40rem) 33vw, 68vw"
										className={CARD_PHOTO}
									/>

									<span
										aria-hidden="true"
										className="scrim-card absolute inset-0"
									/>

									<span className="absolute inset-x-0 bottom-0 grid gap-1.5 p-4">
										<span className={CARD_NAME}>
											{category.name}
										</span>
										<span className={CARD_DESCRIPTION}>
											{category.description}
										</span>
									</span>
								</a>
							);
						})}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
