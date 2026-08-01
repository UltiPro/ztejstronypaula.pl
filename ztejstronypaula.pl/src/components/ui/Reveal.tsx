import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { cx } from '../../lib/cx';

type Props = {
	children: ReactNode;
	className?: string;
	// Delay in milliseconds, for staggering elements in.
	delay?: number;
};

// Slides its content up as it enters the viewport.
export function Reveal({ children, className, delay }: Props) {
	const { ref, visible } = useReveal<HTMLDivElement>();

	return (
		<div
			ref={ref}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
			className={cx('reveal', visible && 'reveal-in', className)}
		>
			{children}
		</div>
	);
}
