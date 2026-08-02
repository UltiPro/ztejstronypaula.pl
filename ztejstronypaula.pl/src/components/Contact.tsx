import { useState, type SubmitEvent } from 'react';
import { SECTIONS, site } from '../content/site';
import { useTranslation } from '../i18n/useTranslation';
import { cx } from '../lib/cx';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const FIELD = cx(
	'w-full rounded-[2px] border border-line bg-bone-2 px-4 py-3.5',
	'font-sans text-base leading-relaxed text-ink',
	'transition-[border-color,background-color] duration-300 ease-brand',
	'hover:border-muted focus:border-terracotta focus:bg-bone focus:outline-none',
);

const LABEL = cx(
	'font-sans text-xs font-semibold uppercase',
	'leading-none tracking-[0.14em] text-muted',
);

export function Contact() {
	const { t } = useTranslation();
	const [attempted, setAttempted] = useState(false);

	// TO DO: Implement actual form submission logic
	function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		setAttempted(true);
	}

	const channels = [
		{
			label: t.contact.channels.emailLabel,
			value: site.email,
			href: `mailto:${site.email}`,
		},
		{
			label: t.contact.channels.instagramLabel,
			value: site.instagramHandle,
			href: site.instagramUrl,
		},
		{ label: t.contact.channels.areaLabel, value: t.contact.channels.areaValue },
		{
			label: t.contact.channels.responseLabel,
			value: t.contact.channels.responseValue,
		},
	];

	return (
		<section id={SECTIONS.contact} className="section">
			<div className="wrap">
				<Reveal className="mb-[clamp(2.25rem,5vw,3.5rem)]">
					<SectionHeading
						eyebrow={t.contact.eyebrow}
						title={t.contact.title}
						intro={t.contact.intro}
					/>
				</Reveal>

				<div
					className={cx(
						'grid items-start gap-[clamp(2rem,5vw,4.5rem)]',
						'md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]',
					)}
				>
					<Reveal>
						<form
							onSubmit={handleSubmit}
							className="grid gap-[1.1rem]"
							noValidate
						>
							<div className="grid gap-[1.1rem] sm:grid-cols-2">
								<p className="grid gap-1.5">
									<label htmlFor="field-name" className={LABEL}>
										{t.contact.form.name}
									</label>
									<input
										id="field-name"
										name="name"
										type="text"
										autoComplete="given-name"
										placeholder={t.contact.form.namePlaceholder}
										className={FIELD}
									/>
								</p>
								<p className="grid gap-1.5">
									<label htmlFor="field-email" className={LABEL}>
										{t.contact.form.email}
									</label>
									<input
										id="field-email"
										name="email"
										type="email"
										autoComplete="email"
										placeholder={t.contact.form.emailPlaceholder}
										className={FIELD}
									/>
								</p>
							</div>

							<div className="grid gap-[1.1rem] sm:grid-cols-2">
								<p className="grid gap-1.5">
									<label htmlFor="field-session" className={LABEL}>
										{t.contact.form.sessionType}
									</label>
									<select
										id="field-session"
										name="sessionType"
										className={FIELD}
										defaultValue=""
									>
										<option value="" disabled>
											{t.contact.form.sessionTypePlaceholder}
										</option>
										{t.contact.sessionTypes.map((option) => (
											<option key={option} value={option}>
												{option}
											</option>
										))}
									</select>
								</p>
								<p className="grid gap-1.5">
									<label htmlFor="field-date" className={LABEL}>
										{t.contact.form.date}
									</label>
									<input
										id="field-date"
										name="date"
										type="text"
										placeholder={t.contact.form.datePlaceholder}
										className={FIELD}
									/>
								</p>
							</div>

							<p className="grid gap-1.5">
								<label htmlFor="field-message" className={LABEL}>
									{t.contact.form.message}
								</label>
								<textarea
									id="field-message"
									name="message"
									rows={5}
									placeholder={t.contact.form.messagePlaceholder}
									className={cx(FIELD, 'min-h-32 resize-y')}
								/>
							</p>

							<p className="m-0">
								<Button type="submit">
									{t.contact.form.submit}
								</Button>
							</p>

							<p
								aria-live="polite"
								className="text-xs leading-relaxed text-muted"
							>
								{attempted ? (
									<span className="text-terracotta">
										{t.contact.form.notWired}{' '}
										<a
											href={`mailto:${site.email}`}
											className="underline"
										>
											{site.email}
										</a>
										.
									</span>
								) : (
									t.contact.form.note
								)}
							</p>
						</form>
					</Reveal>

					<Reveal>
						<dl className="m-0 grid list-none p-0">
							{channels.map((channel, i) => (
								<div
									key={channel.label}
									className={cx(
										'grid gap-1 border-b border-line pb-[1.15rem]',
										i > 0 && 'pt-[1.15rem]',
									)}
								>
									<dt className={LABEL}>{channel.label}</dt>
									<dd className="m-0">
										{channel.href ? (
											<a
												href={channel.href}
												{...(channel.href.startsWith('http')
													? {
															target: '_blank',
															rel: 'noopener noreferrer',
														}
													: {})}
												className={cx(
													'font-serif text-[1.375rem] tracking-[-0.01em]',
													'text-umber no-underline',
													'transition-colors duration-300 hover:text-terracotta',
												)}
											>
												{channel.value}
											</a>
										) : (
											<p className="text-muted">
												{channel.value}
											</p>
										)}
									</dd>
								</div>
							))}
						</dl>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
