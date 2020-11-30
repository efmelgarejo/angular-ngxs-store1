import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-files',
  templateUrl: './item-files.component.html',
  styleUrls: ['./item-files.component.scss']
})
export class ItemFilesComponent implements OnInit {
  @Input() file: any;

  constructor() { }

  ngOnInit() {
    console.log(this.file)
  }

}
