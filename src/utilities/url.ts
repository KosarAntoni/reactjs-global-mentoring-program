export const appendToParams = (searchParams: URLSearchParams, newValue?: { [n: string]: string | null }) => {
    const params: any = {}
    searchParams.forEach((value: string | null, key: string) => {
        params[key] = value
    })

    return ({ ...params, ...newValue })
}

export const removeFromParams = (searchParams: URLSearchParams, removeKey: string) => {
    const params: any = {}
    searchParams.forEach((value: string | null, key: string) => {
        if (removeKey === key) return

        params[key] = value
    })

    return ({ ...params })
}
