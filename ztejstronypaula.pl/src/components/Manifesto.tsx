import { SECTIONS } from '../content/site';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';
import { Reveal } from './ui/Reveal';

export function Manifesto() {
	const { t } = useTranslation();

	return (
		<section
			id={SECTIONS.manifesto}
			className="section section-tight border-b border-line"
		>
			<div className="wrap">
				<Reveal className="grid max-w-[60ch] gap-7">
					<p
						className={cx(
							'font-sans text-xs font-semibold uppercase',
							'tracking-[0.2em] text-terracotta',
						)}
					>
						{t.manifesto.eyebrow}
					</p>

					<p
						className={cx(
							'font-serif text-[clamp(1.45rem,3.2vw,2.15rem)]',
							'leading-[1.32] tracking-[-0.02em] text-umber text-balance',
						)}
					>
						{t.manifesto.quote}{' '}
						<span className="text-terracotta">
							{t.manifesto.quoteAccent}
						</span>
					</p>

					<p className="text-lg leading-[1.75] text-muted">
						{t.manifesto.body}
					</p>
				</Reveal>
			</div>
		</section>
	);
}
