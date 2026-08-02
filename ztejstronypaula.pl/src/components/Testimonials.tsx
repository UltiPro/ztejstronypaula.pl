import { SECTIONS } from '../content/site';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function Testimonials() {
	const { t } = useTranslation();

	return (
		<section id={SECTIONS.testimonials} className="section">
			<div className="wrap">
				<Reveal className="mb-[clamp(2.25rem,5vw,3.5rem)]">
					<SectionHeading
						eyebrow={t.testimonials.eyebrow}
						title={t.testimonials.title}
						className="justify-items-start"
					>
						<p
							className={cx(
								'inline-flex items-center gap-1.5 px-3 py-2',
								'rounded-full border border-dashed border-terracotta',
								'font-sans text-xs font-semibold uppercase tracking-[0.1em]',
								'text-terracotta',
							)}
						>
							{t.testimonials.badge}
						</p>
					</SectionHeading>
				</Reveal>

				<Reveal>
					<div className="grid gap-[clamp(1rem,2.2vw,1.75rem)] lg:grid-cols-3">
						{t.testimonials.items.map((item, i) => (
							<blockquote
								key={i}
								className={cx(
									'grid content-start gap-[1.1rem]',
									'border border-line bg-bone-2',
									'p-[clamp(1.5rem,2.6vw,2.1rem)]',
								)}
							>
								<span
									aria-hidden="true"
									className="font-serif text-[2.6rem] leading-[0.6] text-terracotta"
								>
									&ldquo;
								</span>
								<p className="text-muted">{item.quote}</p>
								<footer className="grid gap-0.5 border-t border-line pt-[0.9rem]">
									<b className="text-sm font-semibold text-ink">
										{item.author}
									</b>
									<span className="text-xs uppercase tracking-[0.1em] text-muted">
										{item.context}
									</span>
								</footer>
							</blockquote>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
