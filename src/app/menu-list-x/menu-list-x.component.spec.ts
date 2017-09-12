import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListXComponent } from './menu-list-x.component';

describe('MenuListXComponent', () => {
  let component: MenuListXComponent;
  let fixture: ComponentFixture<MenuListXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
