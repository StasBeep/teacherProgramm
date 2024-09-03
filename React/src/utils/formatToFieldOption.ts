export const formatToFieldOption = (name: string) => {
    return name[0].toLowerCase() + name.slice(1).replace(/[\s.,%]/g, '')
}
