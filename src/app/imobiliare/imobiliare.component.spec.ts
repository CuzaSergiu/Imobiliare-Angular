import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImobiliareComponent } from './imobiliare.component';

describe('ImobiliareComponent', () => {
  let component: ImobiliareComponent;
  let fixture: ComponentFixture<ImobiliareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImobiliareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImobiliareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
