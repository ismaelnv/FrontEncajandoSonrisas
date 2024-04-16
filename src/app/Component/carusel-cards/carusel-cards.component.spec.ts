import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselCardsComponent } from './carusel-cards.component';

describe('CaruselCardsComponent', () => {
  let component: CaruselCardsComponent;
  let fixture: ComponentFixture<CaruselCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaruselCardsComponent]
    });
    fixture = TestBed.createComponent(CaruselCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
