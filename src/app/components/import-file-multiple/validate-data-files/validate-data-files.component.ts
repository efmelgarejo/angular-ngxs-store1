import { Component, OnInit } from '@angular/core';
import { InfoFileService } from 'src/app/services/info-file.service';

@Component({
  selector: 'app-validate-data-files',
  templateUrl: './validate-data-files.component.html',
  styleUrls: ['./validate-data-files.component.scss']
})
export class ValidateDataFilesComponent implements OnInit {

  filesArray

  constructor(
    private infoFileService: InfoFileService
  ) { }

  ngOnInit() {
    //this.filesArray = this.infoFileService.infoFileGlobal;
    this.infoFileService.filesObs.subscribe( f => {
      this.filesArray = f
      console.log(this.filesArray);
    })
  }

  hiddeCard(archivo){
    
  }

}
