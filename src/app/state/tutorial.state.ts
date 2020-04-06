import { State, Action, StateContext, Select, Selector, Store} from '@ngxs/store'
import { Tutorial } from './../models/tutorial.models'
import { AddTutorial, RemoveTutorial, SetUsersFromApi, SetUsersFromApiOne } from '../actions/tutorial.actions'
import { ResultsService } from '../results/results.service'


export class TutorialStateModel {
    arr_tutorials: Tutorial[]
}

@State<TutorialStateModel>({
    name: 'tutoriales',
    defaults: {
        arr_tutorials: [
            {
                name:'Algoritmos',
                url: 'asasa.com'
            },
            {
                name:'POO in C#',
                url: 'vadada.com'
            },
        ]
    }
})

export class TutorialState {

    @Selector()
    static getTutorials(state: TutorialStateModel){
        return state.arr_tutorials
    }

    @Action(AddTutorial)
    add({getState, patchState}: StateContext<TutorialStateModel>, {payload}: AddTutorial){
        const state = getState()
        patchState({
            arr_tutorials: [...state.arr_tutorials, payload]
        })
    }

    @Action(RemoveTutorial)
    remove({getState, patchState}:StateContext<TutorialStateModel>, {payload}: RemoveTutorial){
        patchState({
            arr_tutorials: getState().arr_tutorials.filter(a => a.name != payload)
        })
    }

}

@State({
    name: 'usersFromApi',
    defaults: {
        usersData: []
    }
})

export class UsersState {

    constructor(private store: Store, private rservice: ResultsService){}

    @Action(SetUsersFromApiOne)
    SetUsersFromApiOne(context: StateContext<any>, action: SetUsersFromApi){
        this.rservice.getUsers().subscribe(res => {
            console.log("WW",res)
            this.store.dispatch( new SetUsersFromApi(res))
        })
    }

    @Action(SetUsersFromApi)
    SetUsersFromApi(context: StateContext<any>, action: SetUsersFromApi){
        console.log("AA",action)
        context.patchState({usersData: action})
    }

    @Selector()
    static getUsers(state){
        return state.usersData
    }

}
