export function makeCrudApis(resource: string) {
    return ["list", "read", "del", "create", "update"].reduce((acc, curr) => {
        acc[curr] = `${curr}_${resource}`
        return acc
    }, {}) as {
        list: string
        read: string
        del: string
        create: string
        update: string
    }
}