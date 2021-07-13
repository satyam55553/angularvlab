import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpopupComponent } from './ampopup.component';

describe('AmpopupComponent', () => {
  let component: AmpopupComponent;
  let fixture: ComponentFixture<AmpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
