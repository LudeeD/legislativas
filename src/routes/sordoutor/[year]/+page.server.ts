import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return [{ year: '2022' }, { year: '2024' }, { year: '2025' }];
};

export const prerender = true;
