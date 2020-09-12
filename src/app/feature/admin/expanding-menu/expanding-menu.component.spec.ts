import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingMenuComponent } from './expanding-menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExpandingMenuComponent', () => {
  let component: ExpandingMenuComponent;
  let fixture: ComponentFixture<ExpandingMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandingMenuComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should redirect to the home page', () => {
   component.home();
  });
  it('should redirect to the product page', () => {
    component.products();
  });
  it('should redirect to the user page', () => {
    component.users();
  });
});
