import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopContxVarComponent } from './for-loop-contx-var.component';

describe('ForLoopContxVarComponent', () => {
  let component: ForLoopContxVarComponent;
  let fixture: ComponentFixture<ForLoopContxVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForLoopContxVarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForLoopContxVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
