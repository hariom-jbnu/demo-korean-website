export const DEFAULT_VISIBLE_TESTIMONIALS = 6;

export function getVisibleTestimonials<T>(
  items: readonly T[],
  showAll: boolean,
  initialCount: number = DEFAULT_VISIBLE_TESTIMONIALS,
): T[] {
  if (showAll || items.length <= initialCount) {
    return [...items];
  }
  return items.slice(0, initialCount);
}

export function getHiddenTestimonialsCount(
  total: number,
  initialCount: number = DEFAULT_VISIBLE_TESTIMONIALS,
): number {
  return Math.max(0, total - initialCount);
}
