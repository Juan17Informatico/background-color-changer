
/**
 * 
 * @param {Object|String} color 
 * @returns {String}
 */
export function rgbToHex(color) {
    // Asegurarse de que los valores estén en el rango correcto (0-255)
    const clamp = (value) => Math.max(0, Math.min(255, value));
    const r = clamp(color.r);
    const g = clamp(color.g);
    const b = clamp(color.b);

    // Convertir cada componente a hexadecimal y concatenarlos
    const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    return `#${hex.toUpperCase()}`;
}