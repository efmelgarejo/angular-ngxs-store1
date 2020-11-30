import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item-acordeon',
  templateUrl: './item-acordeon.component.html',
  styleUrls: ['./item-acordeon.component.css']
})
export class ItemAcordeonComponent implements OnInit {

  @ViewChild('itemCard',null) itemCard: ElementRef;

  @Input() archivo;
  @Input() usuario;
  @Input() index;

  constructor() { }

  ngOnInit() {
    console.log(this.index)
    console.log(this.archivo)
  }

  hiddeCard(index):void {
    console.log(index)
    console.log(this.itemCard)
    // this.item.nativeElement.style.background="#FF0"
    this.itemCard.nativeElement.classList.toggle("select")

  }

}
