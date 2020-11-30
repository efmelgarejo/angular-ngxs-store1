import { Component, OnInit } from '@angular/core';
import { InfoFileService } from 'src/app/services/info-file.service';

@Component({
  selector: 'app-validate-data-files',
  templateUrl: './validate-data-files.component.html',
  styleUrls: ['./validate-data-files.component.scss']
})
export class ValidateDataFilesComponent implements OnInit {

  files

  constructor(
    private infoFileService: InfoFileService
  ) { }

  ngOnInit() {
    this.files = this.infoFileService.infoFileGlobal
    console.log(this.files)
  }

  hiddeCard(archivo){
    
  }

}
