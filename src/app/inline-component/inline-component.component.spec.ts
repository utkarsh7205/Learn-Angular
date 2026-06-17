import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineComponentComponent } from './inline-component.component';

describe('InlineComponentComponent', () => {
  let component: InlineComponentComponent;
  let fixture: ComponentFixture<InlineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
