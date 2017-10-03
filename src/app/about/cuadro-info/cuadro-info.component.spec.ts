import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroInfoComponent } from './cuadro-info.component';

describe('CuadroInfoComponent', () => {
  let component: CuadroInfoComponent;
  let fixture: ComponentFixture<CuadroInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadroInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
