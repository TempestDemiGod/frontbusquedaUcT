import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BAvanzadaComponent } from './b-avanzada.component';

describe('BAvanzadaComponent', () => {
  let component: BAvanzadaComponent;
  let fixture: ComponentFixture<BAvanzadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BAvanzadaComponent]
    });
    fixture = TestBed.createComponent(BAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
