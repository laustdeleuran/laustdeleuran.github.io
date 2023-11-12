import hexRgb from 'hex-rgb';

/**
 * Hex to RGBA
 * @src https://stackoverflow.com/a/50449250
 */
export const rgba = (hex: string, alpha: number = 1) => {
	const rgb = hexRgb(hex, { format: 'array' }).slice(0, -1).join(',');
	return `rgba(${rgb},${alpha})`;
};
