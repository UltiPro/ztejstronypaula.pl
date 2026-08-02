import { NAV_ITEMS, SECTIONS, site } from '../content/site';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';

const HEADING = cx(
	'm-0 mb-4 font-sans text-xs font-semibold uppercase',
	'tracking-[0.18em] text-clay',
);
const LINK = cx(
	'text-bone/80 no-underline',
	'transition-colors duration-300 hover:text-clay',
);

export function Footer() {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<footer className="bg-forest pb-8 pt-[clamp(3rem,6vw,4.5rem)] text-sm text-bone/70">
			<div className="wrap">
				<div
					className={cx(
						'grid gap-[clamp(1.75rem,4vw,3.5rem)] pb-10',
						'border-b border-bone/15',
						'sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]',
					)}
				>
					<div>
						<a
							href={`#${SECTIONS.top}`}
							className={cx(
								'mb-3 block font-serif text-[1.55rem]',
								'tracking-[-0.02em] text-bone no-underline',
							)}
						>
							{site.logotype}
						</a>
						<p className="max-w-[34ch]">{t.footer.description}</p>
					</div>

					<nav aria-label={t.footer.siteHeading}>
						<h3 className={HEADING}>{t.footer.siteHeading}</h3>
						<ul className="m-0 grid list-none gap-2.5 p-0">
							{NAV_ITEMS.map((item) => (
								<li key={item.href}>
									<a href={item.href} className={LINK}>
										{t.nav[item.key]}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div>
						<h3 className={HEADING}>{t.footer.contactHeading}</h3>
						<ul className="m-0 grid list-none gap-2.5 p-0">
							<li>
								<a href={`mailto:${site.email}`} className={LINK}>
									{site.email}
								</a>
							</li>
							<li>
								<a
									href={site.instagramUrl}
									target="_blank"
									rel="noopener noreferrer"
									className={LINK}
								>
									{site.instagramHandle}
								</a>
							</li>
							<li>{t.contact.channels.areaValue}</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-wrap justify-between gap-3 pt-7 text-xs text-bone/55">
					<span>
						© {year} {site.fullName}
					</span>
					<span>{site.domain}</span>
				</div>
			</div>
		</footer>
	);
}
