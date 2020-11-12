import { Component, OnInit } from '@angular/core';

interface Archivo {
  lastModified: 1604109750249
  name: string;
  lastModifiedDate: Date;
  size: number;
  type: string;
  valid?: boolean
}

@Component({
  selector: 'app-import-file-multiple',
  templateUrl: './import-file-multiple.component.html',
  styleUrls: ['./import-file-multiple.component.css']
})
export class ImportFileMultipleComponent implements OnInit {

  private filesSelected: Array<Archivo> = [];
  private filesValidList: Array<Archivo> = []
  private fileValid: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeFile(files: Array<Archivo>) {
    this.filesSelected = [];
    this.filesValidList = []

    this.filesSelected = Array.from(files);
    
    
    const validExtensions = ['xlsx', 'txt', 'csv'];
    
    
    this.filesSelected.forEach(file => {
      const extension = file.name.split(".");
      const extFinal = extension[extension.length - 1]
      
      if(validExtensions.indexOf(extFinal) < 0 ){
        file.valid = false;
        console.log(file)
      } else {
        this.filesValidList.push(file)
        file.valid = true;
      }
    })
    
    console.log("TOTAL",this.filesSelected)
    console.log("VALIDOS",this.filesValidList)

  }

  enviarArchivos(){
    console.log("ENVIANDO...")
  }

}
