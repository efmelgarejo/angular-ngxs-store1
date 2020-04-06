import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Tutorial } from './../models/tutorial.models'
import { TutorialState, UsersState, TutorialStateModel } from './../state/tutorial.state' // We will use this shortly
import { Observable } from 'rxjs'
import { RemoveTutorial, SetUsersFromApi, SetUsersFromApiOne} from './../actions/tutorial.actions'
import { state } from '@angular/animations';
import { ResultsService } from '../results/results.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial>
  
  constructor(
    private store: Store, 
    private tutorialState: TutorialState, 
    private userState: UsersState,
    private resultService: ResultsService
    ) { 
    this.tutorials$ = this.store.select(state => state.tutoriales.arr_tutorials)
  }

  ngOnInit() {
    console.log("TUTOS",this.tutorials$)
    this.store.select(state => state.tutoriales.arr_tutorials).subscribe(s => console.log(s))

    /* console.log("SS",this.store.snapshot())
    this.tutorials$.subscribe(res => console.log(res))
    this.store.select(state => state.tutoriales.arr_tutorials).subscribe(res => console.log(res)) */

    //this.setUsers()
  
  }

  delTutorial(name){
    this.store.dispatch(new RemoveTutorial(name))
  }

  setUsersToStore(){
    //this.store.select(state => state.usersFromApi.usersData).subscribe(u=>console.log("USERS",u))
    this.resultService.getUsers().subscribe( res => {
      this.store.dispatch(new SetUsersFromApi(res))
    })
    
  }

}
