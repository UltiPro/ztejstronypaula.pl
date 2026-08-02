import { instagramTiles } from '../content/images';
import { site } from '../content/site';
import { altOf } from '../i18n/alt';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';
import { Photo } from './Photo';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function InstagramStrip() {
	const { t } = useTranslation();

	return (
		<section className="section section-tight bg-forest">
			<div className="wrap">
				<Reveal className="mb-9 flex flex-wrap items-end justify-between gap-6">
					<SectionHeading
						onDark
						eyebrow={t.instagram.eyebrow}
						title={t.instagram.title}
						intro={t.instagram.intro}
					/>

					<Button href={site.instagramUrl} variant="onForest" external>
						{t.instagram.action}
					</Button>
				</Reveal>

				<Reveal>
					<div
						className={cx(
							'grid grid-cols-3 gap-[clamp(0.4rem,1vw,0.75rem)]',
							'sm:grid-cols-4 lg:grid-cols-6',
						)}
					>
						{instagramTiles.map((tile) => (
							<a
								key={tile.id}
								href={site.instagramUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={t.instagram.tileLabel(altOf(t, tile))}
								className="group relative block aspect-square overflow-hidden bg-black/20"
							>
								<Photo
									slot={tile}
									compact
									className={cx(
										'h-full transition-[transform,opacity] duration-800 ease-brand',
										'group-hover:scale-[1.08] group-hover:opacity-80',
									)}
								/>
								<span
									className={cx(
										'absolute inset-0 bg-forest/45 opacity-0',
										'transition-opacity duration-450 ease-brand',
										'group-hover:opacity-100',
									)}
								/>
							</a>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
