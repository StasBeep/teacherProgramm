export const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Б";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Б", "КБ", "МБ"];
    const variant = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, variant)).toFixed(dm)) + " " + sizes[variant];
}