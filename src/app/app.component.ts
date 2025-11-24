// Csathó Bulcsú, 2025.11.24 20:01, Szoft/IIE

import { Component } from '@angular/core';
import { VerzioListaComponent } from './verzio-lista/verzio-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VerzioListaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
