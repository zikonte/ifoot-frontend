import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeventsuserappliedforComponent } from './listeventsuserappliedfor.component';

describe('ListeventsuserappliedforComponent', () => {
  let component: ListeventsuserappliedforComponent;
  let fixture: ComponentFixture<ListeventsuserappliedforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeventsuserappliedforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeventsuserappliedforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
