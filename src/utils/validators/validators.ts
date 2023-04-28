export const requiredField = value=> {
    if(value) return undefined
    return 'field is required'
}