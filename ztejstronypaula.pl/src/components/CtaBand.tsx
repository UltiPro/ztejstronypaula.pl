import { ctaBandImage } from '../content/images';
import { SECTIONS } from '../content/site';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';
import { Photo } from './Photo';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export function CtaBand() {
	const { t } = useTranslation();

	return (
		<section
			className={cx(
				'relative isolate grid place-items-center text-center',
				'min-h-[clamp(24rem,62vh,34rem)] overflow-hidden',
				'px-[clamp(1.25rem,5vw,3rem)] py-[clamp(4.5rem,10vw,8.5rem)]',
			)}
		>
			<div className="absolute inset-0 -z-20">
				<Photo slot={ctaBandImage} fill sizes="100vw" position="50% 15%" />
			</div>

			<div aria-hidden="true" className="scrim-cta absolute inset-0 -z-10" />

			<Reveal className="grid max-w-[40ch] justify-items-center gap-6">
				<h2
					className={cx(
						'font-serif text-[clamp(1.9rem,4.6vw,3.1rem)] font-normal',
						'leading-[1.12] tracking-[-0.025em] text-white text-balance',
					)}
				>
					{t.ctaBand.title}
				</h2>
				<p className="max-w-[44ch] text-white/85">{t.ctaBand.lead}</p>
				<Button href={`#${SECTIONS.contact}`} variant="light">
					{t.ctaBand.action}
				</Button>
			</Reveal>
		</section>
	);
}
