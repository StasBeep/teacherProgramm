export const getPercent = (a: number, b: number) => {
    return (a - b) / ((a + b) / 2) * 100
}