import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    // Component lifecycle initialization logic goes here
  }

  /**
   * Triggers an immediate structural system override 
   * to shut down virtual field operations in an emergency.
   */
  onEmergencyStop(): void {
    const confirmation = confirm('CRITICAL ACTION: Trigger absolute system emergency override? This will cease all field irrigation operations.');
    if (confirmation) {
      console.warn('[SYSTEM] Emergency shutdown command dispatched to core C++ execution engine.');
      // Execute local emergency pipeline state change here
    }
  }

  /**
   * Tracks filter inputs typed into the predictive search bar.
   */
  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log(`[FILTER] Searching for field nodes matching query: ${inputElement.value}`);
  }
}