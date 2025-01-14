import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreconfirmationComponent } from './preconfirmation.component';

describe('PreconfirmationComponent', () => {
  let component: PreconfirmationComponent;
  let fixture: ComponentFixture<PreconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreconfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
