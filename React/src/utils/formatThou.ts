export const formatThou = (value: number) => {
    const lookup = [
        { value: 1, symbol: "k" },
        { value: 1e3, symbol: "M" },
        { value: 1e6, symbol: "B" },
        { value: 1e9, symbol: "T" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup.slice().reverse().find(function (item) {
        return Math.abs(value) >= item.value;
    });
    return item ? (value / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "";
}
