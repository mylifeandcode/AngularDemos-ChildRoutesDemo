import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBComponent } from './one-b.component';

describe('OneBComponent', () => {
  let component: OneBComponent;
  let fixture: ComponentFixture<OneBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
