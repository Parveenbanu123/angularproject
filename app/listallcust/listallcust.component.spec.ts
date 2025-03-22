import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallcustComponent } from './listallcust.component';

describe('ListallcustComponent', () => {
  let component: ListallcustComponent;
  let fixture: ComponentFixture<ListallcustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallcustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListallcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
