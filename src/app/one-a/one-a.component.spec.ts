import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAComponent } from './one-a.component';

describe('OneAComponent', () => {
  let component: OneAComponent;
  let fixture: ComponentFixture<OneAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
