import type { Dictionary, Language } from '../types';
import { en } from './en';
import { pl } from './pl';

export const dictionaries: Record<Language, Dictionary> = { pl, en };
