import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMatComponent } from './dialog-mat.component';

describe('DialogMatComponent', () => {
  let component: DialogMatComponent;
  let fixture: ComponentFixture<DialogMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
