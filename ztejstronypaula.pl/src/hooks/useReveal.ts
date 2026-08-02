import { useEffect, useRef, useState } from 'react';

/*
Reveals an element once it scrolls into view. The observer disconnects
after the first hit — the animation should play once, not every time the
element passes back and forth.
*/
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
	const ref = useRef<T | null>(null);

	const [visible, setVisible] = useState(
		() => typeof IntersectionObserver === 'undefined',
	);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;
		if (typeof IntersectionObserver === 'undefined') return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.disconnect();
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return { ref, visible };
}
