import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateDataFilesComponent } from './components/import-file-multiple/validate-data-files/validate-data-files.component';


const routes: Routes = [
  {
    path: "validar-datos",
    component: ValidateDataFilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
