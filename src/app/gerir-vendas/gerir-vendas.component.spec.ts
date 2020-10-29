import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirVendasComponent } from './gerir-vendas.component';

describe('GerirVendasComponent', () => {
  let component: GerirVendasComponent;
  let fixture: ComponentFixture<GerirVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerirVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerirVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
