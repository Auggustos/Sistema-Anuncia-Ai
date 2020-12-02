import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartVendasComponent } from './chart-vendas.component';

describe('ChartVendasComponent', () => {
  let component: ChartVendasComponent;
  let fixture: ComponentFixture<ChartVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
