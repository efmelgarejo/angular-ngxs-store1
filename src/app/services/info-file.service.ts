import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IArchivo } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class InfoFileService {

  private infoFileSubject = new BehaviorSubject<IArchivo[]>(null);
  public filesObs = this.infoFileSubject.asObservable();

  //infoFileGlobal:Array<IArchivo> = []

  constructor() { }

  setFilesObs(files:IArchivo[]){
    this.infoFileSubject.next(files)
  }
}
