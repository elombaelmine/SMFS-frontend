import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-telemetry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './telemetry.html',
  styleUrls: ['./telemetry.css']
})
export class TelemetryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('[TELEMETRY] Field telemetry dashboard initialized.');
  }
}