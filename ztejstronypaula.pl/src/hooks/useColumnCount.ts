import { useEffect, useState } from 'react';

/*
How many masonry columns the gallery should use at the current width.

The numbers mirror Tailwind's own breakpoints (`min-[26rem]` and `lg`). The
count has to be known in JavaScript because tiles are dealt into columns by
hand: CSS multi-column rebalances all of them whenever items are appended, so
photos already on screen would jump sideways on "show more".
*/
const BREAKPOINTS = [
	{ query: '(min-width: 64rem)', columns: 3 },
	{ query: '(min-width: 26rem)', columns: 2 },
] as const;

function currentColumns(): number {
	if (typeof window === 'undefined' || !window.matchMedia) return 3;

	for (const { query, columns } of BREAKPOINTS)
		if (window.matchMedia(query).matches) return columns;

	return 1;
}

export function useColumnCount(): number {
	const [columns, setColumns] = useState(currentColumns);

	useEffect(() => {
		if (!window.matchMedia) return;

		const lists = BREAKPOINTS.map(({ query }) => window.matchMedia(query));
		const update = () => setColumns(currentColumns());

		for (const list of lists) list.addEventListener('change', update);
		return () => {
			for (const list of lists) list.removeEventListener('change', update);
		};
	}, []);

	return columns;
}
