import { useEffect, useRef, useState } from 'react';

/**
Reports whether the hero has been scrolled past, which is what flips the
header from transparent to solid.
*/
export function useHeroPassed() {
	const markerRef = useRef<HTMLDivElement | null>(null);
	const [passed, setPassed] = useState(false);

	useEffect(() => {
		const element = markerRef.current;
		if (!element) return;
		if (typeof IntersectionObserver === 'undefined') return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// Marker out of view and above the fold means we are below the hero.
				setPassed(!entry.isIntersecting && entry.boundingClientRect.top < 0);
			},
			{ threshold: 0 },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return { markerRef, passed };
}
