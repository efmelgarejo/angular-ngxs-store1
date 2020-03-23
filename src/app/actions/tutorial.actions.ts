import { Tutorial } from '../models/tutorial.models'

export class AddTutorial {
    static readonly type = '[TOTORIAL] Add'
    constructor(public payload: Tutorial){}
}

export class RemoveTutorial {
    static readonly type = '[TOTORIAL] Remove'
    constructor(public payload: string){}
}

export class SetUsersFromApiOne {
    static readonly type = '[USER] SetUserFromApiOne'
    constructor(public users: any){}
}

export class SetUsersFromApi {
    static readonly type = '[USER] SetUserFromApi'
    constructor(public users: any){}
}


