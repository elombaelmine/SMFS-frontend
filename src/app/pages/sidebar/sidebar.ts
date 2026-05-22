import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar implements OnInit {

  // FIX: Emptied out the constructor parameters so it doesn't crash trying to read an undefined 'Router'
  constructor() { }

  ngOnInit(): void {
    // Initialization code if needed
  }

  /**
   * Administrative utility action to append structural sensor objects
   */
  onAddNewSensor(): void {
    console.log('[ACTION] Request to add a new physical or virtual sensor instance initialized.');
  }
}