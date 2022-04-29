import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucesoComponent } from './suceso.component';

describe('SucesoComponent', () => {
  let component: SucesoComponent;
  let fixture: ComponentFixture<SucesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
