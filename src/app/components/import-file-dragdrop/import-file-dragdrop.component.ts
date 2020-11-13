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
  selector: 'app-import-file-dragdrop',
  templateUrl: './import-file-dragdrop.component.html',
  styleUrls: ['./import-file-dragdrop.component.css']
})
export class ImportFileDragdropComponent implements OnInit {

  private filesSelected: Array<Archivo> = [];
  private filesValidList: Array<Archivo> = []
  private fileValid: boolean = false;
  private isDragActive: boolean;

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

  onDragOver(){
    console.log("dragOver")
    this.isDragActive=true;
  }

  onDragLeave(){
    console.log("Sali del area")
    this.isDragActive=false;
  }

  onDrop(){
    this.isDragActive=false
  }

}
