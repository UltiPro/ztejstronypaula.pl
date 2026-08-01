/*
Section header: eyebrow, title and an optional lead paragraph.

Does not animate itself: sections often reveal it together with a neighbouring
button or portrait, and a built-in <Reveal> would nest inside that one.
*/

import type { ReactNode } from 'react';
import { cx } from '../../lib/cx';

type Props = {
	eyebrow: string;
	title: string;
	intro?: string;
	// Variant for the dark green ground (the Instagram section).
	onDark?: boolean;
	// Anything belonging under the lead — a badge, a note, extra copy.
	children?: ReactNode;
	className?: string;
};

export function SectionHeading({
	eyebrow,
	title,
	intro,
	onDark,
	children,
	className,
}: Props) {
	return (
		<div className={cx('grid gap-3.5', className)}>
			<p
				className={cx(
					'font-sans text-xs font-semibold uppercase tracking-[0.2em]',
					onDark ? 'text-clay' : 'text-terracotta',
				)}
			>
				{eyebrow}
			</p>
			<h2
				className={cx(
					'text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.14]',
					onDark && 'text-bone',
				)}
			>
				{title}
			</h2>
			{intro && (
				<p
					className={cx(
						'max-w-[54ch]',
						onDark ? 'text-bone/75' : 'text-muted',
					)}
				>
					{intro}
				</p>
			)}
			{children}
		</div>
	);
}
