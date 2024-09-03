function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

export function formatTime(seconds: number) {
    return seconds ? `${padTo2Digits(Math.floor(seconds / 60))}:${padTo2Digits(seconds % 60)}` : "-";
}

export function getTime(date: Date) {
    return `${new Date(date).getHours()}:${padTo2Digits(new Date(date).getMinutes())}`
}