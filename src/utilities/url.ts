export interface urlSearchParams {
    [n: string]: string
}

export const appendToParams = (searchParams: urlSearchParams, newValue?: urlSearchParams) => {
    return ({ ...searchParams, ...newValue })
}

export const removeFromParams = (searchParams: urlSearchParams, removeKey: string) => {
    return Object.entries(searchParams).reduce((previousValue, [key, value]) => {
        return key === removeKey ? previousValue : { ...previousValue, key: value }
    }, {})
}
