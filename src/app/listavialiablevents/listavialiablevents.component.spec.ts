import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListavialiableventsComponent } from './listavialiablevents.component';

describe('ListavialiableventsComponent', () => {
  let component: ListavialiableventsComponent;
  let fixture: ComponentFixture<ListavialiableventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListavialiableventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListavialiableventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
