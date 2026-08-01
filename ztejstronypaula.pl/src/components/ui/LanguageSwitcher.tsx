import { dictionaries } from '../../i18n/locales';
import { LANGUAGES } from '../../i18n/types';
import { useTranslation } from '../../i18n/useTranslation';
import { cx } from '../../lib/cx';

type Props = {
	// True while the switcher sits over the hero photograph.
	onPhoto?: boolean;
	className?: string;
};

export function LanguageSwitcher({ onPhoto, className }: Props) {
	const { language, setLanguage, t } = useTranslation();

	return (
		<div
			role="group"
			aria-label={t.common.languageLabel}
			className={cx('flex items-center gap-1', className)}
		>
			{LANGUAGES.map((code, index) => {
				const active = code === language;

				return (
					<span key={code} className="flex items-center gap-1">
						{index > 0 && (
							<span
								aria-hidden="true"
								className={cx(
									'text-xs',
									onPhoto ? 'text-white/40' : 'text-line',
								)}
							>
								/
							</span>
						)}
						<button
							type="button"
							onClick={() => setLanguage(code)}
							aria-current={active ? 'true' : undefined}
							aria-label={t.common.switchTo(
								dictionaries[code].meta.name,
							)}
							className={cx(
								'cursor-pointer border-0 bg-transparent p-1 font-sans text-xs font-semibold uppercase tracking-[0.14em]',
								'transition-colors duration-300 ease-brand',
								onPhoto
									? active
										? 'text-white [text-shadow:0_1px_10px_rgb(0_0_0/0.55)]'
										: 'text-white/55 hover:text-white/85'
									: active
										? 'text-terracotta'
										: 'text-muted hover:text-umber',
							)}
						>
							{dictionaries[code].meta.short}
						</button>
					</span>
				);
			})}
		</div>
	);
}
