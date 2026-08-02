import { heroDesktop, heroMobile } from '../content/images';
import { SECTIONS } from '../content/site';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';
import { HeroPhoto } from './HeroPhoto';
import { Button } from './ui/Button';

export function Hero() {
	const { t } = useTranslation();

	const hasPhoto = Boolean(heroDesktop.image);

	return (
		<section
			id={SECTIONS.top}
			className="relative isolate grid min-h-svh items-end overflow-hidden"
		>
			<div
				className={cx(
					'absolute inset-0 -z-20',
					hasPhoto && 'animate-slow-zoom',
				)}
			>
				<HeroPhoto desktop={heroDesktop} mobile={heroMobile} />
			</div>

			<div aria-hidden="true" className="scrim-hero absolute inset-0 -z-10" />

			<div
				className={cx(
					'wrap grid w-full justify-items-start gap-6',
					'pb-[clamp(4rem,11vh,7rem)]',
				)}
			>
				<p
					className={cx(
						'font-sans text-xs font-semibold uppercase tracking-[0.2em]',
						'text-white/90 [text-shadow:0_1px_10px_rgb(0_0_0/0.5)]',
					)}
				>
					{t.hero.eyebrow}
				</p>

				<h1
					className={cx(
						'max-w-[15ch] font-serif text-[clamp(2.6rem,7.5vw,5rem)] font-normal',
						'leading-[0.97] tracking-[-0.035em]',
						'text-white [text-shadow:0_2px_26px_rgb(0_0_0/0.42)]',
					)}
				>
					{t.hero.title}
				</h1>

				<p
					className={cx(
						'max-w-[46ch] text-lg leading-relaxed',
						'text-white/95 [text-shadow:0_1px_14px_rgb(0_0_0/0.55)]',
					)}
				>
					{t.hero.lead}
				</p>

				<div className="mt-2 flex flex-wrap gap-3">
					<Button href={`#${SECTIONS.gallery}`}>
						{t.hero.primaryCta}
					</Button>
					<Button href={`#${SECTIONS.contact}`} variant="light">
						{t.hero.secondaryCta}
					</Button>
				</div>
			</div>

			<a
				href={`#${SECTIONS.manifesto}`}
				className={cx(
					'absolute bottom-6 left-1/2 z-10 -translate-x-1/2',
					'grid justify-items-center gap-2',
					'font-sans text-xs font-semibold uppercase tracking-[0.2em]',
					'text-white/80 no-underline transition-colors hover:text-white',
				)}
			>
				<span>{t.common.scrollDown}</span>
				<span
					aria-hidden="true"
					className={cx(
						'animate-pulse-line block h-10 w-px',
						'bg-linear-to-b from-white/75 to-transparent',
					)}
				/>
			</a>
		</section>
	);
}
