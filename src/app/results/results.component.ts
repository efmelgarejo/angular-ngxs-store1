import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service'
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  users:any = []

  users$:Observable<any>

  constructor(
    private resultService: ResultsService,
    private store: Store
    ) { }

  ngOnInit() {
    
  }

  listDataFromApi(){
    this.resultService.getUsers().subscribe(res => {
      this.users = res
      console.log(res)
    })
  }

  listDataFromStore(){
    //console.log('From store')
    this.store.select(state => state.usersFromApi.usersData.users).subscribe(res => this.users$ = res)
    console.log(this.users$)
  }



}
