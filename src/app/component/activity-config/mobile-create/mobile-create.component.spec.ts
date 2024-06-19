import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCreateComponent } from './mobile-create.component';

describe('MobileCreateComponent', () => {
  let component: MobileCreateComponent;
  let fixture: ComponentFixture<MobileCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
