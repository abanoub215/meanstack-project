import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketProductsDetailsComponent } from './supermarket-products-details.component';

describe('SupermarketProductsDetailsComponent', () => {
  let component: SupermarketProductsDetailsComponent;
  let fixture: ComponentFixture<SupermarketProductsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupermarketProductsDetailsComponent]
    });
    fixture = TestBed.createComponent(SupermarketProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
