import { useContext } from 'react';
import { LanguageContext } from './context';

export function useTranslation() {
	const value = useContext(LanguageContext);

	if (!value)
		throw new Error(
			'useTranslation has to be called inside <LanguageProvider>.',
		);

	return value;
}
