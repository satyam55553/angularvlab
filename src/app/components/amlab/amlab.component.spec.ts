import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmlabComponent } from './amlab.component';

describe('AmlabComponent', () => {
  let component: AmlabComponent;
  let fixture: ComponentFixture<AmlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmlabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
