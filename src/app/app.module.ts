import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ReactiveFormsModule } from '@angular/forms';
import { TutorialState, UsersState } from './state/tutorial.state';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { ResultsComponent } from './results/results.component';
import { ImportFileComponent } from './components/import-file/import-file.component';
import { ImportFileMultipleComponent } from './components/import-file-multiple/import-file-multiple.component';
import { ImportFileDragdropComponent } from './components/import-file-dragdrop/import-file-dragdrop.component';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
import { ItemAcordeonComponent } from './components/acordeon/item-acordeon/item-acordeon.component';
import { ItemFilesComponent } from './components/import-file-multiple/item-files/item-files.component';
import { ValidateDataFilesComponent } from './components/import-file-multiple/validate-data-files/validate-data-files.component';


@NgModule({
   declarations: [
      AppComponent,
      CreateComponent,
      ReadComponent,
      ResultsComponent,
      ImportFileComponent,
      ImportFileMultipleComponent,
      ImportFileDragdropComponent,
      AcordeonComponent,
      ItemAcordeonComponent,
      ItemFilesComponent,
      ValidateDataFilesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      NgxsModule.forRoot([TutorialState,UsersState]),
      NgxsReduxDevtoolsPluginModule.forRoot(),
      NgxsLoggerPluginModule.forRoot(),
      ReactiveFormsModule,
      HttpClientModule,
   ],
   providers: [   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
