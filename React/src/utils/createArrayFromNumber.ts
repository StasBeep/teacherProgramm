export const createArrayFromNumber = (from: number, to: number, step = 1, length = Math.ceil((to - from) / step)) =>
    Array.from({ length }, (_, i) => from + (i + 1) * step);
