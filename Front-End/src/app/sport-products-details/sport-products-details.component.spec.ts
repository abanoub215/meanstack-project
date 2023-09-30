import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportProductsDetailsComponent } from './sport-products-details.component';

describe('SportProductsDetailsComponent', () => {
  let component: SportProductsDetailsComponent;
  let fixture: ComponentFixture<SportProductsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportProductsDetailsComponent]
    });
    fixture = TestBed.createComponent(SportProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
