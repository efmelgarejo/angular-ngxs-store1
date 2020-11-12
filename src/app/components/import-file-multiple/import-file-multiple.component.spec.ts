import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFileMultipleComponent } from './import-file-multiple.component';

describe('ImportFileMultipleComponent', () => {
  let component: ImportFileMultipleComponent;
  let fixture: ComponentFixture<ImportFileMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportFileMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFileMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
