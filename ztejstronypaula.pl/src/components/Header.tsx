import { useEffect, useState } from 'react';
import { NAV_ITEMS, SECTIONS, site } from '../content/site';
import { useScrollLock } from '../hooks/useScrollLock';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';
import { Button } from './ui/Button';
import { LanguageSwitcher } from './ui/LanguageSwitcher';

type Props = {
	// Whether the hero has been scrolled past — drives the header's look.
	heroPassed: boolean;
};

const NAV_LINK = cx(
	'relative block py-1.5 no-underline',
	'font-sans text-xs font-semibold uppercase tracking-[0.16em]',
	'transition-colors duration-500 ease-brand',
	'after:absolute after:inset-x-0 after:bottom-0 after:h-px',
	'after:origin-left after:scale-x-0 after:bg-current',
	'after:transition-transform after:duration-400 after:ease-brand',
	'hover:after:scale-x-100',
);

const MENU_LINK = cx(
	'block border-b border-line py-[0.28em]',
	'font-serif text-[clamp(2rem,9vw,2.9rem)] tracking-[-0.02em]',
	'text-umber no-underline transition-colors hover:text-terracotta',
);

export function Header({ heroPassed }: Props) {
	const { t } = useTranslation();
	const [menuOpen, setMenuOpen] = useState(false);

	useScrollLock(menuOpen);

	useEffect(() => {
		if (!menuOpen) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setMenuOpen(false);
		};

		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [menuOpen]);

	const darkOnLight = heroPassed || menuOpen;

	return (
		<>
			<a
				href="#content"
				className={cx(
					'sr-only focus:not-sr-only',
					'focus:fixed focus:left-4 focus:top-4 focus:z-70',
					'focus:rounded-[2px] focus:bg-terracotta focus:px-4 focus:py-3',
					'focus:text-sm focus:font-semibold focus:text-white',
				)}
			>
				{t.common.skipToContent}
			</a>

			<header
				className={cx(
					'fixed inset-x-0 top-0 z-60 flex items-center justify-between gap-4',
					'border-b px-[clamp(1.25rem,5vw,3rem)] transition-all duration-500 ease-brand',
					heroPassed
						? 'border-line bg-bone/92 py-3 backdrop-blur-xl'
						: 'border-transparent py-5',
				)}
			>
				<a
					href={`#${SECTIONS.top}`}
					className={cx(
						'whitespace-nowrap font-serif text-xl tracking-[-0.02em]',
						'no-underline transition-colors duration-500 ease-brand',
						darkOnLight
							? 'text-umber'
							: 'text-white [text-shadow:0_1px_12px_rgb(0_0_0/0.5)]',
					)}
				>
					{site.logotype}
				</a>

				<div className="hidden items-center gap-[clamp(1rem,2.4vw,2.1rem)] md:flex">
					<nav aria-label={t.nav.offer}>
						<ul className="flex list-none items-center gap-[clamp(1rem,2.4vw,2.1rem)] p-0">
							{NAV_ITEMS.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className={cx(
											NAV_LINK,
											heroPassed
												? 'text-muted hover:text-terracotta'
												: 'text-white [text-shadow:0_1px_10px_rgb(0_0_0/0.55)]',
										)}
									>
										{t.nav[item.key]}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<LanguageSwitcher onPhoto={!heroPassed} />
				</div>

				<div className="flex items-center gap-2 md:hidden">
					<LanguageSwitcher onPhoto={!darkOnLight} />

					<button
						type="button"
						aria-expanded={menuOpen}
						aria-controls="mobile-menu"
						aria-label={
							menuOpen ? t.common.closeMenu : t.common.openMenu
						}
						onClick={() => setMenuOpen((open) => !open)}
						className={cx(
							'flex h-11 w-11 flex-col justify-center gap-[5px]',
							'cursor-pointer border-0 bg-transparent p-0',
						)}
					>
						{[0, 1, 2].map((index) => (
							<span
								key={index}
								className={cx(
									'mx-auto block h-px w-6 transition-all duration-400 ease-brand',
									darkOnLight
										? 'bg-umber'
										: 'bg-white shadow-[0_0_6px_rgb(0_0_0/0.4)]',
									menuOpen &&
										index === 0 &&
										'translate-y-[6px] rotate-45',
									menuOpen && index === 1 && 'opacity-0',
									menuOpen &&
										index === 2 &&
										'-translate-y-[6px] -rotate-45',
								)}
							/>
						))}
					</button>
				</div>
			</header>

			<div
				id="mobile-menu"
				className={cx(
					'fixed inset-0 z-55 flex flex-col justify-center gap-10',
					'bg-bone px-[clamp(1.25rem,5vw,3rem)] pb-12 pt-20',
					'transition-all duration-500 ease-brand md:hidden',
					menuOpen
						? 'visible translate-y-0 opacity-100'
						: 'invisible -translate-y-6 opacity-0',
				)}
			>
				<nav aria-label={t.common.openMenu}>
					<ol className="m-0 grid list-none gap-1 p-0">
						{NAV_ITEMS.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									onClick={() => setMenuOpen(false)}
									tabIndex={menuOpen ? undefined : -1}
									className={MENU_LINK}
								>
									{t.nav[item.key]}
								</a>
							</li>
						))}
					</ol>
				</nav>

				<div className="grid justify-items-start gap-4">
					<a
						href={site.instagramUrl}
						target="_blank"
						rel="noopener noreferrer"
						tabIndex={menuOpen ? undefined : -1}
						className={cx(
							'font-sans text-xs font-semibold uppercase tracking-[0.2em]',
							'text-terracotta no-underline',
						)}
					>
						{site.instagramHandle}
					</a>
					<Button
						href={`#${SECTIONS.contact}`}
						onClick={() => setMenuOpen(false)}
					>
						{t.ctaBand.action}
					</Button>
				</div>
			</div>
		</>
	);
}
