// Csathó Bulcsú, 2025.11.24 20:01, Szoft/IIE

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzioListaComponent } from './verzio-lista.component';

describe('VerzioListaComponent', () => {
  let component: VerzioListaComponent;
  let fixture: ComponentFixture<VerzioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerzioListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerzioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
