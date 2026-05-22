import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.html',
  styleUrls: ['./support.css']
})
export class Support implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('[SUPPORT] Diagnostic logs socket attached. Reviewing operational history streams.');
  }

  /**
   * Simulates flushing the live UI console logs buffer array
   */
  onClearLogs(): void {
    console.log('[SUPPORT] Command executed: Flushing internal terminal logging arrays.');
    alert('Local terminal logging buffer cleared successfully.');
  }
}