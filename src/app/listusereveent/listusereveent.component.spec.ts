import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusereveentComponent } from './listusereveent.component';

describe('ListusereveentComponent', () => {
  let component: ListusereveentComponent;
  let fixture: ComponentFixture<ListusereveentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListusereveentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListusereveentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
