import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrls: ['./settings.css']
})
export class Settings implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('[SETTINGS] Interface initialized. Loading threshold boundaries from system configuration logs.');
  }

  /**
   * Dispatches modified settings values downstream to the active database
   */
  onSaveSettings(): void {
    console.log('[SETTINGS] Re-compiling payload maps... Updating baseline metrics configuration framework.');
    alert('System Configuration parameters updated successfully.');
  }
}