import type { ReactNode } from 'react';
import { cx } from '../../lib/cx';

type Variant = 'solid' | 'outline' | 'light' | 'onForest';

type Props = {
	children: ReactNode;
	href?: string;
	type?: 'button' | 'submit';
	variant?: Variant;
	external?: boolean;
	className?: string;
	onClick?: () => void;
};

const base = cx(
	'inline-flex cursor-pointer items-center justify-center gap-2',
	'rounded-[2px] border px-7 py-4 no-underline',
	'font-sans text-sm font-semibold uppercase leading-none tracking-[0.1em]',
	'transition-[background-color,color,border-color,transform] duration-300',
	'ease-brand hover:-translate-y-0.5',
);

const variants: Record<Variant, string> = {
	solid: 'border-transparent bg-terracotta text-white hover:bg-ink',
	outline: cx(
		'border-line bg-transparent text-umber',
		'hover:border-umber hover:bg-bone-2',
	),
	light: cx(
		'border-white/60 bg-transparent text-white backdrop-blur-[2px]',
		'hover:border-white hover:bg-white hover:text-ink',
	),
	onForest: cx(
		'border-bone/40 bg-transparent text-bone',
		'hover:border-clay hover:bg-clay hover:text-forest',
	),
};

export function Button({
	children,
	href,
	type = 'button',
	variant = 'solid',
	external,
	className,
	onClick,
}: Props) {
	const classes = cx(base, variants[variant], className);

	if (href) {
		return (
			<a
				href={href}
				className={classes}
				onClick={onClick}
				{...(external
					? { target: '_blank', rel: 'noopener noreferrer' }
					: {})}
			>
				{children}
			</a>
		);
	}

	return (
		<button type={type} className={classes} onClick={onClick}>
			{children}
		</button>
	);
}
