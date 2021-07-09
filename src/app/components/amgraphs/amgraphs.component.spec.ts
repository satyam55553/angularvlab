import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmgraphsComponent } from './amgraphs.component';

describe('AmgraphsComponent', () => {
  let component: AmgraphsComponent;
  let fixture: ComponentFixture<AmgraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmgraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmgraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
