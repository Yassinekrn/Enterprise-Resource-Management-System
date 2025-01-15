import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAsgnComponent } from './dialog-asgn.component';

describe('DialogAsgnComponent', () => {
  let component: DialogAsgnComponent;
  let fixture: ComponentFixture<DialogAsgnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAsgnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAsgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
