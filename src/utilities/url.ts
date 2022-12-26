
export const appendToParams = (searchParams: any, newValue?: { [n: string]: string | null }) => {
    const params: any = {}
    searchParams.forEach((value: string | null, key: string) => {
        params[key] = value
    })

    return ({ ...params, ...newValue })
}

export const removeFromParams = (searchParams: any, removeKey: string) => {
    const params: any = {}
    searchParams.forEach((value: string | null, key: string) => {
        if (removeKey === key) return

        params[key] = value
    })

    return ({ ...params })
}
