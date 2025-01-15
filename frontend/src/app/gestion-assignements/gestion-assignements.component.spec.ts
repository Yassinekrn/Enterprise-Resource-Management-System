import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAssignementsComponent } from './gestion-assignements.component';

describe('GestionAssignementsComponent', () => {
  let component: GestionAssignementsComponent;
  let fixture: ComponentFixture<GestionAssignementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAssignementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAssignementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
