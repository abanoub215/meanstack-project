import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketPageComponent } from './supermarket-page.component';

describe('SupermarketPageComponent', () => {
  let component: SupermarketPageComponent;
  let fixture: ComponentFixture<SupermarketPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupermarketPageComponent]
    });
    fixture = TestBed.createComponent(SupermarketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
