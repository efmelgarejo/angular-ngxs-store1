import { Component, OnInit } from '@angular/core';
import { DataArchivos } from 'src/app/data/dataFiles';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent implements OnInit {

  archivos = [];
  user = {};

  constructor() { }

  ngOnInit() {
    this.user = {
      nombre: "Emilio Melgarejo",
      profesion: "Programador",
      bio: "Soy Ingeniero de Sistemas, actualmente me dedico al desarrollo de software como Analista Front End Developer con tecnologías modernas como Angular y React. Maquetación con HTML y CSS (SASS o SCSS). Prototipado con Figma o Adobe Illustrator."
    }

    this.archivos = DataArchivos


  }

}
