export const getFormettedDate = (date:any) => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}