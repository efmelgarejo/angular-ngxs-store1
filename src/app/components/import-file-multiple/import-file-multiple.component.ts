import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataArchivo } from 'src/app/data/dataFiles';
import { IArchivo } from 'src/app/models/file.model';
import { InfoFileService } from 'src/app/services/info-file.service';

@Component({
  selector: 'app-import-file-multiple',
  templateUrl: './import-file-multiple.component.html',
  styleUrls: ['./import-file-multiple.component.css']
})
export class ImportFileMultipleComponent implements OnInit {

  public filesSelected: Array<IArchivo> = [];
  public filesValidList: Array<IArchivo> = []
  public fileValid: boolean = false;

  constructor(
    private router: Router,
    private infoFileService: InfoFileService
    ) { }

  ngOnInit() {
  }

  changeFile(files: Array<IArchivo>) {
    this.filesSelected = [];
    this.filesValidList = []

    this.filesSelected = Array.from(files);
    
    
    const validExtensions = ['xlsx', 'xlsx', 'txt', 'csv'];
    
    
    this.filesSelected.forEach(file => {
      const extension = file.name.split(".");
      const extFinal = extension[extension.length - 1]
      
      if(validExtensions.indexOf(extFinal) < 0 ){
        file.valid = false;
        console.log(file)
      } else {
        this.filesValidList.push(file)
        file.valid = true;
        file.infoServer = DataArchivo
      }
    })
    
    console.log("TOTAL",this.filesSelected)
    console.log("VALIDOS",this.filesValidList)

  }

  enviarArchivos(){
    console.log("ENVIANDO...");
    this.infoFileService.infoFileGlobal = this.filesValidList;
    this.router.navigate(['/validar-datos']);
  }

}
