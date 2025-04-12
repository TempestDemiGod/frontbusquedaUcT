import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCarpetasComponent } from './b-carpetas.component';

describe('BCarpetasComponent', () => {
  let component: BCarpetasComponent;
  let fixture: ComponentFixture<BCarpetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BCarpetasComponent]
    });
    fixture = TestBed.createComponent(BCarpetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
