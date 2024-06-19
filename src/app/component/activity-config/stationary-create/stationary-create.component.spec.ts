import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationaryCreateComponent } from './stationary-create.component';

describe('StationaryCreateComponent', () => {
  let component: StationaryCreateComponent;
  let fixture: ComponentFixture<StationaryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationaryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationaryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
