import { site } from '../content/site';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';

// A vertical rail pinned to the right edge of the viewport.
export function InstagramRail() {
	const { t } = useTranslation();

	return (
		<a
			href={site.instagramUrl}
			target="_blank"
			rel="noopener noreferrer"
			className={cx(
				'fixed right-0 top-1/2 z-50 -translate-y-1/2',
				'hidden items-center gap-4 xl:flex',
				'border border-r-0 border-line bg-bone/90 px-3.5 py-6 backdrop-blur-md',
				'font-sans text-xs font-semibold uppercase tracking-[0.22em]',
				'text-muted no-underline [writing-mode:vertical-rl]',
				'transition-[color,padding] duration-350 ease-brand',
				'hover:pr-[1.15rem] hover:text-terracotta',
			)}
		>
			<span>{site.instagramHandle}</span>
			<span
				aria-hidden="true"
				className="block h-8 w-px bg-line [writing-mode:horizontal-tb]"
			/>
			<span>{t.contact.channels.instagramLabel}</span>
		</a>
	);
}
