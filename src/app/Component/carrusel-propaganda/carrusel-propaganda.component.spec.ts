import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselPropagandaComponent } from './carrusel-propaganda.component';

describe('CarruselPropagandaComponent', () => {
  let component: CarruselPropagandaComponent;
  let fixture: ComponentFixture<CarruselPropagandaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselPropagandaComponent]
    });
    fixture = TestBed.createComponent(CarruselPropagandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
