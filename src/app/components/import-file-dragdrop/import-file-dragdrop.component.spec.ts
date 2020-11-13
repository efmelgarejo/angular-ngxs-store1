import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFileDragdropComponent } from './import-file-dragdrop.component';

describe('ImportFileDragdropComponent', () => {
  let component: ImportFileDragdropComponent;
  let fixture: ComponentFixture<ImportFileDragdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportFileDragdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFileDragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
