import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggeleComponent } from './toggele.component';

describe('ToggeleComponent', () => {
  let component: ToggeleComponent;
  let fixture: ComponentFixture<ToggeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
