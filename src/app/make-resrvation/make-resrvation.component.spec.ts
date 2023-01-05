import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeResrvationComponent } from './make-resrvation.component';

describe('MakeResrvationComponent', () => {
  let component: MakeResrvationComponent;
  let fixture: ComponentFixture<MakeResrvationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeResrvationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeResrvationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
