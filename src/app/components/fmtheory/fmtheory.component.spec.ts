import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmtheoryComponent } from './fmtheory.component';

describe('FmtheoryComponent', () => {
  let component: FmtheoryComponent;
  let fixture: ComponentFixture<FmtheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmtheoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmtheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
