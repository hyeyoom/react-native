export type UserConstructorParam = {
    name: string
    signature: string
    token: string
}

export class User {
    name: string
    signature: string
    token: string

    constructor(param: UserConstructorParam | any) {
        this.name = param['name'] || param.name
        this.signature = param['signature'] || param.signature
        this.token = param['token'] || param.token
    }

    public toString = (): string => `User(name=${this.name})`
}
