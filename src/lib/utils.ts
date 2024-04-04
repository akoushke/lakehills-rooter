import { VALID_SLUGS } from './constants';

export const isPathValid = (slug: string) => VALID_SLUGS.includes(slug);
