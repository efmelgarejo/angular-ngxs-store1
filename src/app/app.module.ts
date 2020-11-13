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


@NgModule({
   declarations: [
      AppComponent,
      CreateComponent,
      ReadComponent,
      ResultsComponent,
      ImportFileComponent,
      ImportFileMultipleComponent,
      ImportFileDragdropComponent,
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
