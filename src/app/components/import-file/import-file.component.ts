import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.css']
})
export class ImportFileComponent implements OnInit {

  private fileSelected: File;
  private fileValid: boolean = false;

  constructor() { }

  ngOnInit() {
  }



  changeFile(file: File) {

    this.fileSelected = file[0];

    const extension = file[0].name.split(".");
    const extFinal = extension[extension.length - 1]

    const validExtensions = ['xlsx', 'txt', 'csv']

    if(validExtensions.indexOf(extFinal) < 0){
      console.log("GG", "extension no valida "+extFinal)
      this.fileValid = false;
    } else {
      this.fileValid = true;
    }

    console.log(this.fileSelected)
  }

}
