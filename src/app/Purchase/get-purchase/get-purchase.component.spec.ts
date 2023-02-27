import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPurchaseComponent } from './get-purchase.component';

describe('GetPurchaseComponent', () => {
  let component: GetPurchaseComponent;
  let fixture: ComponentFixture<GetPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
