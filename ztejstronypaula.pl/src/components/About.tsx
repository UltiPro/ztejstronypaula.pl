import { aboutPortrait } from '../content/images';
import { SECTIONS } from '../content/site';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';
import { Photo } from './Photo';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function About() {
	const { t } = useTranslation();

	return (
		<section id={SECTIONS.about} className="section bg-bone-2">
			<div className="wrap">
				<div
					className={cx(
						'grid items-center gap-[clamp(2rem,5vw,4.5rem)]',
						'md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]',
					)}
				>
					<Reveal className="max-w-[22rem] md:max-w-none">
						<div className="relative">
							<Photo
								slot={aboutPortrait}
								sizes="(min-width: 48rem) 480px, min(22rem, 90vw)"
								className="relative z-10"
								position="50% 22%"
							/>
							<span
								aria-hidden="true"
								className={cx(
									'absolute -bottom-3.5 -right-3.5',
									'h-[58%] w-[58%] border border-terracotta',
								)}
							/>
						</div>
					</Reveal>

					<Reveal className="grid gap-5">
						<SectionHeading
							eyebrow={t.about.eyebrow}
							title={t.about.title}
						/>

						<p className="max-w-[46ch] text-lg leading-[1.75] text-muted">
							{t.about.lead}
						</p>
						<p className="max-w-[46ch] text-muted">{t.about.body}</p>

						<p className="font-serif text-[1.6rem] tracking-[-0.01em] text-terracotta">
							{t.about.signature}
						</p>

						<ul className="m-0 flex list-none flex-wrap border-t border-line p-0">
							{t.about.facts.map((fact, i) => (
								<li
									key={fact.label}
									className={cx(
										'grid gap-0.5 py-4 pr-[1.1rem] sm:pr-[1.6rem]',
										i < t.about.facts.length - 1 &&
											'mr-[1.1rem] border-r border-line sm:mr-[1.6rem]',
									)}
								>
									<b
										className={cx(
											'font-serif text-2xl font-normal leading-none',
											'tabular-nums text-umber sm:text-[1.75rem]',
										)}
									>
										{fact.value}
									</b>
									<span className="text-xs uppercase tracking-[0.12em] text-muted">
										{fact.label}
									</span>
								</li>
							))}
						</ul>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
