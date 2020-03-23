import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

constructor(private http: HttpClient) {

 }

 getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe()
}

}
