import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListXComponent } from './product-list-x.component';

describe('ProductListXComponent', () => {
  let component: ProductListXComponent;
  let fixture: ComponentFixture<ProductListXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
