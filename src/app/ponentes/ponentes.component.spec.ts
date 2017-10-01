import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonentesComponent } from './ponentes.component';

describe('PonentesComponent', () => {
  let component: PonentesComponent;
  let fixture: ComponentFixture<PonentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
