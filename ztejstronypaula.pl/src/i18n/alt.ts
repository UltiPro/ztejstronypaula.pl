import type { ImageSlot } from '../content/images';
import type { Dictionary } from './types';

export function altOf(t: Dictionary, slot: ImageSlot): string {
	const written = t.imageAlt[slot.id];
	if (written) return written;
	return slot.auto ? t.imageAltAuto(slot.auto.of, slot.auto.index) : slot.id;
}
