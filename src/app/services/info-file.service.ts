import { Injectable } from '@angular/core';
import { IArchivo } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class InfoFileService {

  infoFileGlobal:Array<IArchivo> = []

  constructor() { }
}
